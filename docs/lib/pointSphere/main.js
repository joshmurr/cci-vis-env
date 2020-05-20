"use strict";

var _mainBundle = _interopRequireDefault(require("../GL_BP/main.bundle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import './styles.css';
// var facesVert = require('./glsl/facesVert.glsl');
// var facesFrag = require('./glsl/facesFrag.glsl');
// var pointsVert = require('./glsl/pointsVert.glsl');
// var pointsFrag = require('./glsl/pointsFrag.glsl');
// var basicFrag = require('./glsl/basicFrag.glsl');
var pointsFrag = "#version 300 es\nprecision mediump float;\n\nout vec4 OUTCOLOUR;\n\nvoid main(){\n    float distance = length(2.0 * gl_PointCoord - 1.0);\n    if (distance > 1.0) {\n            discard;\n    }\n    OUTCOLOUR = vec4(0.0, 0.0, 0.0, 1.0);\n}\n";
var pointsVert = "#version 300 es\nprecision mediump float;\n\nin vec3 i_Position;\n\nuniform mat4 u_ProjectionMatrix;\nuniform mat4 u_ViewMatrix;\nuniform mat4 u_ModelMatrix;\n\nvoid main(){\n    gl_Position = u_ProjectionMatrix * u_ViewMatrix * u_ModelMatrix * vec4(i_Position, 1.0);\n    gl_PointSize = (gl_Position.w * -1.0) + 6.0;\n}\n"; // var textureVert = require('./glsl/textureVert.glsl');
// var textureFrag = require('./glsl/textureFrag.glsl');

function RandomPointSphere() {
  var GL = new _mainBundle["default"]();
  console.log(GL); // Create canvas of specified size and setup WebGL instance

  GL.initTarget(512, 512, "overlay"); // GL.initShaderProgram('lines', pointsVert, basicFrag, 'LINES');
  // GL.initShaderProgram('debug', pointsVert, basicFrag, 'TRIANGLE_STRIP');
  // GL.initShaderProgram('texture', textureVert, textureFrag, 'TRIANGLES');

  GL.initShaderProgram('points', pointsVert, pointsFrag, 'POINTS');
  GL.updateGlobalUniforms();
  GL.cameraPosition = [0, 0, 5]; // GL.linkProgram('debug', quad);

  var rSphere = GL.RandomPointSphere(GL.gl, 10000);
  GL.linkProgram('points', rSphere);
  rSphere.rotate = {
    s: 0.001,
    r: [0, 1, 1]
  }; // const uCube = new Cube(GL.gl, 'SOLID');
  // uCube.texture(texOptions);
  // GL.linkProgram('texture', uCube);
  // uCube.translate = [0, 0, -10];
  // uCube.rotate = { s:0.001, r:[1, 1, 0]};
  // const quad = GL.Quad();
  // quad.texture(texOptions);
  // quad.translate = [1, 0, -3];
  // GL.linkProgram('texture', quad);
  //
  // const quad2 = GL.Quad();
  // quad2.texture(tex2);
  // quad2.translate = [-1, 0, -3];
  // GL.linkProgram('texture', quad2);

  function draw(now) {
    GL.draw(now);
    window.requestAnimationFrame(draw);
  }

  window.requestAnimationFrame(draw); // GL.canvas.onmousemove = function(e) {
  // const x = 2.0 * (e.pageX - this.offsetLeft)/this.width - 1.0;
  // const y = -(2.0 * (e.pageY - this.offsetTop)/this.height - 1.0);
  // };
}

;