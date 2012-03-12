---
layout: post
title: JavaScript jQuery Image Preloader with Animations
description: Since many have tried and many have ... not tried. Introducing A JavaScript jQuery Image Preloader with Animations.
tags:
 - jQuery
 - Preloader
 - Image
---

When I started migrating from pure Flash (ActionScript 3.0) based sites to HTML markup with CSS3 & jQuery; I wanted a really sexy preloader. I found one. One single JavaScript preloader.

Addicted to sex, I wanted something hotter. Here's what I built... 

***End of your HEAD:***

{% highlight html %}

<script type="text/javascript" src="preloader.js"></script>

{% endhighlight %}

***End of your BODY:***

{% highlight javascript %}

$.Preloader({
  barColor     : '#f57b50',
  overlayColor : '#8e4d6b',
  barHeight    : '10px',
  siteHolder   : '#container' 
});

{% endhighlight %}

**Live Demo setup by Jaydson Gomes:**

[http://jaydson.org/code/jquery/plugins/jquery-preloader/](http://jaydson.org/code/jquery/plugins/jquery-preloader/)

**Source Code with Usage & Demos:**

[https://github.com/edwardhotchkiss/jquery-preloader/](https://github.com/edwardhotchkiss/jquery-preloader)