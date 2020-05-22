---
layout: post
title:  "Learning WebGL"
date:   2020-05-04 09:34:39 +0000
categories: webgl 3D
---

![3D Environment Test]({{ site.baseurl }}/assets/images/3d-env-test.png)

I made a simple 3D environment which a user can move around in and zoom in and out using the mouse and the keyboard.

To populate the space I ported my implementation of an icosphere from [a previous project](https://github.com/joshmurr/js_3d_engine) to make it a bit more WebGL friendly. I was pleased to see that the way I was approaching storing mesh data was actually quite transferrable to WebGL. Incidentally I wrote a little about making icosphere's [here](https://github.com/joshmurr/js_3d_engine/tree/master/simple_demo).

Then to make the object a bit more interesting I manipulated the vertices in the vertex shader using Perlin noise, using a lot of information [from this great tutorial](https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js/). I couldn't get my fuzzy shapes to look quite as nice as the tutorial, and I think that is down to how I am indexing the vertices when I generate the icosphere. I _think_ my indices are all jumbled up which means the vertex shader is moving around the shape sporadically rather than in sequence, so the Perlin noise ends up looking more like... noise.

Implementing mouse and keyboard controls was surprisingly simple, [this tutorial for OpenGL was very useful for that](https://www.opengl-tutorial.org/beginners-tutorials/tutorial-6-keyboard-and-mouse/). There are a few vectors you need to keep track of, namely `position`, `direction` and `target`; these and a few others get used to calculate a view matrix like so:

```javascript
function mouseLookAt(viewMatrix){
    direction = vec3.fromValues(
        Math.cos(verticalAngle) * Math.sin(horizontalAngle),
        Math.sin(verticalAngle),
        Math.cos(verticalAngle) * Math.cos(horizontalAngle));
    right = vec3.fromValues(
        Math.sin(horizontalAngle - 3.14/2),
        0,
        Math.cos(horizontalAngle - 3.14/2));
    up = vec3.cross(up, right, direction);

    target = vec3.add(target, position, direction);
    mat4.lookAt(viewMatrix, position, target, up);
}
```

The keyboard and mouse are used in `event listeners` to update the users `position`:

```javascript
function updatePosition(e){
    e.preventDefault();
    if (e.key === "w")
        vec3.scaleAndAdd(position, position, direction, deltaTime * speed);
    else if (e.key === "s")
        vec3.scaleAndAdd(position, position, direction, deltaTime * -speed);
    else if (e.key === "a")
        vec3.scaleAndAdd(position, position, right, deltaTime * -speed);
    else if (e.key === "d")
        vec3.scaleAndAdd(position, position, right, deltaTime * speed);
}
```

This is good to know. I presume it wouldn't be too difficult to implement some more _fluid_ player movements by  adding a velocity to the user and have them accelerate and drift around, rather than jerk around.

At the time I had trouble getting textures working as WebGL2 does things slightly differently, but I've since had more luck:

![Explosion]({{ site.baseurl }}/assets/images/explosion.png)

## [You can see the project here][project-link] and the [code for the project is online here](https://github.com/joshmurr/webgl_environment_test).

[project-link]: https://webgl-3d-space-experiment.now.sh/
