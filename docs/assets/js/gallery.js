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
    // console.log(currentFunction);
    main(currentFunction);
}

function hideOverlay(e){
    overlay.classList.toggle("hide", true);
}

function main(currentFunction){
    GL = new GL_BP();
    const dim = window.screen.width < 600 ? window.screen.width-80 : 512;
    const regex = /_/g;
    GL.initTarget(dim, dim, "overlayCanvas");
    switch(currentFunction) {
        case 'Ten_Thousand_Points' : {
            demoTitle.innerHTML = currentFunction.replace(regex, ' ');

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
        case 'Coloured_Vertices' : {
            demoTitle.innerHTML = currentFunction.replace(regex, ' ');

            GL.initShaderProgram('faces', facesVert, facesFrag, 'TRIANGLES');
            GL.updateGlobalUniforms();
            GL.cameraPosition = [0, 0, 5];

            const icos = GL.Icosahedron();
            GL.linkProgram('faces', icos);
            icos.rotate = { s:0.001, r:[1, 1, 0]};
            break;
        }
        default : {
            /* 404 CUBE */
            demoTitle.innerHTML = `${currentFunction.replace(regex, ' ')} coming soon.`;

            console.error("404: GL_BP Program Not Found");
            GL.initShaderProgram('texture', textureVert, textureFrag, 'TRIANGLES');
            GL.updateGlobalUniforms();
            GL.cameraPosition = [0, 0, 5];
            const r = [255, 0, 0, 255];
            const w = [255, 255, 255, 255];
            const four_zero = {
                program : 'texture',
                width : 10,
                height : 5,
                data : new Uint8Array([
                    ...w, ...w, ...w, ...r, ...w,...w, ...w, ...r, ...w, ...w,
                    ...r, ...r, ...r, ...r, ...r,...w, ...r, ...w, ...r, ...w,
                    ...w, ...r, ...w, ...r, ...w,...w, ...r, ...w, ...r, ...w,
                    ...w, ...w, ...r, ...r, ...w,...w, ...r, ...w, ...r, ...w,
                    ...w, ...w, ...w, ...r, ...w,...w, ...w, ...r, ...w, ...w,
                ]),
            };

            const cube = GL.Cube('404');
            cube.texture(four_zero);
            cube.rotate = { s:-0.002, a:[0.2,0.8,0.5]};
            GL.linkProgram('texture', cube);
            break;
        }
    }

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
