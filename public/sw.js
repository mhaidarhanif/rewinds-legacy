/**
 * Service Worker for PWA
 */

self.addEventListener("fetch", (event) => {
  let url = new URL(event.request.url);
  let method = event.request.method;

  // Any non GET request is ignored
  if (method.toLowerCase() !== "get") return;

  // If the request is for the favicons, fonts, or the built files (which are hashed in the name)
  if (
    url.pathname.startsWith("/favicons/") ||
    url.pathname.startsWith("/fonts/") ||
    url.pathname.startsWith("/build/")
  ) {
    event.respondWith(
      //Open the assets cache
      caches.open("assets").then(async (cache) => {
        // If the request is cached we will use the cache
        let cacheResponse = await cache.match(event.request);
        if (cacheResponse) return cacheResponse;

        // If it's not cached we will run the fetch, cache it and return it
        // This way the next time it's needed it will load from the cache
        let fetchResponse = await fetch(event.request);
        cache.put(event.request, fetchResponse.clone());

        return fetchResponse;
      }),
    );
  }

  // If the URL is for a localized message
  if (url.pathname.startsWith("/locales/")) {
    event.respondWith(
      // Use the locales cache
      caches.open("locales").then(async (cache) => {
        // Run the fetch
        let fetchResponsePromise = fetch(event.request);
        try {
          // Try to read from cache
          let cacheResponse = await cache.match(event.request);
          if (cacheResponse) return cacheResponse;
        } finally {
          // Finally if it was not cached or after we sent the response
          let fetchResponse = await fetchResponsePromise;
          // Update the cache
          cache.put(event.request, fetchResponse.clone());
          // Return the response
          return fetchResponse;
        }
      }),
    );
  }

  return;
});
