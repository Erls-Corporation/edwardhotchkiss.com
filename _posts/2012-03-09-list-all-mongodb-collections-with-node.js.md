---
layout: post
title: List all MongoDB Collections with Node.JS
description: List all MongoDB Collections with Node.JS
tags:
 - MongoDB
 - Node.JS
 - Mongoose
 - Collections
---

We (the privileged, hah) all know and love [MongoHQ](http://mongohq.com/) -- with it's slick interface, it's nice web-based app and it's alliance with [Heroku](http://heroku.com/).

But sometimes you need to get a list of user-available collections from a MongoDB instance without MongoHQ. The process starts with exposing the MongoDB-Native Object from within [MongooseJS](http://mongoosejs.com/):

{% highlight javascript %}

var mongoose = require('mongoose')
  , dbNative = mongoose.connection.db;

console.log(dbNative);

{% endhighlight %}

**Install MongooseJS**

{% highlight bash %}

$ npm install mongoose

{% endhighlight %}

***Save it:***

{% highlight javascript %}

/**
 * Uses MongooseJS to Connect to MongoDB
 * .Maps out all collections within
 */

var mongoose = require('mongoose')
  , MONGO_DB = 'mongodb://localhost/test';

mongoose.connect(MONGO_DB);

mongoose.connection.on('open', function(){
  mongoose.connection.db.collectionNames(function(error, names) {
    if (error) {
      throw new Error(error);
    } else {
      names.map(function(name) {
        console.log('found collection %s', name);
      });
    }
  });
});

mongoose.connection.on('error', function(error){
  throw new Error(error);
});

/* EOF */

{% endhighlight %}

**Run it:**

{% highlight bash %}

$ node script.js

{% endhighlight %}

**Gist:**

[https://gist.github.com/1522555/](https://gist.github.com/1522555)