/* eslint-disable no-console */

import { register } from 'register-service-worker'

const cacheName = 'v1'

register(`${process.env.BASE_URL}service-worker.js`, {
  ready () {
    console.log(
      'App is being served from cache by a service worker.\n' +
      'For more details, visit https://goo.gl/AFskqB'
    )
  },
  registered () {
    console.log('Service worker has been registered.')

    // Call Activate Event
    self.addEventListener('activate', e => {
      console.log('Service Worker: Activated')
      // Remove unwanted caches
      e.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cache => {
              if (cache !== cacheName) {
                console.log('Service Worker: Clearing Old Cache')
                return caches.delete(cache)
              }
            })
          )
        })
      )
    })

    // Call Fetch Event
    self.addEventListener('fetch', e => {
      console.log('Service Worker: Fetching')
      e.respondWith(
        fetch(e.request)
          .then(res => {
            // Make copy/clone of response
            const resClone = res.clone()
            // Open cahce
            caches.open(cacheName).then(cache => {
              // Add response to cache
              cache.put(e.request, resClone)
            })
            return res
          })
          .catch((err) => {
            console.log(err)
            return caches.match(e.request).then(res => res)
          })
      )
    })
  },
  cached () {
    console.log('Content has been cached for offline use.')
  },
  updatefound () {
    console.log('New content is downloading.')
  },
  updated () {
    console.log('New content is available please refresh.')
  },
  offline () {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error (error) {
    console.error('Error during service worker registration:', error)
  }
})
