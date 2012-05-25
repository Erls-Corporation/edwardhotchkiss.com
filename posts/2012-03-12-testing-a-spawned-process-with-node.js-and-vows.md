--
Title: Testing a Spawned Process with Node.JS and Vows
Description: Testing a Spawned Process with Node.JS and Vows
Date: 03.12.12
Keywords: Test,Node.JS,Vows,Search
--

If you're [Node.JS](http://nodejs.org/) projects index file is "app.js", and you are running your tests via "npm test" or "make test" looking to test a live project, then this works nicely.

**Example Directory Structure:**

| -- app.js
| -- Makefile
| -- test/
| -- | -- index.test.js

**./test/index.test.js:**

<script src="https://gist.github.com/2785548.js?file=test_spawn.js"></script>
