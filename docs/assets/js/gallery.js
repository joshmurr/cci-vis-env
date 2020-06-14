import GL_BP from './GL_BP/prod.bundle.js';

const overlay = document.getElementById("overlay");
const warning = document.getElementById("warning");
const close = document.getElementById("close");
const demoTitle = document.getElementById("demoTitle");
const galleryItems = document.querySelectorAll(".item");
let GL, dim;

// var isFirefox = typeof InstallTrigger !== 'undefined';
// if(!isFirefox) {
    // warning.classList.toggle("hide", false);
// }

for(const item of galleryItems){
    item.addEventListener("click", showOverlay)
}

close.addEventListener("click", hideOverlay);

function showOverlay(e){
    overlay.style.top = String(window.pageYOffset + "px");
    overlay.classList.toggle("hide", false);
    console.log("showing overlay");
    const currentFunction = e.target.getAttribute('name');
    main(currentFunction);
}

function hideOverlay(e){
    overlay.classList.toggle("hide", true);
}


function main(currentFunction){
    const regex = /_/g;
    dim = window.screen.width < 600 ? window.screen.width-80 : 512;
    demoTitle.innerHTML = currentFunction.replace(regex, ' ');
    GL = new GL_BP();
    GL.initTarget(dim, dim, "overlayCanvas", true);

    switch(currentFunction) {
        case 'Ten_Thousand_Points' : {
            pointSphere();
            break;
        }
        case 'GPU_Game_of_Life' : {
            golTexture2d(1);
            break;
        }
        case 'Game_of_Life_as_a_Texture' : {
            golTextureOscillate(4);
            break;
        }
        case 'Point_Cube' : {
            pointCube();
            break;
        }
        case 'Coloured_Vertices' : {
            icosahedron();
            break;
        }
        case 'Many_Particles' : {
            particles3D();
            break;
        }
        case 'Simple_Particles' : {
            simpleParticles();
            break;
        }
        case 'Flow_Field' : {
            flowField();
            break;
        }
        case 'User_Interaction' : {
            userInteraction();
            break;
        }
        default : {
            demoTitle.innerHTML = "404: Program Coming Soon";
            fourOhfour();
        }
    }
}
//
// -------------------------------------------------------------------------------
export function userInteraction(_GL){
    const updateVert = require('./glsl/userInteraction/particle_update_vert.glsl');
    const updateFrag = require('./glsl/userInteraction/passthru_frag.glsl');
    const renderVert = require('./glsl/userInteraction/particle_render_vert.glsl');
    const renderFrag = require('./glsl/userInteraction/particle_render_frag.glsl');

    const transformFeedbackVaryings = [
        "v_Position",
        "v_Velocity",
        "v_Age",
        "v_Life",
    ];

    GL.initShaderProgram('update', updateVert, updateFrag, transformFeedbackVaryings, null);
    GL.initShaderProgram('render', renderVert, renderFrag, null, 'POINTS');

    const SIZE = 64;
    // 1D TEXTURE - Grid Spawning Positions
    let d = [];
    for(let i=0; i<SIZE; ++i){
        let u = (i/SIZE) * (Math.PI);
        for(let j=0; j<SIZE; ++j){
            let v = (j/SIZE) * (Math.PI*2);
            let rand = Math.random()-0.5;
            let r = 127;
            let x = Math.sin(u)*Math.cos(v);
            let y = Math.sin(u)*Math.sin(v);
            let z = Math.cos(u);
            x *= rand; y *= rand; z *= rand;
            x += 1; y += 1; z += 1;
            x *= r; y *= r; z *= r;
            d.push(
                Math.floor(x),
                Math.floor(y),
                Math.floor(z)
            );
        }
    }
    GL.dataTexture('update', {
        name           :'u_InitialPosition',
        width          : SIZE,
        height         : SIZE,
        internalFormat : 'RGB8',
        format         : 'RGB',
        unit           : 0,
        data           : new Uint8Array(d),
    });

    d = [];
    for(let i=0; i<GL.width; ++i){
        for(let j=0; j<GL.height; ++j){
            d.push(Math.floor(Math.random()*255));
            d.push(Math.floor(Math.random()*255));
            d.push(Math.floor(Math.random()*255));
        }
    }
    GL.dataTexture('update', {
        name           :'u_NoiseRGB',
        width          : GL.width,
        height         : GL.height,
        internalFormat : 'RGB8',
        format         : 'RGB',
        unit           : 1,
        data           : new Uint8Array(d),
    });

    GL.initProgramUniforms('update', [ 'u_ProjectionMatrix', 'u_ViewMatrix', 'u_TimeDelta', 'u_TotalTime', 'u_Mouse', 'u_Click' ]);
    GL.initProgramUniforms('render', [ 'u_ProjectionMatrix', 'u_ViewMatrix' ]);

    GL.setDrawParams('render', {
        clearColor : [0.0, 0.0, 0.0, 1.0],
        enable     : ['BLEND'],
        blendFunc  : ['ONE', 'ZERO'],
    });

    GL.addProgramUniform('update',{
        name : 'u_NumParticlesSqRoot',
        type : 'uniform1i',
        value: SIZE,
    });

    GL.cameraPosition = [0, 1, 1.5];

    const opts = {
        numParticles : SIZE*SIZE,
        lifeRange    : [1.01, 10.1],
        dimensions : 3,
        birthRate : 0.99
    };
    const ParticleSystem = GL.ParticleSystem('update', 'render', opts);
    ParticleSystem.rotate = { s:0.0005, a:[0,1,0]};
    GL.initGeometryUniforms('update', [ 'u_ModelMatrix', 'u_InverseModelMatrix' ]);
    GL.initGeometryUniforms('render', [ 'u_ModelMatrix' ]);

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}

// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------

export function flowField(){
    const updateVert = require('./glsl/flowfield/particle_update_vert.glsl');
    const updateFrag = require('./glsl/flowfield/passthru_frag.glsl');
    const renderVert = require('./glsl/flowfield/particle_render_vert.glsl');
    const renderFrag = require('./glsl/flowfield/particle_render_frag.glsl');

    const transformFeedbackVaryings = [
        "v_Position",
        "v_Velocity",
        "v_Age",
        "v_Life",
    ];

    GL.initShaderProgram('update', updateVert, updateFrag, transformFeedbackVaryings, null);
    GL.initShaderProgram('render', renderVert, renderFrag, null, 'POINTS');

    const SIZE = 12;
    // 1D TEXTURE - RANDOM DATA
    let d = [];
    for(let i=0; i<SIZE; ++i){
        for(let j=0; j<SIZE; ++j){
            for(let k=0; k<SIZE; ++k){
                d.push(
                    Math.floor((i/SIZE)* 255),
                    Math.floor((j/SIZE)* 255),
                    Math.floor((k/SIZE)* 255),
                );
            }
        }
    }
    GL.dataTexture('update', {
        name           :'u_InitialPosition',
        width          : SIZE*SIZE*SIZE,
        height         : 1,
        internalFormat : 'RGB8',
        format         : 'RGB',
        unit           : 0,
        data           : new Uint8Array(d),
    });

    GL.initProgramUniforms('update', [ 'u_TimeDelta', 'u_TotalTime' ]);
    GL.initProgramUniforms('render', [ 'u_ProjectionMatrix', 'u_ViewMatrix' ]);

    GL.setDrawParams('render', {
        clearColor : [0.0, 0.0, 0.0, 1.0],
        enable     : ['BLEND', 'CULL_FACE', 'DEPTH_TEST'], // if enable is changed, it will override defaults
        blendFunc  : ['SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA'],
        depthFunc  : ['LEQUAL']
    });

    GL.cameraPosition = [0, 1.5, 2.8];

    const opts = { 
        numParticles : SIZE*SIZE*SIZE,
        lifeRange    : [1.01, 10.1],
        dimensions : 3, 
        birthRate : 0.6
    };
    const ParticleSystem = GL.ParticleSystem('update', 'render', opts);
    ParticleSystem.rotate = { s:0.0005, a:[0,1,0]};
    GL.initGeometryUniforms('render', [ 'u_ModelMatrix' ]);

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
function golTexture2d(_scale){
    const quadVert = require('./glsl/gameoflife/quadVert.glsl');
    const updateFrag = require('./glsl/gameoflife/golFrag.glsl');
    const renderFrag = require('./glsl/gameoflife/copyFrag.glsl');

    const GOL = {
        viewsize : [dim, dim],
        statesize: [dim/_scale, dim/_scale],
    };

    GL.initShaderProgram('update', quadVert, updateFrag, null, 'TRIANGLES');
    GL.initShaderProgram('render', quadVert, renderFrag, null, 'TRIANGLES');

    GL.setDrawParams('update', {
        viewport       : [0, 0, GOL.statesize[0], GOL.statesize[1]],
    });

    GL.setFramebufferRoutine('update', {
        bindFramebuffer : 'step',
        framebufferTexture2D : ['update', 'u_StateUpdate'],
        bindTexture : ['render', 'u_StateRender'],
    });

    GL.setFramebufferRoutine('render', {
        pre     : {
            func : 'swapTextures',
            args : [['update','u_StateUpdate'], ['render','u_StateRender']],
        },
        bindFramebuffer : null,
        bindTexture : ['render', 'u_StateRender'],
    });

    GL.framebuffer('step');

    let d = [];
    for(let i=0, size = GOL.statesize[0]*GOL.statesize[1]; i<size; i++){
        const state = Math.random() < 0.5 ? 255 : 0
        d.push(state, state, state, 0.0);
    }

    let d8 = new Uint8Array(d);

    GL.dataTexture('update', {
        name : 'u_StateUpdate',
        width : GOL.statesize[0],
        height : GOL.statesize[1],
        wrap : 'REPEAT',
        data           : d8
    });

    GL.dataTexture('render', {
        name : 'u_StateRender',
        width : GOL.statesize[0],
        height : GOL.statesize[1],
        wrap : 'REPEAT',
        data           : d8
    });


    GL.initProgramUniforms('render', [ 'u_Resolution' ]);

    GL.addProgramUniform('render', {
        name : 'u_Scale',
        type : 'uniform2fv',
        value : GOL.viewsize,
    });
    GL.addProgramUniform('update', {
        name : 'u_Scale',
        type : 'uniform2fv',
        value : GOL.statesize,
    });

    const GameOfLife = GL.Quad(['update', 'render']);

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
function particles3D(){
    const updateVert = require('./glsl/particles3d/particle_update_vert.glsl');
    const updateFrag = require('./glsl/particles3d/passthru_frag.glsl');
    const renderVert = require('./glsl/particles3d/particle_render_vert.glsl');
    const renderFrag = require('./glsl/particles3d/particle_render_frag.glsl');

    const transformFeedbackVaryings = [
        "v_Position",
        "v_Velocity",
        "v_Age",
        "v_Life",
    ];

    GL.initShaderProgram('update', updateVert, updateFrag, transformFeedbackVaryings, null);
    GL.initShaderProgram('render', renderVert, renderFrag, null, 'POINTS');

    let d = [];
    for(let i=0; i<512*512; ++i){
        d.push(Math.random()*255);
        d.push(Math.random()*255);
        d.push(Math.random()*255);
    }

    GL.dataTexture('update', {
        name           :'u_RgNoise',
        width          : 512,
        height         : 512,
        internalFormat : 'RGB8',
        format         : 'RGB',
        data           : new Uint8Array(d),
    });

    GL.initProgramUniforms('update', [ 'u_TimeDelta', 'u_TotalTime' ]);
    GL.initProgramUniforms('render', [ 'u_ProjectionMatrix', 'u_ViewMatrix' ]);

    GL.setDrawParams('render', {
        clearColor : [0.0, 0.0, 0.0, 1.0],
        enable     : ['BLEND'], // if enable is changed, it will override defaults
        blendFunc  : ['SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA'],
    });

    GL.cameraPosition = [0, 2, 3.5];

    const opts = { 
        numParticles : 100000,
        lifeRange    : [1.01, 10.1],
        dimensions : 3, 
        birthRate : 2
    };
    const ParticleSystem = GL.ParticleSystem('update', 'render', opts);
    ParticleSystem.rotate = { s:0.0005, a:[0,1,0]};
    GL.initGeometryUniforms('render', [ 'u_ModelMatrix' ]);

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
function simpleParticles() {
    const updateVert = require('./glsl/TFBparticles/particle_update_vert.glsl');
    const updateFrag = require('./glsl/TFBparticles/passthru_frag.glsl');
    const renderVert = require('./glsl/TFBparticles/particle_render_vert.glsl');
    const renderFrag = require('./glsl/TFBparticles/particle_render_frag.glsl');

    const transformFeedbackVaryings = [
        "v_Position",
        "v_Velocity",
        "v_Age",
        "v_Life",
    ];


    GL.initShaderProgram('update', updateVert, updateFrag, transformFeedbackVaryings, null);
    GL.initShaderProgram('render', renderVert, renderFrag, null, 'POINTS');

    GL.initProgramUniforms('update', [ 'u_TimeDelta', 'u_Mouse' ]);
    GL.initProgramUniforms('render', [ 'u_ProjectionMatrix', 'u_ViewMatrix' ]);

    GL.setDrawParams('render', {
        clearColor : [0.1, 0.1, 0.3, 1.0],
        enable     : ['BLEND', 'CULL_FACE', 'DEPTH_TEST'], // if enable is changed, it will override defaults
        blendFunc  : ['SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA'],
    });

    let d = [];
    for(let i=0; i<512*512; ++i){
        d.push(Math.random()*255);
        d.push(Math.random()*255);
    }

    GL.dataTexture('update', {
        name           :'u_RgNoise',
        width          : 512,
        height         : 512,
        internalFormat : 'RG8',
        format         : 'RG',
        data           : new Uint8Array(d),
    });

    const opts = { numParticles : 200, birthRate:0.1 };
    const ParticleSystem = GL.ParticleSystem('update', 'render', opts);
    GL.initGeometryUniforms('render', [ 'u_ModelMatrix' ]);

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
};
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
function icosahedron() {
    const facesVert = require('./glsl/facesVert.glsl');
    const facesFrag = require('./glsl/facesFrag.glsl');

    GL.initShaderProgram('faces', facesVert, facesFrag, null, 'TRIANGLES');

    const icos = GL.Icosahedron('faces');
    icos.rotate = {s:0.001, a:[1,1,0]};

    GL.initProgramUniforms('faces', [
        'u_ProjectionMatrix',
        'u_ViewMatrix',
    ]);
    GL.cameraPosition = [0, 1, 4];

    GL.initGeometryUniforms('faces', [ 'u_ModelMatrix' ]);

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
};
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
function pointSphere() {
    const pointsVert = require('./glsl/pointsVert.glsl');
    const pointsFrag = require('./glsl/pointsFrag.glsl');
    const basicFrag = require('./glsl/basicFrag.glsl');

    GL.initShaderProgram('points', pointsVert, pointsFrag, null, 'POINTS');
    GL.initShaderProgram('lines', pointsVert, basicFrag, null, 'LINES');

    GL.setDrawParams('lines', { clear : null });

    const points = GL.RandomPointSphere(['points'], 10000);
    points.rotate = {s:0.001, a:[1,1,0]};

    const cube = GL.Cube(['lines'], 'DEBUG');
    cube.rotate = {s:0.001, a:[1,1,0]};

    GL.initProgramUniforms('points', [
        'u_ProjectionMatrix',
        'u_ViewMatrix',
    ]);
    GL.initGeometryUniforms('points', [ 'u_ModelMatrix' ]);
    GL.initProgramUniforms('lines', [
        'u_ProjectionMatrix',
        'u_ViewMatrix',
    ]);
    GL.initGeometryUniforms('lines', [ 'u_ModelMatrix' ]);
    GL.cameraPosition = [0, 2, 4];

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
};
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
function pointCube() {
    const pointsVert = require('./glsl/pointCube/pointsVert.glsl');
    const pointsFrag = require('./glsl/pointCube/pointsFrag.glsl');

    GL.initShaderProgram('points', pointsVert, pointsFrag, null, 'POINTS');

    const points = GL.PointCloud(['points'], 1000);
    points.rotate = {s:-0.0005, a:[0.5,0.8,0.2]};

    GL.initProgramUniforms('points', [
        'u_ProjectionMatrix',
        'u_ViewMatrix',
    ]);
    GL.initGeometryUniforms('points', [ 'u_ModelMatrix' ]);

    let d = [];
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            for(let k=0; k<8; k++){
                d.push(
                    Math.floor((i/8)* 255),
                    Math.floor((j/8)* 255),
                    Math.floor((k/8)* 255),
                    0);
            }
        }
    }

    GL.dataTexture('points', {
        name : 'u_Texture',
        width : 8*8*8,
        height : 1,
        data : new Uint8Array(d),
    });

    GL.cameraPosition = [0, 1.5, 1.5];

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
};
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
function fourOhfour(){
    /* 404 CUBE */
    const textureVert = require('./glsl/textureVert.glsl');
    const textureFrag = require('./glsl/textureFrag.glsl');

    console.error("404: GL_BP Program Not Found");
    GL.initShaderProgram('texture', textureVert, textureFrag, null, 'TRIANGLES');


    GL.initProgramUniforms('texture', [
        'u_ProjectionMatrix',
        'u_ViewMatrix',
    ]);

    const cube = GL.Cube(['texture'], '404');
    cube.rotate = { s:-0.002, a:[0.2,0.8,0.5]};

    GL.initGeometryUniforms('texture', [ 'u_ModelMatrix' ]);

    const r = [255, 0, 0, 255];
    const w = [255, 255, 255, 255];

    GL.dataTexture('texture', {
        width : 10,
        height : 5,
        data : new Uint8Array([
            ...w, ...w, ...w, ...r, ...w,...w, ...w, ...r, ...w, ...w,
            ...r, ...r, ...r, ...r, ...r,...w, ...r, ...w, ...r, ...w,
            ...w, ...r, ...w, ...r, ...w,...w, ...r, ...w, ...r, ...w,
            ...w, ...w, ...r, ...r, ...w,...w, ...r, ...w, ...r, ...w,
            ...w, ...w, ...w, ...r, ...w,...w, ...w, ...r, ...w, ...w,
        ]),
    });

    GL.cameraPosition = [0, 0, 5];

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
// -------------------------------------------------------------------------------

// GOL AS TEXTURE ----------------------------------------------------------------
function golTextureOscillate(_scale){
    const updateVert = require('./glsl/gameoflifeAsTexture/updateVert.glsl');
    const renderVert = require('./glsl/gameoflifeAsTexture/renderVert.glsl');
    const updateFrag = require('./glsl/gameoflifeAsTexture/golFrag.glsl');
    const renderFrag = require('./glsl/gameoflifeAsTexture/copyFrag.glsl');

    const GOL = {
        viewsize : [dim, dim],
        statesize: [dim/_scale, dim/_scale],
    };

    GL.initShaderProgram('update', updateVert, updateFrag, null, 'TRIANGLES');
    GL.initShaderProgram('render', renderVert, renderFrag, null, 'TRIANGLES');

    GL.setDrawParams('update', {
        viewport       : [0, 0, GOL.statesize[0], GOL.statesize[1]],
    });

    GL.setFramebufferRoutine('update', {
        bindFramebuffer : 'step',
        framebufferTexture2D : ['update', 'u_StateUpdate'],
        bindTexture : ['render', 'u_StateRender'],
    });

    GL.setFramebufferRoutine('render', {
        pre     : {
            func : 'swapTextures',
            args : [['update','u_StateUpdate'], ['render','u_StateRender']],
        },
        bindFramebuffer : null,
        bindTexture : ['render', 'u_StateRender'],
    });

    GL.framebuffer('step');

    let d = [];
    for(let i=0, size = GOL.statesize[0]*GOL.statesize[1]; i<size; i++){
        const state = Math.random() < 0.5 ? 255 : 0
        d.push(state, state, state, 0.0);
    }

    let d8 = new Uint8Array(d);

    GL.dataTexture('update', {
        name : 'u_StateUpdate',
        width : GOL.statesize[0],
        height : GOL.statesize[1],
        wrap : 'REPEAT',
        data           : d8
    });

    GL.dataTexture('render', {
        name : 'u_StateRender',
        width : GOL.statesize[0],
        height : GOL.statesize[1],
        wrap : 'REPEAT',
        data           : d8
    });


    GL.initProgramUniforms('render', [ 'u_ViewMatrix', 'u_ProjectionMatrix' ]);

    GL.addProgramUniform('render', {
        name : 'u_Scale',
        type : 'uniform2fv',
        value : GOL.viewsize,
    });
    GL.addProgramUniform('update', {
        name : 'u_Scale',
        type : 'uniform2fv',
        value : GOL.statesize,
    });

    const GameOfLife = GL.Quad(['update', 'render']);
    GL.initGeometryUniforms('render', [ 'u_ModelMatrix' ]);

    GameOfLife.translate = [0, 0, -1.5]; 
    GameOfLife.rotate = {s:0.01, a:[-0.2,1,0.2]};
    GameOfLife.oscillate = true;

    function draw(now) {
        GL.draw(now);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
// -------------------------------------------------------------------------------
