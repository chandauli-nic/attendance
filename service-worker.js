// Minimal service worker — only exists to satisfy PWA installability
// requirements (Chrome requires a registered service worker with a fetch
// handler before it will offer "Add to Home Screen" / allow packaging as
// an installable app). It intentionally does NOT cache attendance data,
// photos, or API calls, so location/camera/submission always go live —
// no stale offline behavior for something as time-sensitive as attendance.
self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Pass every request straight through to the network, unmodified.
  e.respondWith(fetch(e.request));
});
