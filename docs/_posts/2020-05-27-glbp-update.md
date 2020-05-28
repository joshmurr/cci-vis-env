---
layout: post
title:  "GL_BP Structure + Update"
date:   2020-05-27 14:00:01 +0000
categories: webgl
---

The [WebGL Boilerplate][GL_BP] mini-framework thing is turning into something which feels less like a house of cards, and more like a useful tool for WebGL development and testing. I have been developing and iterating on it with a few different demos ([which you can see on the home page][home]) which include a variety working methods with WebGL. The demos all come from other sources which I have ported (a number of times) into [GL_BP][GL_BP], which has been a good (difficult/laborious) test of the framework and I have been quite intentional about keeping the framework flexible enough to account for very different outputs. I am still learning a lot of WebGL, so some of what I'm doing/saying with regards to WebGL might be incorrect, but I'll explain the **GL_BP** framework a little bit here and why it's made the way it is.

## Structure

As I have come to learn a WebGL application _is_ actually quite a simple thing. All it does it take in buffers of data (attributes and uniforms), processes them in the shader program and then displays that data on the screen. As a developer you have control over the data which you send into the system and many parameters in the process via the WebGL API. The confusing part is when to send what data, and what parameters should be used. The __GO__ button is essentially the `draw()` call; this function tells WebGL to... _draw_ whatever it can with the information it has.

This sounds pretty boring, why not just use the `canvas`? Well all the WebGL calculations are done in the shader programs which are exectuted by the GPU of whatever machine the WebGL app is running on. The GPU is able to run the same shader program for each chunk of data in the buffers it has. So a vertex shader performs it's vertex calculations on _every vertex in the buffer_ simultaneously. Equally the fragment shader performs it's calculations on each fragment simultaneously (a fragment is like a pixel, but it's not a pixel, but it's what you see on the screen). [Read this](https://webgl2fundamentals.org/webgl/lessons/webgl-how-it-works.html) for a _much better explanation_ of all of this.

The `draw()` call is important and not to be used carelessly, [as explained in this video](https://www.youtube.com/watch?v=rfQ8rKGTVlg/) as few calls to this function is advised. So the way I think about a WebGL program (for better or worse) is pretty basic:

```
* SETUP

- UPDATE
- DRAW
- UPDATE
- DRAW
- UPDATE
- DRAW
- ...
```

_NB: `SETUP`, `UPDATE` and `DRAW` are illustrative of the process. GL_BP does not have 3 simple seperate functions like this unfortunately._

In `SETUP` you link your shader program (vertex and fragment), create your buffers and show the shader progam where the buffers are; you do something similar with the uniforms and that's about it. You also set the parameters which define _how_ WebGL should rasterize the data it has; this includes [blending functions](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc) or any other _capabilities_ which should be [enabled](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/enable).

In `UPDATE` you _update_ the uniforms if they need to be updated (the model matrix will need to be if the model has moved or rotated for instance) and then pass them over to WebGL. You can also update any of the parameters/capabilites in setup.

Finally `DRAW` is essentially up to WebGL to work out what to do with the information you have given it.

SO! **GL_BP** essentially is an attempt to abstract out this process into something which takes care of all the fiddly bits and sets a number of common defaults to get a program running, but allows you to set parameters if you so choose and inject other snippets into the process. If we take the first demo as a case study we can see _GL_BP_ in action:

```
SETUP
```
```javascript
// Using 'webpack-glsl-loader' to load from .glsl files
const pointsVert = require('./glsl/pointsVert.glsl');
const pointsFrag = require('./glsl/pointsFrag.glsl');
const basicFrag = require('./glsl/basicFrag.glsl');

const GL = new GL_BP();
GL.init(512,512);

GL.initShaderProgram('points', pointsVert, pointsFrag, null, 'POINTS');
GL.initShaderProgram('lines', pointsVert, basicFrag, null, 'LINES');

// Set options such as gl.enable('BLEND')
// Here we tell GL *not* to clear so that both programs
// are drawn to the screen.
GL.setDrawParams('lines', { clear : null });

// Create geometries with a shader program to link them
const points = GL.RandomPointSphere(['points'], 1000);
points.rotate = {s:0.001, a:[0,1,0]};

const cube = GL.Cube(['lines'], 'DEBUG');
cube.rotate = {s:0.001, a:[0,1,0]};

// These are default geometry unfiforms;
// initialize to send to shader program.
GL.initProgramUniforms('points', [
    'u_ProjectionMatrix',
    'u_ViewMatrix',
]);
GL.initGeometryUniforms('points', [ 'u_ModelMatrix' ]);

// Repeat as it is a different shader program
GL.initProgramUniforms('lines', [
    'u_ProjectionMatrix',
    'u_ViewMatrix',
]);
GL.initGeometryUniforms('lines', [ 'u_ModelMatrix' ]);

GL.cameraPosition = [0, 0, 3];
```
```
DRAW
```
```javascript
function draw(now) {
GL.draw(now);
window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
```

Generally all parameters pertaining to a particular program are stored inside a `_program` object inside _GL_BP_. Hopefully it's reasonably self-explanitory what each key means:

```javascript
this._programs[name] = {
    shader   : shaderProgram,
    mode     : _mode,
    transformFeedback : _transformFeedbackVaryings ? true : false,
    transformFeedbackVaryings : _transformFeedbackVaryings,
    geometry : [],
    uniformNeedsUpdate : false,
    globalUniforms : {},
    drawParams : {
        clearColor : [0.9, 0.9, 0.9, 1.0],
        clearDepth : [1.0],
        clear      : ['COLOR_BUFFER_BIT', 'DEPTH_BUFFER_BIT'],
        viewport   : [0, 0, this.gl.canvas.width, this.gl.canvas.height],
        enable     : ['CULL_FACE', 'DEPTH_TEST'],
    },
    customFramebufferRoutine : false,
    framebufferRoutine : {}
}
```

The __internal__ `GL.draw(now)` function call loops through each program it has stored, applies all necessary parameters which are general to the program; then loops through all geometries, applies any uniforms specific to the geometry and tells WebGL to `draw` that geometry. Between each program a `gl.clear()` is called which clears the screen, but as you can see in the example above we can turn that off for one of the two programs so the we see both rendered to the screen.

Hopefully you can get a sense of the general _GL_BP_ workflow above. It gets _much more interesting_ with some other demos which exploit some more exciting uses of WebGL.

## Much Excitement

The whole reason I got into this whole WebGL thing is to take advantage of the fact that it runs on the GPU. You can render simple [3D shapes](https://serene-agnesi-09afd7.netlify.app/simple_demo/simple_demo.html) or [points](https://js-geom.now.sh/) to the screen perfectly fine using `canvas` and the CPU. The nice thing about WebGL apps, as I have said a few times, it will do what you tell it to do with the data you give it. So to take advantage of the super fast GPU-based shader programs there are few special WebGL API calls which allow you to manipulate the data a bit further.

### Framebuffers

A _framebuffer_ is fairly self-explanatory: it is a buffer in which you can store the contents of the frame (whatever is being rendered), like drawing "off-screen". So this means to can perform computations in one program, encode the result into the fragment data (RGBA) and then use this _data_ elsewhere. 

The _Game of Life_ program on the [home page][home] does just this. I wont explain how the _Game of Life_ works, but it's the perfect use case for this method as for each state of the program the _need access to all of the data at once_ (each cell needs to check the state of its neighbours, and every cell needs to be updated before the current state can be updated). I will say now that I first read about this method on [Null Program](https://nullprogram.com/blog/2014/06/10/), a blog by [Chris Wellons](https://nullprogram.com/) who writes about a lot of interesting stuff and has [a lot of code](https://github.com/skeeto) to pour over which has been invaluable.

The _Game of Life_ is stored as two states: _update_ and _render_ which are two separate but equally sized textures. The first program performs the calculations as per the texture currently being rendered, and stores this into the update texture via a framebuffer. The framebuffer creates a snapshot of the new state without you seeing, and then passes this into the render program which renders it to screen, which you do see! This whole process is done on the GPU and is blazingly fast.

Previous iterations of _GL_BP_ had _Game of Life_ as its own class which was quite messy - now all we need are the two shader programs, a Quad so that the vertex shader has some vertices and doesn't complain, and the framebuffer parameters relevant to each program. The framebuffer parameters are stored in the `program` object and are set as the first operation in the draw loop:

```
SETUP
```
```javascript
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
```

These parameters are passed into the `UPDATE` / `DRAW` loop...

```
UPDATE
```
```javascript
switch(param) {
    case 'pre' : {
        // Run the pre-function:
        this[values.func](...values.args);
        break;
    }
        case 'bindFramebuffer' : {
        this.gl[param](this.gl.FRAMEBUFFER, this._framebuffers[values]);
        break;
    }
        case 'framebufferTexture2D' : {
        let [p, t] = values;
        this.gl[param](
            this.gl.FRAMEBUFFER,
            this.gl.COLOR_ATTACHMENT0,
            this.gl.TEXTURE_2D,
            this._programs[p].globalUniforms[t].value,// Select the texture
            0
        );
        break;
    }
        case 'bindTexture' : {
        let [p, t] = values;
        this.gl[param](
            this.gl.TEXTURE_2D,
            this._programs[p].globalUniforms[t].value // Select the texture
        );
        break;
    }
}
```

This structure will hopefully allow me in future chain these programs together if I so wish, or _inject_ more functionality into the draw loop without having to root around in the WebGL code itself.

[_I was going to put the full code here, but you can just see it on Github if you're curious._](https://github.com/joshmurr/webgl_boilerplate/blob/master/src/main.js#L10)

### Transform Feedback

As far as I know _transform feedback_ [is a new feature of WebGL 2](https://webgl2fundamentals.org/webgl/lessons/webgl2-whats-new.html), so it's extra exciting for me to get to grips with this. The tutorial which really got me off the ground [is here](https://gpfault.net/posts/webgl2-particles.txt.html) and like [Null Program](https://nullprogram.com/) has been invaluable; I recommend rooting around on the [GPFault](https://gpfault.net/) website for other great posts.

Transform feedback is similar to the process described above, but transform feedback (or _TF_) allows you to extract data from the vertex shader. This is fundamentally different to the process above as the buffers of data in the vertex shader can be thought of as a _stream_ of information; the vertex shader is applied simultaneously across the entire buffer, but any one particular instance of that vertex shader only has access to one vertex at a time (or normal or colour attribute etc.). So whereas the above method is great when you need access to _all_ the data at once, this method is better suited to applications where _each unit of data does not need to reference the rest of the data_. Sooo a good example of this is a [simple] __particle system__!

The method described in the [GPFault tutorial](https://gpfault.net/posts/webgl2-particles.txt.html) encodes the position, velocity, life and age information into a single buffer. As _TF_ only works in a vertex shader, all the calulations are done there this time. The data for each particle is updated and then spat out into a _transform feedback buffer_. This buffer is then passed into the next shader program which takes care of the rendering process.

Conceptually it's very similar to the method above, but each have their use cases. I found that out the hard way after wasting a fair amount of time trying to get _Game of Life_ running using transform feedback before realising that you need _all the data at once_.

The way I have decided to implement this in _GL_BP_ is to create a `step()` function inside the particle system class which handles the _TF_ process. It is a bit more nuanced than the framebuffer approach above, and so it makes sense the particle system to control which buffer and which [Vertex Array Object](https://developer.mozilla.org/en-US/docs/Web/API/WebGLVertexArrayObject) is being read from or written to and when. However, similarly to the approach above, you simply define your _TF Vrarings_ in the setup stage and this flags to _GL_BP_ that the geometry/model in question _should_ have a `step()` function present to handle the _TF_ process, and the following `draw()` call is skipped (as the fragment shader does nothing so the `draw()` call is unnessecary).

```javascript
const transformFeedbackVaryings = [
    "v_Position",
    "v_Velocity",
    "v_Age",
    "v_Life",
];

GL.initShaderProgram('update', updateVert, updateFrag, transformFeedbackVaryings, null);
GL.initShaderProgram('render', renderVert, renderFrag, null, 'POINTS');
```

[_Again, you can see the code for a particle system implemented with GL_BP here. It also creates a `dataTexture` which is just random data used as random seeds for Perlin noise in the update shader._](https://github.com/joshmurr/webgl_boilerplate/blob/master/src/main.js#L161)

## Bye

Overall I'm finally feeling pretty good about the _GL_BP_ code and it is starting to look useful for further WebGL experiments. Hopefully some cool things are to come...

<!-- Links  -->
[GL_BP]: https://github.com/joshmurr/webgl_boilerplate/
[home]: {{ site.baseurl }}/

<!-- Images -->
[GOLGPU]: {{ site.baseurl }}/assets/images/GL_BP/gol.gif
