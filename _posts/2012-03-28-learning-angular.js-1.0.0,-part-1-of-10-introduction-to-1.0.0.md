---
layout: post
title: Learning AngularJS 1.0.0, part 1 of 10 - Introduction to 1.0.0
description: Learning AngularJS 1.0.0, part 1 of 10 - Introduction to 1.0.0
tags:
 - AngularJS
 - Learning
 - tutorial
 - rc2
 - MVC
---

**Ranked #4 on Google search for AngularJS?**

I was going over my [MixPanel](http://mixpanel.com/) analytics, and kept seeing a shitload of traffic coming in from [searching google for angular.js](www.google.com/search?q=angular.js). I'm ranked #4 with my [Jekyll Live Search with AngularJS](http://edwardhotchkiss.com/blog/2012/03/11/jekyll-live-search-with-angular.js/) so I feel obligated to take this from _drafts to _posts, and finish it.

**Part 1:**

Part 1 has one purpose. To show you some of the 1.0.0 breaking API changes, and to get you started with a proper directory structure and a trivial app which will let you expand upon (solo, or as we go along to more advanced posts this week) and build a non-trivial Web app.

**Getting Real**

If you're not using **AngularJS** and you're either crafting from hand with [jQuery](http://jquery.org) or using one of the [fads](http://backbonejs.com) [that](http://knockoutjs.com/) [kicked](https://github.com/maccman/spine/) [off](http://sammyjs.org/) the Client-side Routing and MVC changeup, it's time to get real, and work even faster. 

> This is the true story... of seven strangers... picked to live in a house...work together and have their lives taped... to find out what happens... when people stop being polite... and start getting real...

> -- The Real World.

Before [37 Signals got real](http://gettingreal.37signals.com/), There was "The Real World". Yeah, I know; Awesome.

**Angular current - 1.0.0 RC2**

I've spoken with a lot of developers that didn't go with Angular, because they said that the API was too fast in flux and that the docs weren't that great. They moved on, and passed it by. This is unfortunate. **Angular** is currently on 1.0.0 RC2 (**finally**) with the core team telling me to expect about one RC per week until we are at a release. The API changes are **not breaking** anymore and if there ever was a time to seize the day, it's now.

**Getting started today the fast way**

I've started working on a project to scaffold [Node.JS](http://nodejs.org) backend routes over [MongoDB](http://mongodb.org) using **Angular** views/controller/services. I know right, why not scaffold the fastest client-side development framework ever written? Right now, you can use my [CLI Node.js Module](http://search.npmjs.org/#/angular) to automatically generate a new Node.js and Angular project, with **HTML5 Routing**, the new **$routeProvider** and **module** structure already setup. So keep an eye on the project & hold up for scaffolding, as the project is pretty new (a few days).

{% highlight bash %}

$ sudo npm install angular -g
$ angular new myapp && cd myapp
$ npm install
$ angular server 8080
$ open "http://localhost:8080"

{% endhighlight %}

**Getting started the boring way**

If you want to manually grab these starting files, head over to [node-angular](https://github.com/edwardhotchkiss/node-angular/tree/master/lib/node-angular/templates) and just git clone then keep those files handy.

**Features of this trivial app**

The application is taking advantage of HTML5 pushState, and while we're hitting /welcome versus /#/welcome, [Express](http://expressjs.com/) is actually rendering our index.html view with Angular calling the appropriate partial based on our path (/welcome). The 1.0.0 **$routeProvider** takes care of this. While we're being shown /welcome vs. / this is because I set my default route to /welcome with $routeProvider.otherwise({ redirectTo : '/welcome' });

**Node - /app/controllers/welcome.js**

{% highlight javascript %}

/**
 * @route /welcome
 */

var path = require('path');

module.exports = function(app) {

  app.get('/welcome', function(request, response) {
  	var html = path.normalize(__dirname + '/../../public/index.html');
    response.sendfile(html);
  });

};

{% endhighlight %}

**Angular - /public/javascripts/app.js**

{% highlight javascript %}

var app = angular.module('app', [], function($routeProvider) {

  $routeProvider.when('/welcome', {
    template   : 'partials/welcome.html',
    controller : WelcomeController  
  });
  $routeProvider.otherwise({ 
    redirectTo : '/welcome'
  });

});

app.config(function($locationProvider) {  
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
});

{% endhighlight %}

If **Angular** doesn't detect HTML5 / pushState capabilities, it will fall back to hashes, which is why I set my hash prefix to an empty string.

**Angular 1.0.0 Controllers and $scope**

Angular controllers from 0.10.6 to 1.0.0 went from the classic JavaScript context referencing

{% highlight javascript %}

function Controller() {
	var scope = this;
	var context = this;
	var self = this;
}

{% endhighlight %}

to the **Angular Way** of injecting a scope or reference value

{% highlight javascript %}

/**
 * controllers
 */

function WelcomeController($scope) {
  $scope.pageHeader = 'v0.0.1';
};

{% endhighlight %}

If I need access to a Service, an Angular provider etc, then I inject scope into my controller along with my required providers:

{% highlight javascript %}

/**
 * controllers
 */

WelcomeController.$inject = ['$scope', '$location'];

function WelcomeController($scope, $location) {
  $scope.pageHeader = 'v0.0.1';
};

{% endhighlight %}

**ng-app and our main view layout**

In Angular 1.0.0 ng:autobind was removed and your angular script is referenced in a "normal" script tag fashion. In our layout we have a top level element with the ng-app attribute referencing our app, aptly titled "app". I have an <ng-view></ng-view> where my partials are loaded and controllers applied within that context.

One of the huge API changes is no longer using mustache style model values directly in our HTML elements if we are using a | filter. Instead we're using the attribute ng-bind-template="my-model-var | filter:filter" to apply, (see below).

**Example**

{% highlight html %}

<p ng-bind-html="item.content | highlight:filterBy"></p>

{% endhighlight %}

Here's our main layout:

**/public.index.html**

{% highlight html %}

<!DOCTYPE html>
<html xmlns:ng="http://angularjs.org" lang="en" ng-app="app" ng-init="">
  <head>
    <meta charset="utf-8">
    <title ng-bind-template="Node-Angular {{ site.leftCurleys }}pageTitle{{ site.rightCurleys }}">Node-Angular</title>
  </head>
  <body>
    <div>
      <ng-view></ng-view>
    </div>
    <script type="text/javascript" src="javascripts/vendor/angular-1.0.0rc2.min.js" ng:autobind></script>
    <script type="text/javascript" src="javascripts/app.js"></script>
  </body>
</html>

{% endhighlight %}

This is our view partial:

**/public/partials/welcome.html**

{% highlight html %}

<div class="container" ng:init="$root.pageTitle = pageHeader">
  <h1 ng-bind-html="pageHeader"></h1>
</div>

{% endhighlight %}

**Further Resources:**

  * [AngularJS Docs - Latest](http://docs-next.angularjs.org/api)
  * [AngularJS Fiddles](https://github.com/angular/angular.js/wiki/JsFiddle-Examples)
  * [New Project Angular-UI](http://github.com/angular-ui)


**Check back tomorrow for part 2, "Rendering views retrieved from a Service".**


**UPDATE 3-28-12 Igor Speaks!:**

I received some comments from [Igor Minar](https://twitter.com/#!/igorminar) and it seems that the declarative XML style ng:whatever is now wholely substituted with ng-whatever. Thanks Igor and also for the note that it's **AngularJS** and ***not*** Angular.js. All the .js projects have their own convention, and it gets quite confusing.



