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
    "revision": "328864feb0acb0a6eba5cd29e2e10064"
  },
  {
    "url": "activites/akt01.html",
    "revision": "e8488b50f8d1e875968e1aebe6ed305a"
  },
  {
    "url": "activites/index.html",
    "revision": "d2f2d6d78197ae3cddc04c1ff9dac065"
  },
  {
    "url": "activites/template.html",
    "revision": "b8fc9e54c17587707e8c7faf87f6aaa3"
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
    "url": "assets/js/app.ce2772f2.js",
    "revision": "85a2cfc888a10726c365ba035475d3a7"
  },
  {
    "url": "index.html",
    "revision": "1a453548b504f43bafca177f6f50e655"
  },
  {
    "url": "responsables/index.html",
    "revision": "8ffa2e8eda24c794c66c643709ad9f03"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
