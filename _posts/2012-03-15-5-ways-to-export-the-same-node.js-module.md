---
layout: post
title: 5 Ways to export the same Node.js module
description: 5 Ways to export the same Node.js module
tags:
 - Node.js
 - Module
---

When I look through the code of some of my first ***Node.JS*** modules that I wrote I look at the different ways that I handled their class structure and export. It's all eye-candy to me, but pick your favorite, or .apply() as argumented.

This module is called "dude", and all it does is one thing (for brevity): console.log('%s').

**Usage.js**

{% highlight javascript %}

var dude = require('./dude');

dude.say('hey bro.');

{% endhighlight %}

**Method #1:**

{% highlight javascript %}

var dude = module.exports = function(){};

dude.say = function(message) {
  console.log(message);
};

{% endhighlight %}

**Method #2:**

{% highlight javascript %}

var dude = module.exports = {
  say : function(message) {
    console.log(message);
  }
};

{% endhighlight %}

**Method #3:**

{% highlight javascript %}

exports.say = function(message) {
  console.log(message);
};

{% endhighlight %}

**Method #4:**

{% highlight javascript %}

module.exports = Object.create({
  say : function(message) {
    console.log(message);
  }
});

{% endhighlight %}

**Usage for #5 (using {params}):**

{% highlight javascript %}

var dude = new require('./dude')(/* params? */);

dude.say('hey bro.');

{% endhighlight %}

**Method #5:**

{% highlight javascript %}

module.exports = function(params) {
  return {
    say : function(message) {
      console.log(message);
    }
  }
}

{% endhighlight %}

Use on a case by case basis.
