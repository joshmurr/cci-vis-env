import GL_BP from './GL_BP/GL_BP.js';

// Load GLSL
const pointsFrag = require('./glsl/pointsFrag.glsl');
const pointsVert = require('./glsl/pointsVert.glsl');
const facesVert = require('./glsl/facesVert.glsl');
const facesFrag = require('./glsl/facesFrag.glsl');
const basicFrag = require('./glsl/basicFrag.glsl');
const textureVert = require('./glsl/textureVert.glsl');
const textureFrag = require('./glsl/textureFrag.glsl');

const overlay = document.getElementById("overlay");
const close = document.getElementById("close");
const demoTitle = document.getElementById("demoTitle");
const galleryItems = document.querySelectorAll(".item");

let GL;

for(const item of galleryItems){
    item.addEventListener("click", showOverlay)
}

close.addEventListener("click", hideOverlay);

function showOverlay(e){
    overlay.style.top = String(window.pageYOffset + "px");
    overlay.classList.toggle("hide", false);
    const currentFunction = e.target.getAttribute('name');
    demoTitle.innerHTML = currentFunction;
    // console.log(currentFunction);
    main(currentFunction);
}

function hideOverlay(e){
    overlay.classList.toggle("hide", true);
}

function main(currentFunction){
    GL = new GL_BP();
    const dim = window.screen.width < 600 ? 256 : 512;
    GL.initTarget(dim, dim, "overlayCanvas");
    switch(currentFunction) {
        case 'TenThousandPoints' : {
            GL.initShaderProgram('points', pointsVert, pointsFrag, 'POINTS');
            GL.initShaderProgram('lines', pointsVert, basicFrag, 'LINES');
            GL.updateGlobalUniforms();
            GL.cameraPosition = [0, 0, 3];

            const rSphere = GL.RandomPointSphere(10000);
            GL.linkProgram('points', rSphere);
            rSphere.rotate = { s:0.001, r:[0, 1, 1]};

            const uCube = GL.Cube('DEBUG');
            GL.linkProgram('lines', uCube);
            uCube.rotate = { s:0.001, r:[0, 1, 1]};
            break;
        }
        case 'ColourfulIcosahedron' : {
            GL.initShaderProgram('faces', facesVert, facesFrag, 'TRIANGLES');
            GL.updateGlobalUniforms();
            GL.cameraPosition = [0, 0, 5];

            const icos = GL.Icosahedron();
            GL.linkProgram('faces', icos);
            icos.rotate = { s:0.001, r:[1, 1, 0]};
            break;
        }
    }

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
