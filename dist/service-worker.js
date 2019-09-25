var cacheName = "pwa",
    filesToCache = ["./", "./index.html", "./main.css"];


self.addEventListener("install", function (e) {
    console.log("[service-worker.js] Install"), e.waitUntil(caches.open(cacheName).then(function (e) {
        return console.log("[service-worker.js] Caching app shell"), e.addAll(filesToCache)
    }))
}), self.addEventListener("activate", e => {
    e.waitUntil(self.clients.claim())
}), self.addEventListener("fetch", e => {
    e.respondWith(caches.match(e.request, {
        ignoreSearch: !0
    }).then(t => t || fetch(e.request)))
});