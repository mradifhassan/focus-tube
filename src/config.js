/**
 * @file config.js
 * App-wide constants and versioning.
 */

// Bump whenever CODEBASE_SUBSCRIBED_CHANNELS or BUILTIN_CATALOG changes.
// The app compares this against what's cached in localStorage and refreshes
// the cache automatically when it's out of date, so fixes here always reach
// users instead of being hidden behind an old cached copy forever.
//
// v2 -> v3: catalog restructured & fixed (moved misplaced OnnoRokom videos
// and playlists out of Alchemy; normalized channelID -> channelId field name).
export const CATALOG_VERSION = 12;