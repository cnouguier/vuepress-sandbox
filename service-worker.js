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
    "revision": "8265ab6640bc6a78c221673c22076e25"
  },
  {
    "url": "activites/akt01.html",
    "revision": "5d1288fe38385902d2eebe8970c11649"
  },
  {
    "url": "activites/index.html",
    "revision": "922e59e42b276972222157dc384ea664"
  },
  {
    "url": "activites/template.html",
    "revision": "bf619df6c60b053c735101f8cd2636b1"
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
    "url": "assets/js/app.052846ee.js",
    "revision": "2132cfb9f3d0977fe51f2bfb1b078363"
  },
  {
    "url": "index.html",
    "revision": "6d65762aa799dcab8ecf1bb67523f4f2"
  },
  {
    "url": "responsables/index.html",
    "revision": "4610b309f1219ba0425021cee7df725d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
