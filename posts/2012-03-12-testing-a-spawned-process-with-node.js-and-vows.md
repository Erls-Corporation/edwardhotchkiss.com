---
layout: post
title: Testing a Spawned Process with Node.JS and Vows
description: Testing a Spawned Process with Node.JS and Vows
tags:
 - Test
 - Node.JS
 - Vows
 - Search
---

If you're [Node.JS](http://nodejs.org/) projects index file is "app.js", and you are running your tests via "npm test" or "make test" looking to test a live project, then this works nicely.

**Example Directory Structure:**

| -- app.js  
| -- Makefile  
| -- test/  
| -- | -- index.test.js

**./test/index.test.js:**

{% highlight javascript %}

var child
  , stdout = ''
  , stderr = ''
  , exitCode = 0
  , vows = require('vows')
  , path = require('path')
  , assert = require('assert')
  , request = require('request')
  , spawn = require('child_process').spawn;

vows.describe('general http tests').addBatch({
  'index page "/"': {
    topic: function() {
      var self = this
        , args = [path.join(__dirname, '/../', 'app.js')]
      child = spawn('node', args)
      child.stdout.on('data', function(data){
        stdout += data;
      });
      child.stderr.on('data', function(data){
        stderr += data;
      });
      child.on('exit', function(code){
        exitCode = code;
      });
      setTimeout(function() {
        request('http://localhost:8000/', self.callback);
      }, 1000);
    },
    'should have no errors':function(error, response, body){
      child.kill('SIGHUP');
      assert.isNull(error);
    },
    'with a response code of 200':function(error, response, body){
      assert.equal(response.statusCode, 200);
    },
    'the body should be html':function(error, response, body){
      assert.equal(/html/m.test(body), true);
    },
    'with an exit code of 0':function(error, response, body){
      assert.equal(exitCode, 0);
    },
    'an empty stderr':function(error, response, body){
      assert.equal(stderr.length, 0);
    }
  }
}).export(module);

/* EOF */

{% endhighlight %}


