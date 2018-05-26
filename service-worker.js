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
    "revision": "74e2fea5deffa444b9529e0c63881f45"
  },
  {
    "url": "activites/akt01.html",
    "revision": "0a2b96017ff4a0be8091b9e184405bf3"
  },
  {
    "url": "activites/index.html",
    "revision": "8b885dea0a0ec5f4beb2938c860a5e3b"
  },
  {
    "url": "activites/template.html",
    "revision": "83d1c5d1bfa42b56041b1c1b7c62f86f"
  },
  {
    "url": "assets/css/5.styles.100c878a.css",
    "revision": "74e7cfc32fba9c4c214fbbe4867d68a2"
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
    "url": "assets/js/app.08ef4e88.js",
    "revision": "4e950c1d8698af4a6ba247686e6d131a"
  },
  {
    "url": "index.html",
    "revision": "ac1834ff9a377f85c193499f224beb55"
  },
  {
    "url": "responsables/index.html",
    "revision": "1ba817f3c5c73432b3d094edd4006e76"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
