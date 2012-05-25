--
Title: Learning AngularJS 1.0.0, part 1 of 10 - Introduction to 1.0.0
Description: Learning AngularJS 1.0.0, part 1 of 10 - Introduction to 1.0.0
Date: 03.28.12
Keywords: AngularJS,Learning,Tutorial,RC2,MVC
--

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

**NPM:**

<script src="https://gist.github.com/2785484.js?file=start.sh"></script>

**Getting started the boring way**

If you want to manually grab these starting files, head over to [node-angular](https://github.com/edwardhotchkiss/node-angular/tree/master/lib/node-angular/templates) and just git clone then keep those files handy.

**Features of this trivial app**

The application is taking advantage of HTML5 pushState, and while we're hitting /welcome versus /#/welcome, [Express](http://expressjs.com/) is actually rendering our index.html view with Angular calling the appropriate partial based on our path (/welcome). The 1.0.0 **$routeProvider** takes care of this. While we're being shown /welcome vs. / this is because I set my default route to /welcome with $routeProvider.otherwise({ redirectTo : '/welcome' });

**Node - /app/controllers/welcome.js**

<script src="https://gist.github.com/2785484.js?file=welcome.js"></script>

**Angular - /public/javascripts/app.js**

<script src="https://gist.github.com/2785484.js?file=app.js"></script>

If **Angular** doesn't detect HTML5 / pushState capabilities, it will fall back to hashes, which is why I set my hash prefix to an empty string.

**Angular 1.0.0 Controllers and $scope**

Angular controllers from 0.10.6 to 1.0.0 went from the classic JavaScript context referencing

<script src="https://gist.github.com/2785484.js?file=old_context.js"></script>

to the **Angular Way** of injecting a scope or reference value

<script src="https://gist.github.com/2785484.js?file=new_context.js"></script>

If I need access to a Service, an Angular provider etc, then I inject scope into my controller along with my required providers:

<script src="https://gist.github.com/2785484.js?file=inject.js"></script>

**ng-app and our main view layout**

In Angular 1.0.0 ng:autobind was removed and your angular script is referenced in a "normal" script tag fashion. In our layout we have a top level element with the ng-app attribute referencing our app, aptly titled "app". I have an <ng-view></ng-view> where my partials are loaded and controllers applied within that context.

One of the huge API changes is no longer using mustache style model values directly in our HTML elements if we are using a | filter. Instead we're using the attribute ng-bind-template="my-model-var | filter:filter" to apply, (see below).

**Example**

<script src="https://gist.github.com/2785484.js?file=bind.html"></script>

Here's our main layout:

**/public.index.html**

<script src="https://gist.github.com/2785484.js?file=public.index.html"></script>

**This is our view partial**:

**/public/partials/welcome.html**

<script src="https://gist.github.com/2785484.js?file=welcome2.html"></script>

**Further Resources:**

  * [AngularJS Docs - Latest](http://docs-next.angularjs.org/api)
  * [AngularJS Fiddles](https://github.com/angular/angular.js/wiki/JsFiddle-Examples)
  * [New Project Angular-UI](http://github.com/angular-ui)


**Check back tomorrow for part 2, "Rendering views retrieved from a Service".**


**UPDATE 3-28-12 Igor Speaks!:**

I received some comments from [Igor Minar](https://twitter.com/#!/igorminar) and it seems that the declarative XML style ng:whatever is now wholely substituted with ng-whatever. Thanks Igor and also for the note that it's **AngularJS** and ***not*** Angular.js. All the .js projects have their own convention, and it gets quite confusing.



