
const assets = [
  "/",
  "/index.html",
  "/css/styling.css",
  "/js/scriptF.js",
  "/img/cvflag.png",
  "/img/pwaAutarquicas.png",
  "/img/gsp.png",
]
const static = "autarquicas2020"
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(static).then(cache => {
      cache.addAll(assets)
    })
  )
})