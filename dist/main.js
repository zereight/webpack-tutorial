/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// index.js

function component() {
  var element = document.createElement("div");
  console.log("실행됨");
  /* lodash is required for the next line to work */
  element.innerHTML = "안녕하세요";

  return element;
}

document.body.appendChild(component());

/******/ })()
;