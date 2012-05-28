--
Title: 5 Ways to export the same Node.js module
Description: 5 Ways to export the same Node.js module
Date: 03.15.12
Keywords: Module,Node.js,Export,module.exports
--

When I look through the code of some of my first [Node.JS](http://nodejs.org/) modules that I wrote I look at the different ways that I handled their class structure and export. It's all eye-candy to me, but pick your favorite, or `.apply()` as argumented.

This module is called **"dude"**, and all it does is one thing (for brevity) via a public method named **"say"**.

**Usage.js**

<script src="https://gist.github.com/2785519.js?file=1.js"></script>

**Method #1:**

<script src="https://gist.github.com/2785519.js?file=2.js"></script>

**Method #2:**

<script src="https://gist.github.com/2785519.js?file=2_.js"></script>

**Method #3:**

<script src="https://gist.github.com/2785519.js?file=3.js"></script>

**Method #4:**

<script src="https://gist.github.com/2785519.js?file=4.js"></script>

**Method #5:**

<script src="https://gist.github.com/2785519.js?file=5.js"></script>

Use on a case by case basis.
