/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*******************
  Nav
*******************/

if (document.getElementsByClassName('globalNav')[0]) {
  var nav_el = document.querySelector('.spmenu_btn');
  var nav_state_class = 'globalNav_state';
  var nav_target_class = '.globalNav';
  var nav_close_class = 'spmenu_btnClose';
  var nav_wrap = document.querySelector('.menu');

  nav_el.addEventListener('click', function () {
    if (document.querySelector('.' + nav_state_class) === null) {
      document.querySelector(nav_target_class).classList.add(nav_state_class);
      nav_el.classList.add(nav_close_class);
    } else {
      document.querySelector(nav_target_class).classList.remove(nav_state_class);
      nav_el.classList.remove(nav_close_class);
    }
  }, false);

  nav_wrap.addEventListener('click', function () {
    document.querySelector(nav_target_class).classList.remove(nav_state_class);
    nav_el.classList.remove(nav_close_class);
  }, false);
}

/*******************
  map
*******************/
if (document.getElementById('Map')) {
  var mapInstance = new Vue({
    el: "#Map",
    data: function data() {
      return {
        lat: 34.6704542,
        lng: 135.5013464,
        zoom: 16,
        icon: THEME_URL + "/assets/mappin.png",
        geometry: {
          hue: '#111', // 色
          gamma: 0.1, // ガンマ 0.01 ~ 10
          lightness: -70, // 明度  -100 ~ 100
          saturation: -100 // 彩度 -100 ~ 100
        },
        labels: {
          hue: '#ae9e74', // 色
          gamma: 1, // ガンマ
          lightness: 0, // 明度
          saturation: -50 // 彩度
        }
      };
    },
    mounted: function mounted() {
      var map = void 0;
      var marker = void 0;
      var center = {
        lat: Number(this.lat), // 緯度
        lng: Number(this.lng) // 経度
      };
      map = new google.maps.Map(document.getElementById('Map'), { // #sampleに地図を埋め込む
        center: center, // 地図の中心を指定
        zoom: this.zoom, // 地図のズームを指定
        disableDefaultUI: true,
        styles: [{
          featureType: 'all',
          elementType: 'geometry',
          stylers: [{ hue: this.geometry.hue }, { gamma: this.geometry.gamma }, { lightness: this.geometry.lightness }, { saturation: this.geometry.saturation }]
        }, {
          featureType: 'all',
          elementType: 'labels',
          stylers: [{ hue: this.labels.hue }, { gamma: this.labels.gamma }, { lightness: this.labels.lightness }, { saturation: this.labels.saturation }]
        }]
      });
      marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
        map: map, // マーカーを立てる地図を指定
        icon: this.icon // マーカーのアイコン指定
      });
    }
  });
}

/***/ })
/******/ ]);