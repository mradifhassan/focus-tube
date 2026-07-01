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
    this.sidebarExpanded = true;
    
    // Player Stack
    this.watchVideo = null;
    this.watchHistoryStack = [];
    this.descriptionExpanded = false;

    this.dataCache = this.loadCatalog();
    this.root = document.getElementById('root');

    // Modals
    this.showAddModal = false;
    this.showUserModal = false;

    this.init();
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
    this.subscribedChannels.forEach(ch => this.fetchLiveChannelData(ch.id));
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
    this.root.innerHTML = `
      <div class="flex flex-col min-h-screen bg-[#0f0f0f] text-[#f1f1f1] select-none font-sans">
        
        <!-- TOP NAVBAR -->
        <header class="sticky top-0 z-40 bg-[#0f0f0f]/95 backdrop-blur h-14 px-4 flex items-center justify-between border-b border-[#272727]">
          
          <!-- LEFT BRANDING -->
          <div class="flex items-center gap-4">
            <button id="toggle-sidebar-btn" class="p-2 rounded-full hover:bg-[#272727] text-[#f1f1f1] transition">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            </button>
            <div id="nav-logo-btn" class="flex items-center gap-2 cursor-pointer">
              <div class="bg-[#ff0000] text-white px-2 py-0.5 rounded-[6px] font-black tracking-tighter text-sm flex items-center justify-center shadow">
                <svg class="w-4 h-4 fill-white inline mr-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span class="font-bold text-lg tracking-tight text-white font-sans">FocusTube</span>
            </div>
          </div>

          <!-- CENTER SEARCH BAR -->
          <div class="flex items-center max-w-xl w-full mx-4">
            <div class="flex flex-1 items-center bg-[#121212] border border-[#303030] rounded-l-full px-4 py-1.5 focus-within:border-[#3ea6ff]">
              <input type="text" id="yt-search-input" value="${this.searchQuery}" placeholder="Search" class="w-full bg-transparent text-sm text-white placeholder-[#888] focus:outline-none" />
              ${this.searchQuery ? `<button id="clear-search-btn" class="text-[#aaa] hover:text-white">${ICONS.close}</button>` : ''}
            </div>
            <button id="submit-search-btn" class="bg-[#222222] border border-l-0 border-[#303030] hover:bg-[#272727] px-6 py-2 rounded-r-full text-[#f1f1f1] transition">
              ${ICONS.search}
            </button>
          </div>

          <!-- RIGHT RAIL TOOLS -->
          <div class="flex items-center gap-2 sm:gap-3">
            <button id="add-channel-modal-btn" class="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-[#272727] hover:bg-[#3f3f3f] rounded-full text-xs font-medium text-white transition">
              <svg class="w-4 h-4 text-[#ff0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              <span>Add Channel</span>
            </button>

            <button id="change-user-modal-btn" class="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-[#272727] text-xs font-medium transition" title="Change Username">
              <div class="w-7 h-7 rounded-full bg-[#3ea6ff] text-black font-bold flex items-center justify-center uppercase shadow">
                ${this.userName.charAt(0)}
              </div>
              <span class="hidden md:inline text-[#f1f1f1] max-w-[90px] truncate">${this.userName}</span>
            </button>
          </div>
        </header>

        <!-- APP WORKSPACE: LEFT SIDEBAR + MAIN CONTENT AREA -->
        <div class="flex flex-1 overflow-hidden relative">
          
          <!-- LEFT DRAWER SIDEBAR -->
          <aside id="yt-sidebar" class="${this.sidebarExpanded ? 'w-60' : 'w-18'} shrink-0 bg-[#0f0f0f] border-r border-[#272727]/60 overflow-y-auto flex flex-col pt-3 transition-all duration-200 z-30">
            
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
                <button data-vid="${plVideos[0].id}" data-ch="${plVideos[0].channelId}" class="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition">
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
            <div data-vid="${v.id}" data-ch="${v.channelId}" class="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#272727] transition cursor-pointer group border border-transparent hover:border-[#383838]">
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

    const allVids = this.getAllCachedVideos();
    const engine = new RelatedVideosEngine(allVids);
    let upNext = engine.getUpNext(vid.id, 12).filter(v => v.id !== vid.id);
    if (upNext.length < 4) {
      upNext = allVids.filter(v => v.id !== vid.id).slice(0, 12);
    }

    const host = this.privacyShield ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';

    return `
      <!-- TOP BACK BUTTON RAIL -->
      <div class="sticky top-0 z-30 bg-[#0f0f0f] px-6 py-3 border-b border-[#272727] flex items-center justify-between">
        <button id="watch-back-btn" class="flex items-center gap-2 px-4 py-2 bg-[#272727] hover:bg-[#3f3f3f] text-white font-bold text-sm rounded-full transition shadow">
          <span>&larr;</span>
          <span>Back (${this.watchHistoryStack.length > 0 ? 'Previous Video' : 'Home'})</span>
        </button>

        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[#272727] text-[#aaa]">
          ${this.privacyShield ? 'Privacy Shield Enabled' : 'Standard YouTube'}
        </span>
      </div>

      <div class="p-4 lg:p-8 max-w-[1700px] mx-auto flex flex-col lg:flex-row gap-8">
        
        <!-- LEFT MAIN WATCH CONTAINER -->
        <div class="flex-1 flex flex-col gap-4 max-w-5xl">
          
          <!-- IFRAME PLAYER -->
          <div class="relative aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#272727]">
            <iframe 
              src="${host}/embed/${vid.id}?autoplay=1&rel=0&modestbranding=1" 
              title="${vid.title}"
              class="w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>

          <!-- VIDEO TITLE -->
          <h1 class="text-lg sm:text-xl font-bold text-white leading-snug">${vid.title}</h1>

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

        <!-- RIGHT SIDEBAR: UP NEXT -->
        <div class="w-full lg:w-96 flex flex-col gap-4 shrink-0">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-bold text-white">
              Up Next
            </h3>
            <span class="text-[11px] text-[#aaa] bg-[#272727] px-2.5 py-1 rounded-full">Autoplay</span>
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
          </div>
        </div>

      </div>
    `;
  }

  attachWatchPageListeners() {
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
        
        if (this.watchVideo) {
          this.watchHistoryStack.push(this.watchVideo);
        }
        this.watchVideo = found;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.renderBody();
      };
    });
  }

  // ============================================================================
  // GLOBAL EVENT LISTENERS
  // ============================================================================
  setupEventListeners() {
    document.addEventListener('click', (e) => {
      // Toggle Sidebar
      if (e.target.closest('#toggle-sidebar-btn')) {
        this.sidebarExpanded = !this.sidebarExpanded;
        const sidebar = document.getElementById('yt-sidebar');
        if (sidebar) {
          sidebar.className = `${this.sidebarExpanded ? 'w-60' : 'w-18'} shrink-0 bg-[#0f0f0f] border-r border-[#272727]/60 overflow-y-auto flex flex-col pt-3 transition-all duration-200 z-30`;
          this.render();
        }
      }

      // Logo Home
      if (e.target.closest('#nav-logo-btn')) {
        this.watchVideo = null;
        this.activeView = 'home';
        this.selectedChannelId = null;
        this.selectedPlaylist = null;
        this.searchQuery = '';
        this.renderBody();
      }

      // Sidebar Navigation items
      const navItem = e.target.closest('[data-nav]');
      if (navItem) {
        this.watchVideo = null;
        this.activeView = navItem.getAttribute('data-nav');
        this.selectedChannelId = null;
        this.selectedPlaylist = null;
        this.render();
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
        }
        return;
      }

      // Back button in Playlist Detail View
      if (e.target.closest('#playlist-back-btn')) {
        this.activeView = 'library';
        this.selectedPlaylist = null;
        this.render();
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
        
        this.watchHistoryStack = [];
        this.watchVideo = found;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.renderBody();
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
