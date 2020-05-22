---
layout: post
title:  "Project Proposal Slides"
date:   2020-04-27 09:30:39 +0000
categories: slides
---

{% assign slides = site.static_files | where: "proposal", true %}

{% for slide in slides %}
![{{ slide }}]({{ site.baseurl }}/{{ slide.path | escape }})
{% endfor %}
