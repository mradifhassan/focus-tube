/**
 * @file app.js
 * Exact FreeTube / YouTube Clone Web Application.
 * Classic Dark #0f0f0f theme with standard YouTube red accents.
 * Features clean Channel Pages, working Video & Playlist tabs, and Up Next feed.
 */

import { CODEBASE_SUBSCRIBED_CHANNELS, BUILTIN_CATALOG, INVIDIOUS_INSTANCES, ICONS } from './data.js';

// ============================================================================
// RECOMMENDATIONS ENGINE (RELATED VIDEOS FINDER)
// ============================================================================
class RelatedVideosEngine {
  constructor(videos) {
    this.videos = videos || [];
    this.adjacencyList = new Map();
    this.buildGraph();
  }

  buildGraph() {
    this.videos.forEach(v => {
      this.adjacencyList.set(v.id, new Set());
    });

    for (let i = 0; i < this.videos.length; i++) {
      for (let j = i + 1; j < this.videos.length; j++) {
        const v1 = this.videos[i];
        const v2 = this.videos[j];
        const text1 = (v1.title + ' ' + (v1.description || '')).toLowerCase();
        const text2 = (v2.title + ' ' + (v2.description || '')).toLowerCase();
        const words1 = new Set(text1.match(/\b[a-z\u0980-\u09ff]{4,}\b/g) || []);
        const words2 = new Set(text2.match(/\b[a-z\u0980-\u09ff]{4,}\b/g) || []);
        
        let overlap = 0;
        words1.forEach(w => {
          if (words2.has(w)) overlap++;
        });

        if (overlap >= 1 || j === i + 1) {
          this.adjacencyList.get(v1.id).add(v2.id);
          this.adjacencyList.get(v2.id).add(v1.id);
        }
      }
    }
  }

  getUpNext(startId, maxNodes = 12) {
    if (!this.adjacencyList.has(startId)) return [];
    const visited = new Set([startId]);
    const queue = [startId];
    const result = [];

    while (queue.length > 0 && result.length < maxNodes) {
      const currentId = queue.shift();
      const videoObj = this.videos.find(v => v.id === currentId);
      if (videoObj && currentId !== startId) result.push(videoObj);

      const neighbors = this.adjacencyList.get(currentId) || new Set();
      neighbors.forEach(nId => {
        if (!visited.has(nId)) {
          visited.add(nId);
          queue.push(nId);
        }
      });
    }
    return result;
  }
}

// ============================================================================
// MAIN FREETUBE / YOUTUBE CLONE APPLICATION CLASS
// ============================================================================
class FreeTubeApp {
  constructor() {
    this.subscribedChannels = this.loadChannels();
    this.userName = localStorage.getItem('yt_user_name') || 'Radif Hassan';
    this.privacyShield = localStorage.getItem('yt_privacy_shield') !== 'false';
    
    // View State
    this.activeView = 'home'; // 'home' | 'channel' | 'subscriptions' | 'library' | 'playlist_detail'
    this.selectedChannelId = null;
    this.selectedPlaylist = null;
    this.channelTab = 'videos'; // 'videos' | 'playlists' | 'about'
    this.searchQuery = '';
    this.feedFilter = 'all'; // 'all' | 'playlists' | 'science' | 'tech' | 'recently'
    // Sidebar is a persistent mini/full rail on large screens, a slide-over drawer on small ones.
    this.sidebarExpanded = window.innerWidth >= 1024;
    this.isMobile = window.innerWidth < 1024;
    window.addEventListener('resize', () => {
      const nowMobile = window.innerWidth < 1024;
      if (nowMobile !== this.isMobile) {
        this.isMobile = nowMobile;
        this.sidebarExpanded = !nowMobile;
        this.render();
      }
    });
    
    // Player Stack
    this.watchVideo = null;
    this.watchHistoryStack = [];
    this.descriptionExpanded = false;

    // Native-style playlist autoplay/queue state
    this.playlistAutoplay = true;
    this.playlistRepeat = false;
    this.playlistShuffle = false;
    this._ytPlayer = null;
    this._ytApiPromise = null;

    this.dataCache = this.loadCatalog();
    this.root = document.getElementById('root');

    // Modals
    this.showAddModal = false;
    this.showUserModal = false;

    // Isolated single-video route (e.g. #/v/dQw4w9WgXcQ)
    // Totally separate from the feed/recommendations — just player + title + duration + description.
    this.isolatedVideoId = null;
    this.isolatedVideoData = null;

    // Shareable deep-link router: #/channel/<slug>, #/channel/<slug>/playlist/<id>,
    // #/channel/<slug>/playlist/<id>/video/<n>, #/channel/<slug>/video/<videoId>, #/v/<videoId>
    this.applyRoute(this.parseRoute(), { initial: true });
    window.addEventListener('hashchange', () => {
      this.applyRoute(this.parseRoute());
      this.render();
    });

    this.init();
  }

  // ============================================================================
  // SHAREABLE HASH ROUTER
  // ============================================================================
  slugify(str) {
    const s = String(str || '')
      .toLowerCase()
      .trim()
      .replace(/[^\p{L}\p{N}]+/gu, '-')
      .replace(/^-+|-+$/g, '');
    return s || 'channel';
  }

  resolveChannel(key) {
    if (!key) return null;
    const decoded = decodeURIComponent(key);
    let ch = this.subscribedChannels.find(c => c.id === decoded);
    if (ch) return ch;
    const slug = decoded.toLowerCase();
    return this.subscribedChannels.find(c => this.slugify(c.name) === slug) || null;
  }

  parseRoute() {
    const h = window.location.hash;

    let m = h.match(/^#\/v\/([a-zA-Z0-9_-]{6,20})$/);
    if (m) return { type: 'isolated', videoId: m[1] };

    m = h.match(/^#\/channel\/([^/]+)\/playlist\/([^/]+)\/video\/(\d+)$/);
    if (m) return { type: 'playlist_video', channelKey: m[1], playlistId: m[2], index: parseInt(m[3], 10) };

    m = h.match(/^#\/channel\/([^/]+)\/playlist\/([^/]+)$/);
    if (m) return { type: 'playlist', channelKey: m[1], playlistId: m[2] };

    m = h.match(/^#\/channel\/([^/]+)\/video\/([^/]+)$/);
    if (m) return { type: 'channel_video', channelKey: m[1], videoId: m[2] };

    m = h.match(/^#\/channel\/([^/]+)$/);
    if (m) return { type: 'channel', channelKey: m[1] };

    if (h === '#/library') return { type: 'library' };
    if (h === '#/subscriptions') return { type: 'subscriptions' };

    return { type: 'home' };
  }

  // Applies a parsed route to app state. Does NOT touch the address bar (see syncHash()).
  applyRoute(route, opts) {
    opts = opts || {};

    if (route.type === 'isolated') {
      this.isolatedVideoId = route.videoId;
      this.isolatedVideoData = null;
      return;
    }
    this.isolatedVideoId = null;
    this.isolatedVideoData = null;

    if (route.type === 'home') {
      this.watchVideo = null;
      this.activeView = 'home';
      this.selectedChannelId = null;
      this.selectedPlaylist = null;
      return;
    }
    if (route.type === 'library') {
      this.watchVideo = null;
      this.activeView = 'library';
      this.selectedChannelId = null;
      this.selectedPlaylist = null;
      return;
    }
    if (route.type === 'subscriptions') {
      this.watchVideo = null;
      this.activeView = 'subscriptions';
      this.selectedChannelId = null;
      this.selectedPlaylist = null;
      return;
    }

    // On the very first load, catalogs are populated synchronously from local cache/builtin data,
    // so channel/playlist/video routes can resolve immediately even before live fetches complete.
    const ch = this.resolveChannel(route.channelKey);
    if (!ch) {
      this.activeView = 'home';
      return;
    }
    this.selectedChannelId = ch.id;

    if (route.type === 'channel') {
      this.watchVideo = null;
      this.activeView = 'channel';
      this.selectedPlaylist = null;
      this.channelTab = 'videos';
      return;
    }

    if (route.type === 'playlist' || route.type === 'playlist_video') {
      const pls = this.getAllCachedPlaylists();
      const decodedPlId = decodeURIComponent(route.playlistId);
      const pl = pls.find(p => p.id === decodedPlId && p.channelId === ch.id) || pls.find(p => p.id === decodedPlId);
      if (!pl) {
        this.watchVideo = null;
        this.activeView = 'channel';
        return;
      }
      this.selectedPlaylist = pl;
      if (route.type === 'playlist') {
        this.watchVideo = null;
        this.activeView = 'playlist_detail';
      } else {
        const vidId = pl.videos && pl.videos[route.index - 1];
        if (vidId) {
          const allVids = this.getAllCachedVideos();
          this.watchVideo = allVids.find(v => v.id === vidId) || { id: vidId, title: 'Video', channelId: ch.id, channelName: ch.name };
        }
      }
      return;
    }

    if (route.type === 'channel_video') {
      const allVids = this.getAllCachedVideos();
      const vidId = decodeURIComponent(route.videoId);
      this.watchVideo = allVids.find(v => v.id === vidId) || { id: vidId, title: 'Video', channelId: ch.id, channelName: ch.name };
      this.selectedPlaylist = null;
      return;
    }
  }

  // Builds the canonical shareable hash for the current app state and writes it to the
  // address bar via pushState (no hashchange fires, so this never causes a re-render loop).
  buildRouteHash() {
    if (this.isolatedVideoId) return `#/v/${this.isolatedVideoId}`;

    if (this.watchVideo) {
      const ch = this.subscribedChannels.find(c => c.id === this.watchVideo.channelId);
      const chKey = encodeURIComponent(ch ? this.slugify(ch.name) : (this.watchVideo.channelId || 'channel'));
      if (this.selectedPlaylist && Array.isArray(this.selectedPlaylist.videos)) {
        const idx = this.selectedPlaylist.videos.indexOf(this.watchVideo.id);
        if (idx >= 0) {
          return `#/channel/${chKey}/playlist/${encodeURIComponent(this.selectedPlaylist.id)}/video/${idx + 1}`;
        }
      }
      return `#/channel/${chKey}/video/${encodeURIComponent(this.watchVideo.id)}`;
    }

    if (this.activeView === 'playlist_detail' && this.selectedPlaylist) {
      const owner = this.subscribedChannels.find(c => c.id === this.selectedPlaylist.channelId);
      const chKey = encodeURIComponent(owner ? this.slugify(owner.name) : (this.selectedPlaylist.channelId || 'channel'));
      return `#/channel/${chKey}/playlist/${encodeURIComponent(this.selectedPlaylist.id)}`;
    }

    if (this.activeView === 'channel' && this.selectedChannelId) {
      const ch = this.subscribedChannels.find(c => c.id === this.selectedChannelId);
      const chKey = encodeURIComponent(ch ? this.slugify(ch.name) : this.selectedChannelId);
      return `#/channel/${chKey}`;
    }

    if (this.activeView === 'library') return '#/library';
    if (this.activeView === 'subscriptions') return '#/subscriptions';

    return '#/';
  }

  syncHash() {
    const hash = this.buildRouteHash();
    if (window.location.hash !== hash) {
      history.pushState(null, '', hash);
    }
  }

  // ============================================================================
  // ISOLATED SINGLE-VIDEO VIEW (hash route: #/v/VIDEO_ID)
  // ============================================================================
  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  async fetchIsolatedVideoMeta(id) {
    for (const instance of INVIDIOUS_INSTANCES) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3500);
        const res = await fetch(`${instance}/api/v1/videos/${id}?fields=title,lengthSeconds,description`, { signal: controller.signal });
        clearTimeout(timeout);
        if (res.ok) {
          const data = await res.json();
          this.isolatedVideoData = {
            id,
            title: data.title || 'Untitled Video',
            duration: this.formatSeconds(data.lengthSeconds || 0),
            description: data.description || 'No description available.'
          };
          if (this.isolatedVideoId === id) this.renderIsolatedPage();
          return;
        }
      } catch (e) {}
    }
    // Every Invidious instance failed — still let the video play, just without metadata.
    this.isolatedVideoData = {
      id,
      title: 'Video ' + id,
      duration: '--:--',
      description: 'Could not fetch metadata right now (all sources unreachable). The player above may still work.'
    };
    if (this.isolatedVideoId === id) this.renderIsolatedPage();
  }

  async checkEmbeddable(id, fallbackElId) {
    try {
      const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + id)}&format=json`);
      if (!res.ok) {
        const el = document.getElementById(fallbackElId);
        if (el) el.classList.remove('hidden');
      }
    } catch (e) {
      // Can't reach oEmbed (offline/CORS) — stay silent, the iframe itself is still the primary signal.
    }
  }

  renderIsolatedMetaHtml(vid) {
    return `
      <h1 class="text-lg font-bold text-white leading-snug">${this.escapeHtml(vid.title)}</h1>
      <p class="text-xs text-[#aaa] mt-1 font-mono">${this.escapeHtml(vid.duration)}</p>
      <p class="text-xs text-[#ddd] whitespace-pre-line leading-relaxed mt-3">${this.escapeHtml(vid.description)}</p>
    `;
  }

  renderIsolatedPage() {
    const id = this.isolatedVideoId;
    const vid = this.isolatedVideoData;
    const host = this.privacyShield ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';

    this.root.innerHTML = `
      <div class="min-h-screen bg-[#0f0f0f] text-[#f1f1f1] flex items-start justify-center p-4 sm:p-10 font-sans select-none">
        <div class="max-w-3xl w-full flex flex-col gap-4">

          <div class="flex items-center justify-between">
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-[#272727] text-[#aaa]">Isolated Video &bull; No Suggestions</span>
            <a href="${window.location.pathname}" class="text-xs text-[#3ea6ff] hover:underline">Exit to FocusTube</a>
          </div>

          <div class="relative aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#272727]">
            <iframe
              src="${host}/embed/${id}?rel=0&modestbranding=1"
              title="${vid ? this.escapeHtml(vid.title) : 'Video player'}"
              class="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>

          <div id="isolated-embed-fallback" class="hidden bg-[#1f1f1f] border border-[#3f3f3f] rounded-xl p-4 text-sm text-[#ddd] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span>This video's owner has disabled embedding, so it can't play here.</span>
            <a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" class="shrink-0 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white font-bold text-xs">Watch on YouTube</a>
          </div>

          <div id="isolated-meta">
            ${vid ? this.renderIsolatedMetaHtml(vid) : `<div class="animate-pulse text-sm text-[#aaa]">Fetching title, duration &amp; description&hellip;</div>`}
          </div>
        </div>
      </div>
    `;

    if (!vid) {
      this.fetchIsolatedVideoMeta(id);
    }
    this.checkEmbeddable(id, 'isolated-embed-fallback');
  }

  loadChannels() {
    const saved = localStorage.getItem('yt_subscribed_channels');
    if (saved) {
      try { return JSON.parse(saved); } catch(e){}
    }
    return CODEBASE_SUBSCRIBED_CHANNELS;
  }

  saveChannels() {
    localStorage.setItem('yt_subscribed_channels', JSON.stringify(this.subscribedChannels));
  }

  loadCatalog() {
    const saved = localStorage.getItem('yt_catalog_cache');
    if (saved) {
      try { return JSON.parse(saved); } catch(e){}
    }
    return JSON.parse(JSON.stringify(BUILTIN_CATALOG));
  }

  saveCatalog() {
    localStorage.setItem('yt_catalog_cache', JSON.stringify(this.dataCache));
  }

  init() {
    this.render();
    this.setupEventListeners();
    if (!this.isolatedVideoId) {
      this.subscribedChannels.forEach(ch => this.fetchLiveChannelData(ch.id));
    }
  }

  async fetchLiveChannelData(channelId) {
    for (const instance of INVIDIOUS_INSTANCES) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3500);
        const res = await fetch(`${instance}/api/v1/channels/${channelId}/videos`, { signal: controller.signal });
        clearTimeout(timeout);

        if (res.ok) {
          const videos = await res.json();
          if (Array.isArray(videos) && videos.length > 0) {
            const formatted = videos.slice(0, 20).map(v => ({
              id: v.videoId,
              title: v.title,
              duration: this.formatSeconds(v.lengthSeconds || 420),
              views: `${this.formatNumber(v.viewCount || 1500)} views`,
              publishedText: v.publishedText || 'Recently',
              thumbnail: v.videoThumbnails ? v.videoThumbnails[0].url : `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`,
              channelId: channelId,
              channelName: v.author || 'YouTube Channel',
              description: v.description || ''
            }));

            if (!this.dataCache[channelId]) this.dataCache[channelId] = { videos: [], playlists: [] };
            this.dataCache[channelId].videos = formatted;
            this.saveCatalog();
            if (this.activeView === 'home' || (this.activeView === 'channel' && this.selectedChannelId === channelId)) {
              this.renderBody();
            }
            return;
          }
        }
      } catch (e) {}
    }
  }

  formatSeconds(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  }

  getAllCachedVideos() {
    let all = [];
    this.subscribedChannels.forEach(ch => {
      const cat = this.dataCache[ch.id];
      if (cat && cat.videos) {
        all = all.concat(cat.videos.map(v => ({
          ...v,
          avatarColor: ch.avatarColor || 'bg-red-600',
          initials: ch.initials || 'YT'
        })));
      }
    });
    return all;
  }

  getAllCachedPlaylists() {
    let all = [];
    this.subscribedChannels.forEach(ch => {
      const cat = this.dataCache[ch.id];
      if (cat && cat.playlists) {
        all = all.concat(cat.playlists.map(p => ({
          ...p,
          channelId: ch.id,
          channelName: ch.name
        })));
      }
    });
    return all;
  }

  // ============================================================================
  // MAIN RENDER FRAMEWORK
  // ============================================================================
  render() {
    if (this.isolatedVideoId) {
      this.renderIsolatedPage();
      return;
    }

    this.root.innerHTML = `
      <div class="flex flex-col min-h-screen bg-[#0f0f0f] text-[#f1f1f1] select-none font-sans">
        
        <!-- TOP NAVBAR -->
        <header class="sticky top-0 z-40 bg-[#0f0f0f]/95 backdrop-blur h-14 px-2 sm:px-4 flex items-center justify-between gap-1 sm:gap-2 border-b border-[#272727]">
          
          <!-- LEFT BRANDING -->
          <div class="flex items-center gap-1 sm:gap-4 shrink-0">
            <button id="toggle-sidebar-btn" class="p-2 rounded-full hover:bg-[#272727] text-[#f1f1f1] transition shrink-0">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            </button>
            <div id="nav-logo-btn" class="flex items-center gap-2 cursor-pointer shrink-0">
              <div class="bg-[#ff0000] text-white px-2 py-0.5 rounded-[6px] font-black tracking-tighter text-sm flex items-center justify-center shadow">
                <svg class="w-4 h-4 fill-white inline mr-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span class="hidden sm:inline font-bold text-lg tracking-tight text-white font-sans">FocusTube</span>
            </div>
          </div>

          <!-- CENTER SEARCH BAR -->
          <div class="flex items-center flex-1 min-w-0 max-w-xl mx-1 sm:mx-4">
            <div class="flex flex-1 min-w-0 items-center bg-[#121212] border border-[#303030] rounded-l-full px-2.5 sm:px-4 py-1.5 focus-within:border-[#3ea6ff]">
              <input type="text" id="yt-search-input" value="${this.searchQuery}" placeholder="Search" class="w-full min-w-0 bg-transparent text-sm text-white placeholder-[#888] focus:outline-none" />
              ${this.searchQuery ? `<button id="clear-search-btn" class="text-[#aaa] hover:text-white shrink-0">${ICONS.close}</button>` : ''}
            </div>
            <button id="submit-search-btn" class="shrink-0 bg-[#222222] border border-l-0 border-[#303030] hover:bg-[#272727] px-3 sm:px-6 py-2 rounded-r-full text-[#f1f1f1] transition">
              ${ICONS.search}
            </button>
          </div>

          <!-- RIGHT RAIL TOOLS -->
          <div class="flex items-center gap-1 sm:gap-3 shrink-0">
            <button id="add-channel-modal-btn" class="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-[#272727] hover:bg-[#3f3f3f] rounded-full text-xs font-medium text-white transition">
              <svg class="w-4 h-4 text-[#ff0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              <span>Add Channel</span>
            </button>

            <button id="change-user-modal-btn" class="flex items-center gap-2 p-1 sm:px-3 sm:py-1.5 rounded-full hover:bg-[#272727] text-xs font-medium transition" title="Change Username">
              <div class="w-7 h-7 rounded-full bg-[#3ea6ff] text-black font-bold flex items-center justify-center uppercase shadow shrink-0">
                ${this.userName.charAt(0)}
              </div>
              <span class="hidden md:inline text-[#f1f1f1] max-w-[90px] truncate">${this.userName}</span>
            </button>
          </div>
        </header>

        <!-- APP WORKSPACE: LEFT SIDEBAR + MAIN CONTENT AREA -->
        <div class="flex flex-1 overflow-hidden relative">

          <!-- MOBILE SIDEBAR BACKDROP -->
          <div id="sidebar-backdrop" class="${this.sidebarExpanded ? 'fixed inset-0 bg-black/60 z-30 lg:hidden' : 'hidden'}"></div>

          <!-- LEFT DRAWER SIDEBAR: slide-over on mobile, persistent mini/full rail on lg+ -->
          <aside id="yt-sidebar" class="${this.sidebarExpanded ? 'translate-x-0 w-72 sm:w-64 lg:w-60' : '-translate-x-full lg:translate-x-0 w-72 sm:w-64 lg:w-18'} fixed lg:static inset-y-0 left-0 top-14 lg:top-auto h-[calc(100%-3.5rem)] lg:h-auto shrink-0 bg-[#0f0f0f] border-r border-[#272727]/60 overflow-y-auto flex flex-col pt-3 transition-transform lg:transition-all duration-200 z-30">
            
            <div class="px-3 flex flex-col gap-1">
              <div data-nav="home" class="yt-sidebar-item ${this.activeView === 'home' && !this.selectedChannelId ? 'active' : ''}">
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span class="${this.sidebarExpanded ? '' : 'hidden'} text-sm">Home</span>
              </div>

              <div data-nav="subscriptions" class="yt-sidebar-item ${this.activeView === 'subscriptions' ? 'active' : ''}">
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M18.7 8.7H5.3V7h13.4v1.7zm-3.4-3.4H8.7V3.6h6.6v1.7zM22 12v8H2v-8h20zM4 18h16v-4.3H4V18z"/></svg>
                <span class="${this.sidebarExpanded ? '' : 'hidden'} text-sm">Subscriptions</span>
              </div>

              <div data-nav="library" class="yt-sidebar-item ${this.activeView === 'library' || this.activeView === 'playlist_detail' ? 'active' : ''}">
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0-2-.9-2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg>
                <span class="${this.sidebarExpanded ? '' : 'hidden'} text-sm">Playlists</span>
              </div>
            </div>

            ${this.sidebarExpanded ? `
              <div class="my-3 border-t border-[#272727] mx-3"></div>
              
              <div class="px-6 py-2 flex items-center justify-between">
                <span class="text-xs font-bold uppercase text-[#aaa] tracking-wider font-sans">Subscriptions (${this.subscribedChannels.length})</span>
                <button id="sidebar-add-ch-btn" class="text-[#3ea6ff] text-xs hover:underline">+ Add</button>
              </div>

              <!-- SUBSCRIBED CHANNELS LIST -->
              <div class="flex flex-col px-3 pb-6 gap-0.5">
                ${this.subscribedChannels.map(ch => `
                  <div data-sidebar-ch="${ch.id}" class="yt-sidebar-item ${this.activeView === 'channel' && this.selectedChannelId === ch.id ? 'active' : ''}">
                    <div class="w-6 h-6 rounded-full ${ch.avatarColor || 'bg-red-600'} text-white font-bold text-[10px] flex items-center justify-center shrink-0 shadow">
                      ${ch.initials || 'CH'}
                    </div>
                    <span class="truncate text-sm text-[#f1f1f1] flex-1">${ch.name}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <!-- FOOTER INFO IN SIDEBAR -->
            <div class="mt-auto p-4 border-t border-[#272727] ${this.sidebarExpanded ? '' : 'hidden'}">
              <p class="text-[11px] text-[#888] leading-relaxed">
                FreeTube WebApp v2.0<br>Open Source YouTube Client.<br>&copy; 2026 Radif Hassan.
              </p>
            </div>
          </aside>

          <!-- MAIN BODY CONTENT -->
          <main id="yt-body-content" class="flex-1 overflow-y-auto bg-[#0f0f0f] relative">
            <!-- Dynamically populated -->
          </main>

        </div>

        <!-- ADD CHANNEL MODAL DIALOG -->
        <div id="add-channel-modal" class="${this.showAddModal ? 'flex' : 'hidden'} fixed inset-0 z-50 bg-black/80 backdrop-blur-sm items-center justify-center p-4 animate-in fade-in duration-150">
          <div class="bg-[#212121] border border-[#3f3f3f] rounded-2xl max-w-lg w-full p-6 flex flex-col gap-5 shadow-2xl">
            <div class="flex items-center justify-between border-b border-[#3f3f3f] pb-3">
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <svg class="w-5 h-5 text-[#ff0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                Subscribe to YouTube Channel
              </h3>
              <button id="close-add-modal" class="text-[#aaa] hover:text-white">${ICONS.close}</button>
            </div>

            <form id="add-ch-form" class="flex flex-col gap-4">
              <div>
                <label class="block text-xs font-medium text-[#aaa] mb-1.5">YouTube Handle (@name), Channel ID or URL</label>
                <input type="text" id="add-ch-input" required placeholder="e.g. @Veritasium or https://youtube.com/@mkbhd" class="w-full bg-[#121212] border border-[#3f3f3f] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#3ea6ff]" />
              </div>
              <p id="add-modal-status" class="text-xs text-[#3ea6ff] hidden"></p>
              
              <div class="flex justify-end gap-3 pt-2">
                <button type="button" id="cancel-add-btn" class="px-4 py-2 rounded-full hover:bg-[#3f3f3f] text-sm text-[#aaa]">Cancel</button>
                <button type="submit" class="px-6 py-2 rounded-full bg-[#3ea6ff] hover:bg-[#65bbf7] text-black font-bold text-sm shadow">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <!-- USER PROFILE MODAL -->
        <div id="user-modal" class="${this.showUserModal ? 'flex' : 'hidden'} fixed inset-0 z-50 bg-black/80 backdrop-blur-sm items-center justify-center p-4 animate-in fade-in duration-150">
          <div class="bg-[#212121] border border-[#3f3f3f] rounded-2xl max-w-sm w-full p-6 flex flex-col gap-5 shadow-2xl">
            <div class="flex items-center justify-between border-b border-[#3f3f3f] pb-3">
              <h3 class="text-base font-bold text-white">Edit User Profile</h3>
              <button id="close-user-modal" class="text-[#aaa] hover:text-white">${ICONS.close}</button>
            </div>
            <form id="edit-user-form" class="flex flex-col gap-4">
              <input type="text" id="edit-username-input" required value="${this.userName}" placeholder="Your Name" class="w-full bg-[#121212] border border-[#3f3f3f] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#3ea6ff]" />
              <button type="submit" class="w-full py-2.5 rounded-full bg-[#3ea6ff] text-black font-bold text-sm">Save Profile</button>
            </form>
          </div>
        </div>

      </div>
    `;

    this.renderBody();
  }

  renderBody() {
    const main = document.getElementById('yt-body-content');
    if (!main) return;

    if (this.watchVideo) {
      main.innerHTML = this.renderWatchVideoPageHtml();
      this.attachWatchPageListeners();
      return;
    }

    if (this.activeView === 'home' || this.activeView === 'subscriptions') {
      main.innerHTML = this.renderHomePageHtml();
    } else if (this.activeView === 'channel' && this.selectedChannelId) {
      const ch = this.subscribedChannels.find(c => c.id === this.selectedChannelId) || this.subscribedChannels[0];
      main.innerHTML = this.renderChannelPageHtml(ch);
    } else if (this.activeView === 'library') {
      main.innerHTML = this.renderLibraryPageHtml();
    } else if (this.activeView === 'playlist_detail' && this.selectedPlaylist) {
      main.innerHTML = this.renderPlaylistDetailPageHtml(this.selectedPlaylist);
    }
  }

  // ============================================================================
  // YOUTUBE HOME / FEED PAGE
  // ============================================================================
  renderHomePageHtml() {
    let videos = this.getAllCachedVideos();
    
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      videos = videos.filter(v => v.title.toLowerCase().includes(q) || v.channelName.toLowerCase().includes(q));
    }

    if (this.feedFilter === 'playlists') {
      return this.renderLibraryPageHtml();
    } else if (this.feedFilter === 'science') {
      videos = videos.filter(v => v.title.includes('বিজ্ঞান') || v.title.toLowerCase().includes('physics') || v.title.toLowerCase().includes('science'));
    } else if (this.feedFilter === 'tech') {
      videos = videos.filter(v => v.title.toLowerCase().includes('tech') || v.channelName.toLowerCase().includes('tech') || v.title.includes('কোড') || v.title.includes('রসায়ন') || v.title.includes('ক্যালকুলাস'));
    }

    return `
      <!-- TOP CATEGORY FILTER PILLS -->
      <div class="sticky top-0 z-20 bg-[#0f0f0f]/95 backdrop-blur px-6 py-3 flex items-center gap-3 border-b border-[#272727] overflow-x-auto">
        <button data-filter="all" class="yt-chip px-4 py-1.5 rounded-lg text-sm shrink-0 ${this.feedFilter === 'all' ? 'active' : ''}">All</button>
        <button data-filter="playlists" class="yt-chip px-4 py-1.5 rounded-lg text-sm shrink-0 ${this.feedFilter === 'playlists' ? 'active' : ''}">Playlists</button>
        <button data-filter="science" class="yt-chip px-4 py-1.5 rounded-lg text-sm shrink-0 ${this.feedFilter === 'science' ? 'active' : ''}">Science & Physics</button>
        <button data-filter="tech" class="yt-chip px-4 py-1.5 rounded-lg text-sm shrink-0 ${this.feedFilter === 'tech' ? 'active' : ''}">Technology & Math</button>
        <button data-filter="recently" class="yt-chip px-4 py-1.5 rounded-lg text-sm shrink-0 ${this.feedFilter === 'recently' ? 'active' : ''}">Recently Uploaded</button>
      </div>

      <!-- VIDEO FEED GRID -->
      <div class="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        ${videos.map(v => `
          <div data-vid="${v.id}" data-ch="${v.channelId}" class="yt-video-card flex flex-col gap-3 group">
            <!-- THUMBNAIL -->
            <div class="relative aspect-video w-full rounded-xl overflow-hidden bg-[#222222]">
              <img src="${v.thumbnail}" alt="${v.title}" class="yt-thumb-img w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              <span class="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-white text-xs font-medium font-mono tracking-tight">
                ${v.duration}
              </span>
            </div>

            <!-- META INFO -->
            <div class="flex items-start gap-3 px-0.5">
              <div data-goto-ch="${v.channelId}" class="w-9 h-9 rounded-full ${v.avatarColor || 'bg-red-600'} text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 hover:scale-105 transition" title="${v.channelName}">
                ${v.initials || 'YT'}
              </div>
              <div class="flex flex-col gap-1 pr-2">
                <h3 class="text-sm font-semibold text-white line-clamp-2 leading-snug group-hover:text-[#3ea6ff] transition">${v.title}</h3>
                <div class="text-xs text-[#aaa] flex flex-col">
                  <span data-goto-ch="${v.channelId}" class="hover:text-white transition w-fit">${v.channelName}</span>
                  <span>${v.views} &bull; ${v.publishedText}</span>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ============================================================================
  // YOUTUBE CHANNEL PAGE
  // ============================================================================
  renderChannelPageHtml(channel) {
    const catalog = this.dataCache[channel.id] || { videos: [], playlists: [] };
    const vids = catalog.videos || [];
    const pls = catalog.playlists || [];

    return `
      <div class="flex flex-col pb-12">
        <!-- CHANNEL BANNER -->
        <div class="w-full h-32 sm:h-52 bg-gradient-to-r from-red-900/40 via-zinc-800 to-black relative">
          <div class="absolute inset-0 bg-[radial-gradient(#ff0000_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        </div>

        <!-- CHANNEL HEADER -->
        <div class="px-6 lg:px-16 pt-6 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#272727]">
          <div class="flex items-center gap-5">
            <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full ${channel.avatarColor || 'bg-red-600'} text-white font-black text-3xl flex items-center justify-center shadow-xl shrink-0 border-2 border-[#272727]">
              ${channel.initials || 'CH'}
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-bold text-white">${channel.name}</h1>
              <p class="text-xs text-[#aaa]">${channel.handle || '@channel'} &bull; ${channel.subscriberCount || 'Subscribed'} &bull; ${vids.length} videos</p>
              <p class="text-xs text-[#aaa] line-clamp-1 max-w-2xl mt-1">${channel.description || 'Welcome to official channel broadcast.'}</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <button class="bg-[#f1f1f1] hover:bg-white text-black font-semibold text-sm px-6 py-2.5 rounded-full shadow">
              Subscribed &#10003;
            </button>
            <button data-del-ch="${channel.id}" class="p-2.5 rounded-full bg-[#272727] hover:bg-red-600 hover:text-white text-[#aaa] transition" title="Unsubscribe Channel">
              ${ICONS.trash}
            </button>
          </div>
        </div>

        <!-- CHANNEL TABS -->
        <div class="px-6 lg:px-16 flex items-center border-b border-[#272727] bg-[#0f0f0f]">
          <div data-ch-tab="videos" class="yt-tab ${this.channelTab === 'videos' ? 'active' : ''}">Videos (${vids.length})</div>
          <div data-ch-tab="playlists" class="yt-tab ${this.channelTab === 'playlists' ? 'active' : ''}">Playlists (${pls.length})</div>
          <div data-ch-tab="about" class="yt-tab ${this.channelTab === 'about' ? 'active' : ''}">About Channel</div>
        </div>

        <!-- TAB BODY CONTENT -->
        <div class="p-6 lg:px-16 pt-8">
          ${this.channelTab === 'videos' ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8">
              ${vids.map(v => `
                <div data-vid="${v.id}" data-ch="${channel.id}" class="yt-video-card flex flex-col gap-2.5 group">
                  <div class="relative aspect-video rounded-xl overflow-hidden bg-[#222]">
                    <img src="${v.thumbnail}" alt="${v.title}" class="yt-thumb-img w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    <span class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-white text-xs font-mono">${v.duration}</span>
                  </div>
                  <h3 class="text-sm font-semibold text-white line-clamp-2 leading-snug group-hover:text-[#3ea6ff]">${v.title}</h3>
                  <p class="text-xs text-[#aaa]">${v.views} &bull; ${v.publishedText}</p>
                </div>
              `).join('')}
            </div>
          ` : this.channelTab === 'playlists' ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              ${pls.map(pl => `
                <div data-pl="${pl.id}" class="bg-[#1f1f1f] rounded-2xl overflow-hidden hover:bg-[#272727] transition cursor-pointer flex flex-col group border border-[#272727]">
                  <div class="relative aspect-video bg-[#111]">
                    <img src="${pl.thumbnail}" alt="${pl.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    <div class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <span class="text-white font-bold text-sm flex items-center gap-1.5 bg-red-600 px-4 py-2 rounded-full shadow">${ICONS.play} View Playlist</span>
                    </div>
                    <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-xs font-mono font-bold">
                      &#9776; ${pl.videoCount || (pl.videos ? pl.videos.length : 0)}
                    </span>
                  </div>
                  <div class="p-4">
                    <h4 class="text-sm font-bold text-white truncate group-hover:text-[#3ea6ff]">${pl.title}</h4>
                    <p class="text-xs text-[#aaa] mt-1">${pl.updatedText || 'Recently updated'}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="bg-[#1f1f1f] p-6 rounded-2xl max-w-3xl flex flex-col gap-4 border border-[#272727]">
              <h3 class="text-base font-bold text-white">Channel Description</h3>
              <p class="text-sm text-[#ddd] leading-relaxed whitespace-pre-line">${channel.description}</p>
              <div class="border-t border-[#272727] pt-4 flex flex-col gap-2 text-xs text-[#aaa]">
                <p>Channel ID: ${channel.id}</p>
                <p>Subscribers: ${channel.subscriberCount || 'Subscribed'}</p>
              </div>
            </div>
          `}
        </div>
      </div>
    `;
  }

  // ============================================================================
  // PLAYLISTS LIBRARY VIEW
  // ============================================================================
  renderLibraryPageHtml() {
    const pls = this.getAllCachedPlaylists();
    return `
      <div class="p-6 lg:p-10 flex flex-col gap-6">
        <h1 class="text-2xl font-bold text-white">Saved Playlists (${pls.length})</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          ${pls.map(pl => `
            <div data-pl="${pl.id}" class="bg-[#1f1f1f] rounded-2xl overflow-hidden hover:bg-[#272727] transition cursor-pointer flex flex-col group border border-[#272727]">
              <div class="relative aspect-video bg-[#111]">
                <img src="${pl.thumbnail}" alt="${pl.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <div class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span class="text-white font-bold text-sm flex items-center gap-1.5 bg-red-600 px-4 py-2 rounded-full shadow">${ICONS.play} View Playlist</span>
                </div>
                <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-xs font-mono font-bold">
                  &#9776; ${pl.videoCount || (pl.videos ? pl.videos.length : 0)} Videos
                </span>
              </div>
              <div class="p-4 flex flex-col gap-1">
                <h3 class="text-sm font-bold text-white truncate group-hover:text-[#3ea6ff]">${pl.title}</h3>
                <p class="text-xs text-[#aaa]">${pl.channelName}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ============================================================================
  // PLAYLIST DETAIL PAGE (DEDICATED VIEW FOR ANY PLAYLIST)
  // ============================================================================
  renderPlaylistDetailPageHtml(playlist) {
    const allVids = this.getAllCachedVideos();
    const plVideos = (playlist.videos || []).map(vidId => {
      return allVids.find(v => v.id === vidId) || {
        id: vidId,
        title: "YouTube Broadcast (" + vidId + ")",
        duration: "15:40",
        views: "124K views",
        publishedText: "Recently",
        thumbnail: "https://i.ytimg.com/vi/" + vidId + "/hqdefault.jpg",
        channelId: playlist.channelId || "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: playlist.channelName || "YouTube Channel"
      };
    });

    return `
      <!-- BREADCRUMB HEADER -->
      <div class="sticky top-0 z-20 bg-[#0f0f0f]/95 backdrop-blur px-6 py-3 border-b border-[#272727] flex items-center gap-3">
        <button id="playlist-back-btn" class="flex items-center gap-2 px-4 py-1.5 bg-[#272727] hover:bg-[#3f3f3f] text-white font-semibold text-xs rounded-full transition">
          <span>&larr;</span> Back to Playlists
        </button>
        <span class="text-sm font-bold text-white ml-2">Playlist</span>
        <span class="text-xs text-[#aaa] truncate">&bull; ${playlist.title}</span>
      </div>

      <div class="p-6 lg:p-10 flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        <!-- LEFT RAIL (STICKY CARD) -->
        <div class="w-full lg:w-80 shrink-0">
          <div class="sticky top-20 bg-gradient-to-b from-[#303030] to-[#1a1a1a] rounded-3xl p-6 border border-[#383838] flex flex-col gap-5 shadow-2xl">
            <div class="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
              <img src="${playlist.thumbnail}" alt="${playlist.title}" class="w-full h-full object-cover" />
              <div class="absolute bottom-2 right-2 bg-black/80 text-white px-2.5 py-0.5 rounded text-xs font-mono font-bold">
                &#9776; ${plVideos.length}
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <h1 class="text-xl font-bold text-white leading-snug">${playlist.title}</h1>
              <div class="text-xs text-[#aaa] flex flex-col gap-1 mt-1">
                <span data-goto-ch="${playlist.channelId || ''}" class="text-white hover:underline cursor-pointer font-medium">${playlist.channelName || 'YouTube Channel'}</span>
                <span>${playlist.updatedText || 'Updated recently'}</span>
              </div>
            </div>

            <div class="flex flex-col gap-3 pt-2">
              ${plVideos.length > 0 ? `
                <button data-vid="${plVideos[0].id}" data-ch="${plVideos[0].channelId}" data-in-playlist="true" class="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition">
                  ${ICONS.play} Play All
                </button>
              ` : ''}
              <button class="w-full py-2.5 rounded-full bg-[#272727] hover:bg-[#3f3f3f] text-white font-semibold text-sm flex items-center justify-center gap-2 transition">
                Share Playlist
              </button>
            </div>
          </div>
        </div>

        <!-- RIGHT RAIL (VIDEOS LIST) -->
        <div class="flex-1 flex flex-col gap-3">
          <h2 class="text-lg font-bold text-white mb-2">Videos in Playlist (${plVideos.length})</h2>
          ${plVideos.map((v, idx) => `
            <div data-vid="${v.id}" data-ch="${v.channelId}" data-in-playlist="true" class="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#272727] transition cursor-pointer group border border-transparent hover:border-[#383838] ${this.watchVideo && this.watchVideo.id === v.id ? 'bg-[#272727] border-[#383838]' : ''}">
              <span class="text-sm font-mono text-[#888] w-6 text-center shrink-0 group-hover:text-white font-bold">${idx + 1}</span>
              <div class="relative w-40 sm:w-48 aspect-video rounded-xl overflow-hidden bg-[#222] shrink-0">
                <img src="${v.thumbnail}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono">${v.duration}</span>
              </div>
              <div class="flex flex-col gap-1 flex-1 min-w-0">
                <h3 class="text-sm font-semibold text-white line-clamp-2 leading-snug group-hover:text-[#3ea6ff] transition">${v.title}</h3>
                <p class="text-xs text-[#aaa] truncate">${v.channelName}</p>
                <p class="text-[11px] text-[#777]">${v.views} &bull; ${v.publishedText}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ============================================================================
  // FREETUBE / YOUTUBE WATCH PAGE
  // ============================================================================
  renderWatchVideoPageHtml() {
    const vid = this.watchVideo;
    const ch = this.subscribedChannels.find(c => c.id === vid.channelId) || { name: vid.channelName || 'YouTube Channel', initials: 'YT', avatarColor: 'bg-red-600' };

    // "More videos" is scoped to ONLY this channel's own catalog — never pulls in outside/YouTube
    // suggestions, so watching stays isolated to the channels the user actually follows here.
    const allVids = this.getAllCachedVideos();
    const channelVids = allVids.filter(v => v.channelId === vid.channelId);
    const engine = new RelatedVideosEngine(channelVids);
    let upNext = engine.getUpNext(vid.id, 12).filter(v => v.id !== vid.id);
    if (upNext.length < 4) {
      upNext = channelVids.filter(v => v.id !== vid.id).slice(0, 12);
    }

    // Native-YouTube-style playlist queue: active only when the current video belongs to
    // the selected playlist (e.g. opened via "Play All" or a #/channel/.../playlist/.../video/N link).
    const inPlaylist = !!(this.selectedPlaylist && Array.isArray(this.selectedPlaylist.videos) && this.selectedPlaylist.videos.includes(vid.id));
    const plIds = inPlaylist ? this.selectedPlaylist.videos : [];
    const plIdx = inPlaylist ? plIds.indexOf(vid.id) : -1;

    const host = this.privacyShield ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
    const origin = encodeURIComponent(window.location.origin);

    return `
      <!-- TOP BACK BUTTON RAIL -->
      <div class="sticky top-0 z-30 bg-[#0f0f0f] px-3 sm:px-6 py-3 border-b border-[#272727] flex flex-wrap items-center justify-between gap-2">
        <button id="watch-back-btn" class="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#272727] hover:bg-[#3f3f3f] text-white font-bold text-xs sm:text-sm rounded-full transition shadow">
          <span>&larr;</span>
          <span>Back (${this.watchHistoryStack.length > 0 ? 'Previous Video' : 'Home'})</span>
        </button>

        <span class="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-[#272727] text-[#aaa]">
          ${this.privacyShield ? 'Privacy Shield Enabled' : 'Standard YouTube'}
        </span>
      </div>

      <div class="p-3 sm:p-4 lg:p-8 max-w-[1700px] mx-auto flex flex-col lg:flex-row gap-4 sm:gap-8">
        
        <!-- LEFT MAIN WATCH CONTAINER -->
        <div class="flex-1 flex flex-col gap-4 max-w-5xl min-w-0">
          
          <!-- IFRAME PLAYER -->
          <div class="relative aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#272727]">
            <iframe
              id="yt-watch-iframe"
              src="${host}/embed/${vid.id}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1&origin=${origin}"
              title="${vid.title}"
              class="w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>

          <!-- EMBEDDING-DISABLED FALLBACK (shown only if this video can't be embedded) -->
          <div id="watch-embed-fallback" class="hidden bg-[#1f1f1f] border border-[#3f3f3f] rounded-xl p-4 text-sm text-[#ddd] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span>This video's owner has disabled embedding, so it can't play here.</span>
            <a href="https://www.youtube.com/watch?v=${vid.id}" target="_blank" rel="noopener" class="shrink-0 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white font-bold text-xs">Watch on YouTube</a>
          </div>

          <!-- VIDEO TITLE + ISOLATED MODE LINK -->
          <div class="flex items-start justify-between gap-4">
            <h1 class="text-lg sm:text-xl font-bold text-white leading-snug">${vid.title}</h1>
            <a href="${window.location.pathname}#/v/${vid.id}" target="_blank" rel="noopener" class="shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-[#272727] hover:bg-[#3f3f3f] text-[#aaa] hover:text-white transition whitespace-nowrap" title="Open this video alone, with no recommendations or feed">
              Open Isolated
            </a>
          </div>

          <!-- CHANNEL INFO & ACTIONS ROW -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#272727]">
            
            <div class="flex items-center gap-4">
              <div data-goto-ch="${ch.id || vid.channelId}" class="w-11 h-11 rounded-full ${ch.avatarColor || 'bg-red-600'} text-white font-bold text-sm flex items-center justify-center cursor-pointer shrink-0 shadow">
                ${ch.initials || 'YT'}
              </div>
              <div class="flex flex-col">
                <h3 data-goto-ch="${ch.id || vid.channelId}" class="text-base font-bold text-white hover:text-[#3ea6ff] cursor-pointer">${ch.name}</h3>
                <span class="text-xs text-[#aaa]">Official Channel</span>
              </div>
              <button class="ml-2 bg-[#f1f1f1] hover:bg-white text-black font-bold text-xs px-4 py-2 rounded-full shadow">
                Subscribed
              </button>
            </div>

            <div class="flex items-center gap-2">
              <div class="flex items-center bg-[#272727] rounded-full overflow-hidden">
                <button class="px-4 py-2 text-xs font-medium hover:bg-[#3f3f3f] flex items-center gap-1.5 border-r border-[#3f3f3f]">
                  &#128077; Like
                </button>
                <button class="px-3 py-2 text-xs font-medium hover:bg-[#3f3f3f]">&#128078;</button>
              </div>
              
              <button class="px-4 py-2 bg-[#272727] hover:bg-[#3f3f3f] rounded-full text-xs font-medium flex items-center gap-1.5">
                Share
              </button>
            </div>

          </div>

          <!-- DESCRIPTION BOX -->
          <div class="bg-[#1f1f1f] hover:bg-[#272727]/80 rounded-2xl p-4 transition cursor-pointer flex flex-col gap-2" id="toggle-desc-box">
            <div class="flex items-center gap-3 text-xs font-bold text-white">
              <span>${vid.views || '1,240 views'}</span>
              <span>${vid.publishedText || 'Recently'}</span>
            </div>
            <p class="text-xs text-[#ddd] ${this.descriptionExpanded ? '' : 'line-clamp-2'} whitespace-pre-line leading-relaxed">${vid.description || 'Watch full video stream on FreeTube interface.'}</p>
            <span class="text-xs font-bold text-[#aaa] mt-1">${this.descriptionExpanded ? 'Show less' : '...more'}</span>
          </div>

        </div>

        <!-- RIGHT SIDEBAR: NATIVE-STYLE PLAYLIST QUEUE (when watching from a playlist) OR CHANNEL-ONLY "MORE VIDEOS" -->
        <div class="w-full lg:w-96 flex flex-col gap-4 shrink-0">
          ${inPlaylist ? `
            <div class="bg-[#1f1f1f] rounded-2xl border border-[#272727] overflow-hidden flex flex-col">
              <div class="p-4 flex flex-col gap-2 border-b border-[#272727] bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f]">
                <div class="flex items-start justify-between gap-2">
                  <h3 class="text-sm font-bold text-white leading-snug">${this.selectedPlaylist.title}</h3>
                  <button id="playlist-panel-close" class="text-[#aaa] hover:text-white shrink-0" title="Exit playlist">${ICONS.close}</button>
                </div>
                <div class="flex items-center gap-2 text-xs text-[#aaa]">
                  <span class="truncate">${this.selectedPlaylist.channelName || ch.name}</span>
                  <span>&bull;</span>
                  <span class="shrink-0">${plIdx + 1} / ${plIds.length}</span>
                </div>
                <div class="flex items-center gap-2 mt-1">
                  <button id="playlist-repeat-btn" title="Repeat playlist" class="p-2 rounded-full transition ${this.playlistRepeat ? 'bg-[#3ea6ff] text-black' : 'bg-[#272727] hover:bg-[#3f3f3f] text-[#aaa]'}">&#128257;</button>
                  <button id="playlist-shuffle-btn" title="Shuffle" class="p-2 rounded-full transition ${this.playlistShuffle ? 'bg-[#3ea6ff] text-black' : 'bg-[#272727] hover:bg-[#3f3f3f] text-[#aaa]'}">&#128256;</button>
                  <button id="playlist-autoplay-toggle" title="Toggle autoplay" class="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium transition ${this.playlistAutoplay ? 'bg-[#272727] text-white' : 'bg-[#272727] text-[#777]'}">
                    <span>Autoplay</span>
                    <span class="w-8 h-4 rounded-full relative transition ${this.playlistAutoplay ? 'bg-[#3ea6ff]' : 'bg-[#555]'}">
                      <span class="absolute top-0.5 ${this.playlistAutoplay ? 'left-4' : 'left-0.5'} w-3 h-3 rounded-full bg-white transition-all"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div class="max-h-[70vh] lg:max-h-[600px] overflow-y-auto flex flex-col">
                ${plIds.map((id, i) => {
                  const v = allVids.find(x => x.id === id) || { id, title: 'YouTube Broadcast (' + id + ')', thumbnail: 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg', channelName: this.selectedPlaylist.channelName, channelId: vid.channelId };
                  const active = id === vid.id;
                  return `
                    <div data-related-vid="${id}" data-ch="${v.channelId || vid.channelId}" data-in-playlist="true" class="flex gap-3 p-2.5 items-center cursor-pointer group ${active ? 'bg-[#3f3f3f]' : 'hover:bg-[#272727]'}">
                      <span class="w-5 text-center text-xs font-mono shrink-0 ${active ? 'text-[#3ea6ff]' : 'text-[#888]'}">${active ? '&#9654;' : i + 1}</span>
                      <div class="relative w-28 aspect-video rounded-lg overflow-hidden bg-[#222] shrink-0">
                        <img src="${v.thumbnail || ''}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition" />
                        <span class="absolute bottom-0.5 right-0.5 px-1 rounded bg-black/80 text-white text-[9px] font-mono">${v.duration || ''}</span>
                      </div>
                      <div class="flex flex-col gap-0.5 flex-1 min-w-0">
                        <h4 class="text-xs font-medium line-clamp-2 leading-snug ${active ? 'text-[#3ea6ff]' : 'text-white'}">${v.title}</h4>
                        <p class="text-[10px] text-[#888] truncate">${v.channelName || ''}</p>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : `
            <div class="flex items-center justify-between">
              <h3 class="text-base font-bold text-white">
                More from ${ch.name}
              </h3>
            </div>

            <div class="flex flex-col gap-3">
              ${upNext.map(v => `
                <div data-related-vid="${v.id}" data-ch="${v.channelId}" class="flex gap-3 p-2 rounded-xl hover:bg-[#272727] transition cursor-pointer group">
                  <div class="relative w-40 aspect-video rounded-lg overflow-hidden bg-[#222] shrink-0">
                    <img src="${v.thumbnail}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition" />
                    <span class="absolute bottom-1 right-1 px-1 rounded bg-black/80 text-white text-[10px] font-mono">${v.duration}</span>
                  </div>
                  <div class="flex flex-col gap-1 flex-1 overflow-hidden">
                    <h4 class="text-xs font-semibold text-white line-clamp-2 leading-snug group-hover:text-[#3ea6ff]">${v.title}</h4>
                    <p class="text-[11px] text-[#aaa] truncate">${v.channelName}</p>
                    <p class="text-[10px] text-[#888]">${v.views}</p>
                  </div>
                </div>
              `).join('')}
              ${upNext.length === 0 ? `<p class="text-xs text-[#888] px-2">No other videos from this channel yet.</p>` : ''}
            </div>
          `}
        </div>

      </div>
    `;
  }

  attachWatchPageListeners() {
    if (this.watchVideo) {
      this.checkEmbeddable(this.watchVideo.id, 'watch-embed-fallback');
    }

    const backBtn = document.getElementById('watch-back-btn');
    if (backBtn) {
      backBtn.onclick = () => {
        if (this.watchHistoryStack.length > 0) {
          const prev = this.watchHistoryStack.pop();
          this.watchVideo = prev;
          this.renderBody();
        } else {
          this.watchVideo = null;
          this.renderBody();
        }
        this.syncHash();
      };
    }

    const descBox = document.getElementById('toggle-desc-box');
    if (descBox) {
      descBox.onclick = () => {
        this.descriptionExpanded = !this.descriptionExpanded;
        this.renderBody();
      };
    }

    document.querySelectorAll('[data-related-vid]').forEach(el => {
      el.onclick = () => {
        const vidId = el.getAttribute('data-related-vid');
        const all = this.getAllCachedVideos();
        const found = all.find(v => v.id === vidId) || { id: vidId, title: "YouTube Stream", channelId: el.getAttribute('data-ch') };

        // Clicks from the playlist queue panel keep the playlist context (so autoplay keeps working);
        // clicks from the plain "More from this channel" list are standalone.
        if (!el.hasAttribute('data-in-playlist')) {
          this.selectedPlaylist = null;
        }

        if (this.watchVideo) {
          this.watchHistoryStack.push(this.watchVideo);
        }
        this.watchVideo = found;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.renderBody();
        this.syncHash();
      };
    });

    // Playlist queue panel controls (repeat / shuffle / autoplay toggle / exit playlist)
    const repeatBtn = document.getElementById('playlist-repeat-btn');
    if (repeatBtn) {
      repeatBtn.onclick = () => {
        this.playlistRepeat = !this.playlistRepeat;
        this.renderBody();
      };
    }
    const shuffleBtn = document.getElementById('playlist-shuffle-btn');
    if (shuffleBtn) {
      shuffleBtn.onclick = () => {
        this.playlistShuffle = !this.playlistShuffle;
        this.renderBody();
      };
    }
    const autoplayToggle = document.getElementById('playlist-autoplay-toggle');
    if (autoplayToggle) {
      autoplayToggle.onclick = () => {
        this.playlistAutoplay = !this.playlistAutoplay;
        this.renderBody();
      };
    }
    const panelClose = document.getElementById('playlist-panel-close');
    if (panelClose) {
      panelClose.onclick = () => {
        this.selectedPlaylist = null;
        this.renderBody();
        this.syncHash();
      };
    }

    // Wire up the YouTube IFrame JS API so that, when watching from a playlist, the next
    // queued video auto-plays the moment the current one ends — no manual "exit & reopen" needed.
    const inPlaylist = !!(this.selectedPlaylist && Array.isArray(this.selectedPlaylist.videos) && this.watchVideo && this.selectedPlaylist.videos.includes(this.watchVideo.id));
    if (inPlaylist) {
      this.initPlaylistPlayer();
    } else {
      this._ytPlayer = null;
    }
  }

  // ============================================================================
  // NATIVE-STYLE PLAYLIST AUTOPLAY (YouTube IFrame JS API)
  // ============================================================================
  loadYouTubeIframeAPI() {
    if (window.YT && window.YT.Player) return Promise.resolve();
    if (this._ytApiPromise) return this._ytApiPromise;
    this._ytApiPromise = new Promise((resolve) => {
      const prevCb = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prevCb === 'function') prevCb();
        resolve();
      };
      if (!document.querySelector('script[data-yt-iframe-api]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.setAttribute('data-yt-iframe-api', 'true');
        document.head.appendChild(tag);
      }
    });
    return this._ytApiPromise;
  }

  async initPlaylistPlayer() {
    const watchingId = this.watchVideo ? this.watchVideo.id : null;
    await this.loadYouTubeIframeAPI();
    // Bail out if the user navigated away while the API script was loading.
    if (!this.watchVideo || this.watchVideo.id !== watchingId) return;
    const el = document.getElementById('yt-watch-iframe');
    if (!el) return;

    if (this._ytPlayer) {
      try { this._ytPlayer.destroy(); } catch (e) {}
      this._ytPlayer = null;
    }

    try {
      this._ytPlayer = new YT.Player('yt-watch-iframe', {
        events: {
          onStateChange: (ev) => {
            if (ev.data === YT.PlayerState.ENDED) {
              this.playNextInPlaylist();
            }
          }
        }
      });
    } catch (e) {
      this._ytPlayer = null;
    }
  }

  playNextInPlaylist() {
    if (!this.playlistAutoplay || !this.selectedPlaylist || !Array.isArray(this.selectedPlaylist.videos) || !this.watchVideo) return;
    const ids = this.selectedPlaylist.videos;
    const idx = ids.indexOf(this.watchVideo.id);
    if (idx === -1) return;

    let nextIdx;
    if (this.playlistShuffle) {
      if (ids.length <= 1) return;
      do { nextIdx = Math.floor(Math.random() * ids.length); } while (nextIdx === idx);
    } else {
      nextIdx = idx + 1;
      if (nextIdx >= ids.length) {
        if (!this.playlistRepeat) return;
        nextIdx = 0;
      }
    }

    const nextId = ids[nextIdx];
    const allVids = this.getAllCachedVideos();
    this.watchVideo = allVids.find(v => v.id === nextId) || { id: nextId, title: 'Video', channelId: this.selectedPlaylist.channelId, channelName: this.selectedPlaylist.channelName };
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.renderBody();
    this.syncHash();
  }

  // ============================================================================
  // GLOBAL EVENT LISTENERS
  // ============================================================================
  setupEventListeners() {
    document.addEventListener('click', (e) => {
      // Toggle Sidebar (opens/closes the drawer on mobile, mini/full rail on lg+)
      if (e.target.closest('#toggle-sidebar-btn')) {
        this.sidebarExpanded = !this.sidebarExpanded;
        this.render();
      }

      // Tapping the backdrop closes the mobile drawer
      if (e.target.id === 'sidebar-backdrop') {
        this.sidebarExpanded = false;
        this.render();
      }

      // Tapping a nav/channel/playlist item on mobile should close the drawer after navigating
      if (this.isMobile && (e.target.closest('[data-nav]') || e.target.closest('[data-sidebar-ch]'))) {
        this.sidebarExpanded = false;
      }

      // Logo Home
      if (e.target.closest('#nav-logo-btn')) {
        this.watchVideo = null;
        this.activeView = 'home';
        this.selectedChannelId = null;
        this.selectedPlaylist = null;
        this.searchQuery = '';
        this.renderBody();
        this.syncHash();
      }

      // Sidebar Navigation items
      const navItem = e.target.closest('[data-nav]');
      if (navItem) {
        this.watchVideo = null;
        this.activeView = navItem.getAttribute('data-nav');
        this.selectedChannelId = null;
        this.selectedPlaylist = null;
        this.render();
        this.syncHash();
      }

      // Sidebar Channel selection
      const sidebarCh = e.target.closest('[data-sidebar-ch]');
      if (sidebarCh) {
        this.watchVideo = null;
        this.activeView = 'channel';
        this.selectedChannelId = sidebarCh.getAttribute('data-sidebar-ch');
        this.selectedPlaylist = null;
        this.channelTab = 'videos';
        this.render();
        this.syncHash();
      }

      // Click Playlist Card -> Playlist Detail View
      const plCard = e.target.closest('[data-pl]');
      if (plCard) {
        const plId = plCard.getAttribute('data-pl');
        const allPls = this.getAllCachedPlaylists();
        const foundPl = allPls.find(p => p.id === plId) || allPls[0];
        if (foundPl) {
          this.watchVideo = null;
          this.activeView = 'playlist_detail';
          this.selectedPlaylist = foundPl;
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.render();
          this.syncHash();
        }
        return;
      }

      // Back button in Playlist Detail View
      if (e.target.closest('#playlist-back-btn')) {
        this.activeView = 'library';
        this.selectedPlaylist = null;
        this.render();
        this.syncHash();
        return;
      }

      // Feed Category Filter chips
      const filterChip = e.target.closest('[data-filter]');
      if (filterChip) {
        this.feedFilter = filterChip.getAttribute('data-filter');
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
        filterChip.classList.add('active');
        this.renderBody();
      }

      // Channel Tabs switch (Videos | Playlists | About)
      const chTab = e.target.closest('[data-ch-tab]');
      if (chTab) {
        this.channelTab = chTab.getAttribute('data-ch-tab');
        this.renderBody();
      }

      // Click Video Card -> Watch Page
      const vidCard = e.target.closest('[data-vid]');
      if (vidCard && !e.target.closest('[data-goto-ch]')) {
        const vidId = vidCard.getAttribute('data-vid');
        const all = this.getAllCachedVideos();
        const found = all.find(v => v.id === vidId) || { id: vidId, title: "YouTube Video", channelId: vidCard.getAttribute('data-ch') };

        // Only keep playlist queue/autoplay context when the click came from a playlist-aware card
        // (the playlist detail page, or the in-watch-page playlist queue panel).
        if (!vidCard.hasAttribute('data-in-playlist')) {
          this.selectedPlaylist = null;
        }

        this.watchHistoryStack = [];
        this.watchVideo = found;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.renderBody();
        this.syncHash();
      }

      // Go to Channel from Video Card avatar or title
      const gotoCh = e.target.closest('[data-goto-ch]');
      if (gotoCh) {
        this.watchVideo = null;
        this.activeView = 'channel';
        this.selectedChannelId = gotoCh.getAttribute('data-goto-ch');
        this.selectedPlaylist = null;
        this.channelTab = 'videos';
        this.render();
        this.syncHash();
      }

      // Open Add Channel Modal
      if (e.target.closest('#add-channel-modal-btn') || e.target.closest('#sidebar-add-ch-btn')) {
        this.showAddModal = true;
        this.render();
      }

      // Close Add Channel Modal
      if (e.target.closest('#close-add-modal') || e.target.closest('#cancel-add-btn')) {
        this.showAddModal = false;
        this.render();
      }

      // Open User Modal
      if (e.target.closest('#change-user-modal-btn')) {
        this.showUserModal = true;
        this.render();
      }

      // Close User Modal
      if (e.target.closest('#close-user-modal')) {
        this.showUserModal = false;
        this.render();
      }

      // Unsubscribe Channel
      const delCh = e.target.closest('[data-del-ch]');
      if (delCh) {
        const dId = delCh.getAttribute('data-del-ch');
        if (confirm("Unsubscribe from this channel?")) {
          this.subscribedChannels = this.subscribedChannels.filter(c => c.id !== dId);
          this.saveChannels();
          this.activeView = 'home';
          this.selectedChannelId = null;
          this.render();
          this.syncHash();
        }
      }

      // Submit Search Btn
      if (e.target.closest('#submit-search-btn')) {
        const sInput = document.getElementById('yt-search-input');
        if (sInput) {
          this.searchQuery = sInput.value;
          this.activeView = 'home';
          this.watchVideo = null;
          this.renderBody();
        }
      }

      // Clear Search Btn
      if (e.target.closest('#clear-search-btn')) {
        this.searchQuery = '';
        this.render();
      }
    });

    // Search Input Enter key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && document.activeElement && document.activeElement.id === 'yt-search-input') {
        this.searchQuery = document.activeElement.value;
        this.activeView = 'home';
        this.watchVideo = null;
        this.renderBody();
      }
    });

    // Add Channel Form Submit
    document.addEventListener('submit', async (e) => {
      if (e.target && e.target.id === 'add-ch-form') {
        e.preventDefault();
        const input = document.getElementById('add-ch-input');
        const status = document.getElementById('add-modal-status');
        if (!input) return;
        const val = input.value.trim();

        status.classList.remove('hidden');
        status.textContent = "Fetching channel information...";

        let chId = val;
        let handle = '';
        let name = val;

        if (val.includes('youtube.com/')) {
          const match = val.match(/@([a-zA-Z0-9_.-]+)/);
          if (match) { handle = '@' + match[1]; name = match[1]; }
          const idMatch = val.match(/channel\/(UC[a-zA-Z0-9_-]+)/);
          if (idMatch) chId = idMatch[1];
        } else if (val.startsWith('@')) {
          handle = val; name = val.substring(1);
        }

        if (!chId.startsWith('UC')) {
          let h = 0;
          for (let i=0; i<val.length; i++) h = ((h<<5)-h)+val.charCodeAt(i)|0;
          chId = 'UC_LOCAL_' + Math.abs(h).toString(16).toUpperCase();
        }

        const newCh = {
          id: chId,
          name: name,
          handle: handle || '@channel',
          avatarColor: ['bg-red-600', 'bg-blue-600', 'bg-emerald-600', 'bg-purple-600', 'bg-amber-600'][Math.floor(Math.random()*5)],
          initials: name.substring(0,2).toUpperCase(),
          subscriberCount: "Subscribed",
          description: `Channel added via link (${val}).`
        };

        if (!this.subscribedChannels.some(c => c.id === newCh.id)) {
          this.subscribedChannels.push(newCh);
          this.saveChannels();
        }

        status.textContent = "Success! Loading videos...";
        await this.fetchLiveChannelData(newCh.id);

        setTimeout(() => {
          this.showAddModal = false;
          this.selectedChannelId = newCh.id;
          this.activeView = 'channel';
          this.render();
          this.syncHash();
        }, 600);
      }

      // Edit Username Form
      if (e.target && e.target.id === 'edit-user-form') {
        e.preventDefault();
        const uInput = document.getElementById('edit-username-input');
        if (uInput) {
          this.userName = uInput.value.trim() || 'Radif Hassan';
          localStorage.setItem('yt_user_name', this.userName);
          this.showUserModal = false;
          this.render();
        }
      }
    });
  }
}

// Initialize on DOM Ready
window.addEventListener('DOMContentLoaded', () => {
  new FreeTubeApp();
});
