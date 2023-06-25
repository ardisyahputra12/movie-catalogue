import { precacheAndRoute } from 'workbox-precaching';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service worker: Pushed');
});