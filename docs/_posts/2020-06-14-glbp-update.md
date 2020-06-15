---
layout: post
title:  "GL_BP Update"
date:   2020-06-14 14:34:39 +0000
categories: webgl
---

It has been a while since I last wrote anything so this will likely contain a few random additions and changes to _GL_BP_.

## Restructure

The biggest change is that the `_program` object now holds pretty much everything. The geometry is simply a class which initializes the geometry buffers and attributes in the vertex array object, and now _all_ uniforms are handled by the `_program` object. The default setup is as follows:

```javascript
this._programs[name] = {
    shader   : shaderProgram,
    mode     : _mode,
    transformFeedback : _transformFeedbackVaryings ? true : false,
    transformFeedbackVaryings : _transformFeedbackVaryings,
    geometry : [],
    uniformNeedsUpdate : false,
    globalUniforms : {},
    geometryUniforms: {},
    uniformBuffers : {},
    drawParams : {
        clearColor : [0.95, 0.95, 0.95, 1.0],
        clearDepth : [1.0],
        clear      : ['COLOR_BUFFER_BIT', 'DEPTH_BUFFER_BIT'],
        viewport   : [0, 0, this.gl.canvas.width, this.gl.canvas.height],
        enable     : ['CULL_FACE', 'DEPTH_TEST'],
    },
    customFramebufferRoutine : false,
    framebufferRoutine : {}
}
```

This now makes it a lot easier to add uniforms in setup and to tell _GL_BP_ which program they are to be found and whether they need updating or not:

```javascript
GL.addProgramUniform('update',{
    name : 'u_MyUniform',
    type : 'uniform3fv',
    value: new Float32Array([0, 0, 0])
});
```

## Uniform Buffer Objects

[Uniform Buffer Objects](https://www.khronos.org/registry/webgl/specs/latest/2.0/#3.7.16) (_UBOs_) are another [new feature of WebGL 2](https://webgl2fundamentals.org/webgl/lessons/webgl2-whats-new.html) and proved to be a worthwile implementation in _GL_BP_. _UBOs_ act in a similar way to regular attribute buffers: they are a contigious block of data and you tell the shader program how to divide it up and what is inside the stream. This is done using [_interface blocks_](https://www.khronos.org/opengl/wiki/Interface_Block_%28GLSL%29) in the shader program which look like this:

```glsl
// Uniform Buffer Object: 'Interface Block'
uniform u_UserIntersectsBuffer {
    vec4 position[8];
} u_UserIntersects;

uniform u_UserSettings {
    float turbulence;
    float attract;
    float repel;
    float nothing;
} u_Settings;
```

The data types essentially tell the shader program what data should be expected. A gotcha I came across which caused some trouble for a while is that the memory layout for a _UBO_ (and this is specific to _uniform_ buffer objects) is in multiples of 16 bytes. So always pass data with that in mind; hence the `float nothing` in the example above. [More info on that here](https://www.khronos.org/opengl/wiki/Interface_Block_%28GLSL%29) (scroll down to _Memory Layout_ and read the __Warning__).

These are useful as you can update uniforms as a single buffer and thus reduce the number of _gl_ API calls. The above code is what I used to send multiple users mouse locations into the shader which you can see below, but I'll get on to that in another post...

![Multiple Users GIF]({{ site.baseurl }}/assets/images/multiple_users_OPT.gif)

## Cross-Browser Compatability

Turns out it _was_ a silly error in the code which was causing all the bugs in Chrome afterall! What a surprise. I was sending a uniform into the render program but never using it, which causes GLSL to read data from the wrong places in the buffer. It's still interesting that Firefox simply handles that error and gets on with it; I would be interested to know the differences in the Chrome and Firefox engines which means Firefox _can_ handle that but Chrome cannot... Maybe one day.

This means I can finally remove that silly _'You're not using Firefox'_ warning.

## Premultiplied Alpha

I spoke briefly about [premultiplied alpha](https://limnu.com/webgl-blending-youre-probably-wrong/) in a [previous post]({{ site.baseurll }}/cci-vis-env/web-dev/2020/05/27/jekyll-theme.html). Turns out you can turn it on or off as simply as this:

```javascript
let gl = canvas.getContext('webgl2', {premultipliedAlpha: true || false});
```

This does solve some problems regarding colour being multipled to colours _behind the canvas_, however not all as you can see here (and likely still on the home page):

![Premultiplied Alpha Error]({{ site.baseurl }}/assets/images/premultiplied_alpha_error.png)

So this remains an "open issue" but I at least know I'm in the right ball-park.
