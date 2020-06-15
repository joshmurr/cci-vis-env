---
layout: post
title:  "Traces - Final Outcome"
date:   2020-06-14 16:34:39 +0000
categories: webgl final-project
---

![Traces Screenshot]({{ site.baseurl }}/assets/images/traces-screenshot.png)

## [The finished web application is online and can be seen here.][traces]

The bulk of the project has been the development of _GL_BP_ which is the lightweight WebGL library which was used to make [_Traces_][traces] and all the other experiments seen on the [home page]({{ site.baseurl}}/cci-vis-env/). I have already written a fair bit about _GL_BP_ so refer back to the [project log]({{ site.baseurl }}/cci-vis-env.project_log.html) for more general information on that.

# Traces

_Traces_ is web application which invites the user to interact with a particle system with quite simple attract and repel capabilities. The users interactions appear on th e particle systems that other users can see who are also on the website at the same time, and their interactions are shown on the current users. Up to six users at a time can be looking at the same particle system sharing and witnessing the _Traces_ left by eachother.

The particles exhibit basic physical properties: they have a mass and are attracted or repelled by other massive bodies. They drift around as if underwater and the turbulence and other properties can be adjusted by the user.

Below I will walk through some of the key features in the web app. The code for the project can be found [here][traces-code]

## WebGL 2 Features

### Transform Feedback

There are some features of this project which are relatively new to the web and were introduced with WebGL 2. The first of which and is key to making the particle system: _transform feedback_.

_Transform feedback_ is a means of getting vertex data back out of the vertex shader; you basically intercept the render pipeline and divert the varyings which would normally be passed into the fragment shader and store them in a _transform feedback buffer_. This means you can write a vertex shader which simply handle calculations and then store the results in a buffer to pass into another shader program to render. Each particle has a position, velocity, age and lifespan which all get updated and then used to render them frame by frame.

### Uniform Buffer Objects

_UBOs_ allow you to pass a buffer into a shader program as a uniform. This means you can pass more data at once which in turn means you can make fewer _GL_ API calls (the fewer the better as these are the most costly in terms of performance). This was necessary in order to send the click positions of multiple users at once into the shader program.

A _UBO_ was also used to pass the updated settings from the GUI into the shader.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RmctX-AE4Tk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## User Interaction

In order to get the click position from the user a simple raycasting technique had to be used. The click position is converted from _screen space_ to _world space_ by inverting the projection and view matrices and casting the ray directly forward ([0,0,-1]) into the world. This is a common technique and [this tutorial helped me implement it](http://www.opengl-tutorial.org/miscellaneous/clicking-on-objects/picking-with-a-physics-library/).

Checks can then be made for an intersection between the ray and the sphere which all the particles are contained by. Addmittedly I can't find the exact implementation I found which was very useful, but [this implementation](http://viclw17.github.io/2018/07/16/raytracing-ray-sphere-intersection/) is pretty much identical, and besides it is a common problem and is so well written about and explained online.

The intersection point on the unit sphere is the point at which attraction or repulsion is applied to the particles and provides the basic interaction.

To be able to send this information to other users it seems counter-productive to do those calculations in the shader and then extract them somehow with transform feedback. So instead the ray-sphere-intersect calculation is done in JavaScript and if there is an intersection then the intersection point is sent to other users. Thinking about it now I'm actually performing the same heavy calculation twice which is silly, not very [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) of me. But at the time it was a performance consideration to put most of the calculations on client-side: pre-compute the intersection which requires the users projection and view matrics and then send less data back and forth. Each user currently sends a `Float32Array` of length 4 where the last value is the click type (left or middle).

The user also has a small and simple GUI on the screen which they can use to adjust the turbulence level and the strength of their attract and repel capabilites. These are only seen on the users own screen.

## Backend

[Socket.IO](https://socket.io/) was used for the serverside work and I must say I have been quite impressed by it. Web technologies generally were quite alien to me before starting this project so I don't have a lot to compare it to, but _Socket.IO_ is really easy to setup and also really easy to send data around. I have only done quite naive testing with a few users so time will tell if it can cope with more than a few users.

My [previous attempt](https://joshmurr-webgl-particles-socketio.glitch.me/) at combining _Socket.IO_ and particle systems was a [complete failure]({{site.baseurl}}/cci-vis-env/webgl/socketio/2020/05/17/webgl-particles-w-socketio.html) but I think I overcomplicated things. The [entire server code](https://github.com/joshmurr/multiple-users-one-particle-system/blob/master/server.js) for this project is only 52 lines long and as I said above the data being moved around is as minimal as possible.

_Socket.IO_ is also used to limit the number of users per page. Honestly, I don't know how this works, but just by keeping track of the number of users and calling `socket.join(< room-number++ >)` at a certain threshold.. _Socket.IO_ just does the rest.

The project is hosted on [Heroku](https://www.heroku.com/) which again I'm very impressed with. Exremely easy to link to a Github project and built with no problems so far. Better and easier than [Glitch](https://www.glitch.com/) IMHO.

## Closing Words

There isn't a huge amount more I want to talk about the project. I think I am more proud of [_GL_BP_][GLBP] than I am this specific project as I think I do enjoy just making things work.. And it is _GL_BP_ which is making [Traces][traces] work. It is also now my [second attempt][3dengine] at making a JavaScript library (during the Corona lockdown) and I think my ability to create a functional library has improved.

I have learnt __a lot__ about web development in the past 2 months, which was always my intention. Web development is an industry within the world of programming which is the fastest moving of all, so there is always more to learn, but I have caught up to a point now where at least I understand basic web workflows: JavaScript compilation and ES6 syntax, some modern CSS techniques and how to work with NPM and packages.

I just had a simple interaction with my partner who is the other side of London via [Traces][traces] and it was quite nice mutually interacting with eachother through this abstract form. I think there is definitely potential to develop these concepts further and I'm really happy I have spent as much time as I have learning the depths of WebGL. There is a lot more to learn, but what I know already is enough to make very fast, efficient and sometimes beautiful web applications; all of these things are vital to create more sublime interactions online... _IMHO_.

<!---->
[traces]: https://traces-cci.herokuapp.com/ 
[traces-code]: https://www.github.com/joshmurr/multiple-users-one-particle-system/
[GLBP]: https://www.github.com/joshmurr/webgl_boilerplate/
[3dengine]: https://www.github.com/joshmurr/js_3d_engine/

