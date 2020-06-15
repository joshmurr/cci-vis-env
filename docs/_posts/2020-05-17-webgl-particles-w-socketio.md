---
layout: post
title:  "Postmortem: WebGL Particle Systems with Socket.IO"
date:   2020-05-17 09:04:39 +0000
categories: webgl socketio
---

![WebGL Particles]({{ site.baseurl }}/assets/images/webgl-particles-socketio.png)

## [The finished web application is still online and can be seen here.][glitch]

The reason why this is  a _postmortem_ is because this as a project was essentially a failure and I think I now know why.

First of all this was a pretty direct implementation of [this tutorial][gpufault] which has been my main _go to_ for an example of _transform feedback_. The particle system involves two buffers and 4 [vertex array objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGLVertexArrayObject) which are swapped over and read/written to to allow for the transform feedback. 

My attempt to turn this into a multiple-user-experience was to create a new particle system for each user that joins, as you would add a new geometry. However each particle system as a whole asset involves 2 `draw()` calls (which are costly) and a number of other _GL_ API calls. In general to improve performance in a WebGL application the fewer API calls the better - you batch data into buffers, minimize draw calls etc.

I knew at the time that it wasn't best practice to simply create a new particle system and essentially dupilicate the whole program for every user joined, and it _does_ work for up to 3 people. However any amount of people beyond that and the whole thing grinds to a halt and I think the front-end app gets completely out of sync with the _Socket.IO_ backend, data gets lost, new errors appear and so on..

So if nothing else this was useful proof of how _not_ to create a WebGL app. The code [is still online here](https://github.com/joshmurr/webgl-particles-socketio) and you can see the project hosted on Glitch [here][glitch].

<!---->
[glitch]: https://joshmurr-webgl-particles-socketio.glitch.me/
[gpufault]: https://gpfault.net/posts/webgl2-particles.txt.html
