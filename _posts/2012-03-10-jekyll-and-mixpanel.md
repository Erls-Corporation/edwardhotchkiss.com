---
layout: post
title: Jekyll and MixPanel
description: After getting rid of Google Analytics -- it was time for MixPanel
tags:
 - Jekyll
 - Mixpanel
 - Production
 - Environment
---

After getting rid of [Google Analytics](http://google.com/analytics) -- it was time for [MixPanel](http://mixpanel.com/). It's a pretty tight event driven Analytics tool which let's you bind tracking events to their API with a high level syntax.

As Google is a dinosaur, and dinosaurs (along with disgusting UI & Design) should be extinct, let's roll.

**This is how MixPanel generally works:**

{% highlight javascript %}

mpq.track('EventName', { some : 'data' });

{% endhighlight %}

Since [Jekyll](http://jekyllrb.com/) _posts are being edited (and sometimes viewed, proofed) locally, an obvious way to use MixPanel would be to wrap it's tracking events with a test for being in production (yourhost.com) or localhost. 

I'd like to eventually add in some more JS into the site so I'll wrap it in an Object called "jekyll" Drop this script within your default layout below the MixPanel API code.

{% highlight javascript %}

/**
 * Create Jekyll Object, with mpq wrapper
 */

var jekyll = Object.create({
  mpq : {
    track : function(eventName, properties, callback) {
      properties = properties || {};
      callback = callback || function(){};
      if (!/localhost/.test(document.location.hostname)) {
        mpq.track(eventName, properties, callback);
      };
    }
  }
});

/**
 * Track Event "Post Some-Post"
 */

jekyll.mpq.track('EventName', { some : 'data' });

/* EOF*/

{% endhighlight %}

**Wrapping up**

Feel free to add the other MixPanel objects such as .register to the script. Since this is just a "blog aware static site generator"; I'll stick with track.

**Source Code via Gist:**

[https://gist.github.com/2012162](https://gist.github.com/2012162)
