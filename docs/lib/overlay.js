"use strict";

var _mainBundle = _interopRequireDefault(require("../GL_BP/main.bundle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var overlay = document.getElementById("overlay");
var close = document.getElementById("close");
var demoTitle = document.getElementById("demoTitle");
var galleryItems = document.querySelectorAll(".item");

var _iterator = _createForOfIteratorHelper(galleryItems),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var item = _step.value;
    // console.log(item);
    item.addEventListener("click", showOverlay);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

close.addEventListener("click", hideOverlay);

function showOverlay(e) {
  overlay.style.top = String(window.pageYOffset + "px");
  overlay.classList.toggle("hide", false);
  RandomPointSphere();
}

function hideOverlay(e) {
  overlay.classList.toggle("hide", true);
}

var pointsFrag = "#version 300 es\nprecision mediump float;\n\nout vec4 OUTCOLOUR;\n\nvoid main(){\n    float distance = length(2.0 * gl_PointCoord - 1.0);\n    if (distance > 1.0) {\n            discard;\n    }\n    OUTCOLOUR = vec4(0.0, 0.0, 0.0, 1.0);\n}\n";
var pointsVert = "#version 300 es\nprecision mediump float;\n\nin vec3 i_Position;\n\nuniform mat4 u_ProjectionMatrix;\nuniform mat4 u_ViewMatrix;\nuniform mat4 u_ModelMatrix;\n\nvoid main(){\n    gl_Position = u_ProjectionMatrix * u_ViewMatrix * u_ModelMatrix * vec4(i_Position, 1.0);\n    gl_PointSize = (gl_Position.w * -1.0) + 6.0;\n}\n";

function RandomPointSphere() {
  var GL = new _mainBundle["default"]();
  console.log(GL);
  GL.initTarget(512, 512, "overlay");
  GL.initShaderProgram('points', pointsVert, pointsFrag, 'POINTS');
  GL.updateGlobalUniforms();
  GL.cameraPosition = [0, 0, 5];
  var rSphere = GL.RandomPointSphere(GL.gl, 10000);
  GL.linkProgram('points', rSphere);
  rSphere.rotate = {
    s: 0.001,
    r: [0, 1, 1]
  };

  function draw(now) {
    GL.draw(now);
    window.requestAnimationFrame(draw);
  }

  window.requestAnimationFrame(draw);
}

;