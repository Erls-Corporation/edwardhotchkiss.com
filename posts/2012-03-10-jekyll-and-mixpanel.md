--
Title: Jekyll and MixPanel
Description: After getting rid of Google Analytics -- it was time for MixPanel
Date: 03.10.12
Keywords: Jekyll,Mixpanel,Production,Environment
--

After getting rid of [Google Analytics](http://google.com/analytics) -- it was time for [MixPanel](http://mixpanel.com/). It's a pretty tight event driven Analytics tool which let's you bind tracking events to their API with a high level syntax.

As Google is a dinosaur, and dinosaurs (along with disgusting UI & Design) should be extinct, let's roll.

**This is how MixPanel generally works:**

<script src="https://gist.github.com/2785472.js?file=normal.js"></script>

Since [Jekyll](http://jekyllrb.com/) _posts are being edited (and sometimes viewed, proofed) locally, an obvious way to use MixPanel would be to wrap it's tracking events with a test for being in production (yourhost.com) or localhost. 

I'd like to eventually add in some more JS into the site so I'll wrap it in an Object called "jekyll" Drop this script within your default layout below the MixPanel API code.

<script src="https://gist.github.com/2012162.js?file=Jekyll-and-MixPanel.js"></script>

**Wrapping up**

Feel free to add the other MixPanel objects such as .register to the script. Since this is just a "blog aware static site generator"; I'll stick with track.

**Source Code via Gist:**

[https://gist.github.com/2012162](https://gist.github.com/2012162)
