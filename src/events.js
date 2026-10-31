/**
 * @file events.js
 * Global event listeners: navigation clicks, video/playlist cards,
 * category chips, channel tabs, modals, search, subscribe & profile forms.
 */

export const eventsMixin = {
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
        this.feedFilter = 'all';
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
        this.feedFilter = 'all';
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
          this.scrollMainToTop();
          this.render();
          this.syncHash();
        }
        return;
      }

      // Back buttons (playlist detail, channel, isolated) use real browser history
      if (e.target.closest('#playlist-back-btn') || e.target.closest('#channel-back-btn')) {
        this.goBack();
        return;
      }

      // Feed Category Filter chips
      const filterChip = e.target.closest('[data-filter]');
      if (filterChip) {
        const filter = filterChip.getAttribute('data-filter');
        // "Playlists" is a real destination (its own hash route), not a feed filter.
        if (filter === 'playlists') {
          this.watchVideo = null;
          this.activeView = 'library';
          this.selectedChannelId = null;
          this.selectedPlaylist = null;
          this.feedFilter = 'all';
          this.render();
          this.syncHash();
          return;
        }
        this.feedFilter = filter;
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
        filterChip.classList.add('active');
        this.renderBody();
        this.syncHash();
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
        // (the playlist detail page, or the in-watch-page playlist queue panel). Otherwise, if the
        // video happens to belong to one of the user's playlists, attach that playlist so the watch
        // sidebar shows the full native-style queue.
        if (!vidCard.hasAttribute('data-in-playlist')) {
          this.selectedPlaylist = this.findPlaylistForVideo(found);
        }

        this.watchHistoryStack = [];
        this.watchVideo = found;
        this.scrollMainToTop();
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

      // Mobile bottom-nav tab bar
      const navAction = e.target.closest('[data-nav-action]');
      if (navAction) {
        const action = navAction.getAttribute('data-nav-action');
        if (action === 'channels') {
          this.sidebarExpanded = true;
          this.render();
        } else if (action === 'search') {
          const input = document.getElementById('yt-search-input');
          if (input) input.focus();
        } else {
          this.watchVideo = null;
          this.activeView = action;
          this.selectedChannelId = null;
          this.selectedPlaylist = null;
          this.feedFilter = 'all';
          this.render();
          this.syncHash();
          this.scrollMainToTop();
        }
        return;
      }

      // Submit Search Btn
      if (e.target.closest('#submit-search-btn')) {
        const sInput = document.getElementById('yt-search-input');
        if (sInput && sInput.value.trim()) {
          this.searchQuery = sInput.value.trim();
          this.activeView = 'search';
          this.watchVideo = null;
          this.render();
          this.syncHash();
        }
      }

      // Clear Search Btn
      if (e.target.closest('#clear-search-btn')) {
        this.searchQuery = '';
        this.activeView = 'home';
        this.render();
        this.syncHash();
      }
    });

    // Search Input Enter key
    document.addEventListener('keydown', (e) => {
      const searchInput = document.getElementById('yt-search-input');
      if (e.key === 'Enter' && searchInput && document.activeElement === searchInput) {
        e.preventDefault();
        const val = searchInput.value.trim();
        if (val) {
          this.searchQuery = val;
          this.activeView = 'search';
          this.watchVideo = null;
          this.render();
          this.syncHash();
        }
      }
    });

    document.addEventListener('submit', async (e) => {
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
  },
};