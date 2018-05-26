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
    "revision": "93b30dc70ecbf3c386caa1a7a0b65a0f"
  },
  {
    "url": "activites/akt01.html",
    "revision": "3f39bfc96f8d473985359a063bb4de70"
  },
  {
    "url": "activites/index.html",
    "revision": "6f687b194a3e17a957524e43ce2c3cea"
  },
  {
    "url": "activites/template.html",
    "revision": "95b053ef90c37bb19e248d2c35361f93"
  },
  {
    "url": "assets/css/5.styles.b1093c53.css",
    "revision": "448a7b1f9e0d941ce18cea854d42c138"
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
    "url": "assets/js/app.61d106a5.js",
    "revision": "22c8bbab26b311178f80067bd0b17db5"
  },
  {
    "url": "index.html",
    "revision": "cc12e050e8822a80f37b369c7e885c53"
  },
  {
    "url": "responsables/index.html",
    "revision": "72f5c03aadfcbf2392cf62b20d89c20a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
