(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./modules/about_me/about_me.js */ "./assets/modules/about_me/about_me.js");

/***/ }),

/***/ "./assets/modules/about_me/about_me.js":
/*!*********************************************!*\
  !*** ./assets/modules/about_me/about_me.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./about_me.css */ "./assets/modules/about_me/about_me.css");

__webpack_require__(/*! ./components/slider/slider.js */ "./assets/modules/about_me/components/slider/slider.js");

/***/ }),

/***/ "./assets/modules/about_me/components/slider/slider.js":
/*!*************************************************************!*\
  !*** ./assets/modules/about_me/components/slider/slider.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! ./slider.css */ "./assets/modules/about_me/components/slider/slider.css");

var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;
$(document).ready(function () {
  var switchInterval = setInterval(nextSlide, slideInterval);
  $('#viewport').hover(function () {
    clearInterval(switchInterval);
  }, function () {
    switchInterval = setInterval(nextSlide, slideInterval);
  });
  $('#next-btn').click(function () {
    nextSlide();
  });
  $('#prev-btn').click(function () {
    prevSlide();
  });
  $('.slide-nav-btn').click(function () {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
      translateWidth = -$('#viewport').width() * navBtnId;
      $('#slidewrapper').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
      });
      slideNow = navBtnId + 1;
    }
  });
});

function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('#slidewrapper').css('transform', 'translate(0, 0)');
    slideNow = 1;
  } else {
    translateWidth = -$('#viewport').width() * slideNow;
    $('#slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
    });
    slideNow++;
  }
}

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -$('#viewport').width() * (slideCount - 1);
    $('#slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
    });
    slideNow = slideCount;
  } else {
    translateWidth = -$('#viewport').width() * (slideNow - 2);
    $('#slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
    });
    slideNow--;
  }
}

/***/ }),

/***/ "./assets/modules/about_me/about_me.css":
/*!**********************************************!*\
  !*** ./assets/modules/about_me/about_me.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/modules/about_me/components/slider/slider.css":
/*!**************************************************************!*\
  !*** ./assets/modules/about_me/components/slider/slider.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_web_timers_js-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2R1bGVzL2Fib3V0X21lL2Fib3V0X21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2R1bGVzL2Fib3V0X21lL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9kdWxlcy9hYm91dF9tZS9hYm91dF9tZS5jc3M/NDNkZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9kdWxlcy9hYm91dF9tZS9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY3NzP2FjMmEiXSwibmFtZXMiOlsicmVxdWlyZSIsInNsaWRlTm93Iiwic2xpZGVDb3VudCIsIiQiLCJjaGlsZHJlbiIsImxlbmd0aCIsInNsaWRlSW50ZXJ2YWwiLCJuYXZCdG5JZCIsInRyYW5zbGF0ZVdpZHRoIiwiZG9jdW1lbnQiLCJyZWFkeSIsInN3aXRjaEludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJuZXh0U2xpZGUiLCJob3ZlciIsImNsZWFySW50ZXJ2YWwiLCJjbGljayIsInByZXZTbGlkZSIsImluZGV4Iiwid2lkdGgiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLG1CQUFPLENBQUMsNkVBQUQsQ0FBUCxDOzs7Ozs7Ozs7O0FDQUFBLG1CQUFPLENBQUMsOERBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw0RkFBRCxDQUFQLEM7Ozs7Ozs7Ozs7Ozs7QUNEQUEsbUJBQU8sQ0FBQyw0RUFBRCxDQUFQOztBQUVBLElBQUlDLFFBQVEsR0FBRyxDQUFmO0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CQyxRQUFuQixHQUE4QkMsTUFBL0M7QUFDQSxJQUFJQyxhQUFhLEdBQUcsSUFBcEI7QUFDQSxJQUFJQyxRQUFRLEdBQUcsQ0FBZjtBQUNBLElBQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUVBTCxDQUFDLENBQUNNLFFBQUQsQ0FB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QUFuQixDQUF1QjtBQUNuQixtQkFBYSxlQUFlWixjQUFmLEdBQWdDLFFBRDFCO0FBRW5CLDJCQUFxQixlQUFlQSxjQUFmLEdBQWdDLFFBRmxDO0FBR25CLHVCQUFpQixlQUFlQSxjQUFmLEdBQWdDO0FBSDlCLEtBQXZCO0FBS0FQLFlBQVE7QUFDWDtBQUNKLEM7Ozs7Ozs7Ozs7OztBQzFFRDs7Ozs7Ozs7Ozs7OztBQ0FBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vbW9kdWxlcy9hYm91dF9tZS9hYm91dF9tZS5qcycpOyIsInJlcXVpcmUoJy4vYWJvdXRfbWUuY3NzJyk7XHJcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzJyk7XHJcblxyXG4iLCJyZXF1aXJlKCcuL3NsaWRlci5jc3MnKTtcclxuXHJcbnZhciBzbGlkZU5vdyA9IDE7XHJcbnZhciBzbGlkZUNvdW50ID0gJCgnI3NsaWRld3JhcHBlcicpLmNoaWxkcmVuKCkubGVuZ3RoO1xyXG52YXIgc2xpZGVJbnRlcnZhbCA9IDMwMDA7XHJcbnZhciBuYXZCdG5JZCA9IDA7XHJcbnZhciB0cmFuc2xhdGVXaWR0aCA9IDA7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIHZhciBzd2l0Y2hJbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRTbGlkZSwgc2xpZGVJbnRlcnZhbCk7XHJcblxyXG4gICAgJCgnI3ZpZXdwb3J0JykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzd2l0Y2hJbnRlcnZhbCk7XHJcbiAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICBzd2l0Y2hJbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRTbGlkZSwgc2xpZGVJbnRlcnZhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjbmV4dC1idG4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBuZXh0U2xpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNwcmV2LWJ0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHByZXZTbGlkZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNsaWRlLW5hdi1idG4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBuYXZCdG5JZCA9ICQodGhpcykuaW5kZXgoKTtcclxuXHJcbiAgICAgICAgaWYgKG5hdkJ0bklkICsgMSAhPSBzbGlkZU5vdykge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVXaWR0aCA9IC0kKCcjdmlld3BvcnQnKS53aWR0aCgpICogKG5hdkJ0bklkKTtcclxuICAgICAgICAgICAgJCgnI3NsaWRld3JhcHBlcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgnICsgdHJhbnNsYXRlV2lkdGggKyAncHgsIDApJyxcclxuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUoJyArIHRyYW5zbGF0ZVdpZHRoICsgJ3B4LCAwKScsXHJcbiAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUoJyArIHRyYW5zbGF0ZVdpZHRoICsgJ3B4LCAwKScsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZU5vdyA9IG5hdkJ0bklkICsgMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xyXG4gICAgaWYgKHNsaWRlTm93ID09IHNsaWRlQ291bnQgfHwgc2xpZGVOb3cgPD0gMCB8fCBzbGlkZU5vdyA+IHNsaWRlQ291bnQpIHtcclxuICAgICAgICAkKCcjc2xpZGV3cmFwcGVyJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJyk7XHJcbiAgICAgICAgc2xpZGVOb3cgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0cmFuc2xhdGVXaWR0aCA9IC0kKCcjdmlld3BvcnQnKS53aWR0aCgpICogKHNsaWRlTm93KTtcclxuICAgICAgICAkKCcjc2xpZGV3cmFwcGVyJykuY3NzKHtcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUoJyArIHRyYW5zbGF0ZVdpZHRoICsgJ3B4LCAwKScsXHJcbiAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUoJyArIHRyYW5zbGF0ZVdpZHRoICsgJ3B4LCAwKScsXHJcbiAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgnICsgdHJhbnNsYXRlV2lkdGggKyAncHgsIDApJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBzbGlkZU5vdysrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmV2U2xpZGUoKSB7XHJcbiAgICBpZiAoc2xpZGVOb3cgPT0gMSB8fCBzbGlkZU5vdyA8PSAwIHx8IHNsaWRlTm93ID4gc2xpZGVDb3VudCkge1xyXG4gICAgICAgIHRyYW5zbGF0ZVdpZHRoID0gLSQoJyN2aWV3cG9ydCcpLndpZHRoKCkgKiAoc2xpZGVDb3VudCAtIDEpO1xyXG4gICAgICAgICQoJyNzbGlkZXdyYXBwZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgnICsgdHJhbnNsYXRlV2lkdGggKyAncHgsIDApJyxcclxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgnICsgdHJhbnNsYXRlV2lkdGggKyAncHgsIDApJyxcclxuICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiAndHJhbnNsYXRlKCcgKyB0cmFuc2xhdGVXaWR0aCArICdweCwgMCknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlTm93ID0gc2xpZGVDb3VudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJhbnNsYXRlV2lkdGggPSAtJCgnI3ZpZXdwb3J0Jykud2lkdGgoKSAqIChzbGlkZU5vdyAtIDIpO1xyXG4gICAgICAgICQoJyNzbGlkZXdyYXBwZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgnICsgdHJhbnNsYXRlV2lkdGggKyAncHgsIDApJyxcclxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgnICsgdHJhbnNsYXRlV2lkdGggKyAncHgsIDApJyxcclxuICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiAndHJhbnNsYXRlKCcgKyB0cmFuc2xhdGVXaWR0aCArICdweCwgMCknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlTm93LS07XHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9