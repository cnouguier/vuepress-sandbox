/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b1bac856fc8877531cf1ea9e7da90ec6"
  },
  {
    "url": "activites/akt01.html",
    "revision": "cb93b9dc2168724bf1581329a102caaa"
  },
  {
    "url": "activites/index.html",
    "revision": "86d5c83de07c00586a8b33926cdf5c02"
  },
  {
    "url": "activites/template.html",
    "revision": "dc37d54548af573180e2479d68a2dbeb"
  },
  {
    "url": "assets/css/5.styles.bbc3a0b8.css",
    "revision": "bfeb81676e9cdaa4a33d2f0a4c3e63a5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.55a5e88e.js",
    "revision": "d0565ccec22f2ae0bfb1b294adc3e8ee"
  },
  {
    "url": "assets/js/1.8b41d0b3.js",
    "revision": "bac0a4be815291c86e8ba30197ae8a7e"
  },
  {
    "url": "assets/js/2.9048b8d1.js",
    "revision": "f27029b50df450a3d7c3d42118c77831"
  },
  {
    "url": "assets/js/3.b23121d7.js",
    "revision": "1c14d9d8e85412868a3a6aa5a6f33a1a"
  },
  {
    "url": "assets/js/4.ef066695.js",
    "revision": "9e4186bb9fa6c1bb300822d462abd1ea"
  },
  {
    "url": "assets/js/app.bde6a3cd.js",
    "revision": "5ca6c37c60004372afac56a7e739b6e8"
  },
  {
    "url": "index.html",
    "revision": "615e4b35b8f0576da27b9e1f8d34c4d4"
  },
  {
    "url": "responsables/index.html",
    "revision": "438f4f664da7b4ef5009f7fc78d9fe07"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
