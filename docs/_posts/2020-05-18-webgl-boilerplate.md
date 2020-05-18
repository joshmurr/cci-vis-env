---
layout: post
title:  "WebGL Boilerplate"
date:   2020-05-18 09:04:39 +0000
categories: webgl
---
The first milestone (if I can call it that) is really getting my head round WebGL. Writing WebGL code is just about learning the API and knowing when and how to make the right API calls. Getting things in the right order and not making unnecessary calls (`drawXXX()` calls in particular) are vital in making an application which runs smoothly and _quickly_. Speed is the name of the game with this project as I need to get things optimized pretty early on in order to get many particles flying around the screen later down the line.

I have already spent a lot of time sifting through over other peoples lightweight WebGL libraries trying to understand how other people structure WebGL apps. Some great resources are:

- [TWGL][1]
- [Igloo][2]
- [Alfrid][3]
- [ThreeJS (of course)][4]

[TWGL][1] (or _Tiny WebGL_) was created by the infamous [gman](https://stackoverflow.com/users/128511/gman) who also created [WebGL Fundamentals](https://webglfundamentals.org/), [WebGL2 Fundamentals](https://webgl2fundamentals.org/), [ThreeJS Fundamentals](https://threejsfundamentals.org/) and load of other great resources. [WebGL2 Fundamentals](https://webgl2fundamentals.org/) has been my go-to place for info. His video below is packed with great advice on how to get WebGL running efficiently:

<iframe width="560" height="315" src="https://www.youtube.com/embed/rfQ8rKGTVlg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## [GL_BL (WebGL Boilerplate)][GL_BP]

[GL_BP][GL_BP] is my attempt at a tiny WebGL library to take care of a lot of the setup code required to get a WebGL app going. It's common knowledge that just to draw a square on the screen (the `hello world` program) takes somewhere between 60-100 lines of code. A lot of that code is just getting everything in place to allow WebGL to do it's thing with it's friend _the GPU_. Geometry needs to be in the right types of buffers and WebGL needs to know exactly where these buffers are. Shader programs need to be correctly uploaded in the right format and linked, and WebGL needs to know all the attributes and uniforms _in_ the shader programs, and where this information is in the geometry buffers. And then you need to be specific about how all these things are being drawn in your `draw()` call. The `draw()` call is the most important, but also the most taxing part of the program so you need to be very particular about what computations and function calls are happening here.

[GL_BP][GL_BP] is by no means perfect, and the more time I spend with it the more I question it's inner structure. But for now it is at a point where it does take care of a lot of the WebGL setup and has made my life easier to get experiments off the ground - which is the point after all.

Here is an experiment inspired by [Null Program][100000 Link] where I have 100,000 vertices rendered as `gl.POINTS` on the unit sphere, rotating around a unit cube. This is a GIF and so is jerky, but the real app is smooth:

![100000 Points on Unit Sphere][100000 Points]

Here is a similar example, but with an Icosahedron with coloured vertices inside 1000 points:

![1000 Points on a Unit Icosahedron][1000 Points with Icosahedron]

And finally, here is the biggest achievement of the week: Game of Life running on the GPU! :tada:

![Game of Life on the GPU][GOLGPU]

This was again inspired by [Null Program][GOL Link].

<!-- Links  -->
[1]: http://twgljs.org/
[2]: https://github.com/skeeto/igloojs
[3]: https://github.com/yiwenl/Alfrid
[4]: http://threejs.org/
[GL_BP]: https://github.com/joshmurr/webgl_boilerplate
[100000 Link]: https://nullprogram.com/blog/2013/06/10/
[GOL Link]: https://nullprogram.com/blog/2014/06/10/

<!-- Images -->
[1000 Points with Icosahedron]: ../../../../images/GL_BP/1000points.gif
[100000 Points]: ../../../../images/GL_BP/100000points.gif
[GOLGPU]: ../../../../images/GL_BP/gol.gif
