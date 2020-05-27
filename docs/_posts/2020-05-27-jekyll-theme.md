---
layout: post
title:  "This Jekyll Theme"
date:   2020-05-27 15:34:39 +0000
categories: web-dev
---

All this WebGL stuff needs to live on the internet eventually, and my web development skills leave a lot to be desired. So that is what this Github Pages site is all about; it's a place for me to flex some basic web development skills. [Jekyll](https://jekyllrb.com/) is a great CMS and combined with Github does allow you get some simple web app up and running pretty quickly.

The [home page]({{ site.baseurl }}/) has been a great test bed in CSS layouts (it's kind of responsive!) and also getting these WebGL experiments viewable.

It's all an ongoing process, and of course the code is online [here](https://github.com/joshmurr/cci-vis-env).

Getting things exposes all the bugs you never knew you had. I've already found many of the WebGL experiments look crap on Chrome but I'm not quite sure why yet. I've also learnt something about blending and [premultiplied alpha](https://limnu.com/webgl-blending-youre-probably-wrong/), which _I think_ is the reason why you can see the ghostly imprint of whatever is behind the WebGL canvas:

![Alpha Blending Error]({{ site.baseurl }}/assets/images/alpha_blending.png)

For now, I used my new CSS knowledge to add a _warning_ banner if the user (you) are _not_ using Firefox. It's a cop-out, but it is temporary I hope.

![Not Firefox Banner]({{ site.baseurl }}/assets/images/not_firefox.png)

_PS. The content of the warning banner, the stuff about using new WebGL 2.0 features, may or may not be true. Everything does look better in Firefox though._

