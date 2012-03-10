---
layout: post
title: Jekyll Live Search with Angular.js
description: Ever wanted a search page on Jekyll/Github Pages? This is a Live Search with Angular.js for Jekyll
tags:
 - Jekyll
 - Angular.js
 - Live
 - Search
---

**Background:**

I wanted users hitting my static [Jekyll](http://jekyllrb.com/) site's [404 page](http://edwardhotchkiss.com/404.html) to be able to live search. As you type, blog pages related to your query should show up in real-time. Since Jekyll is static, I use [Angular.js](http://angularjs.org) on the client-side.

**Why Angular.js?**

Forget [Backbone.js](http://documentcloud.github.com/backbone/), [Knockout.js](http://knockoutjs.com/) and [Spine](https://github.com/maccman/spine). Try Angular and then note the resulting LOC. Spend that extra time at the bar. Buy me a beer while you're there.

I set Angular to bind an XHR resource to a filter (in this case, a text input). Upon load, the GET request fires, then pulls my [RSS Feed](/feed.xml), parsing the XMLDocument and placing it in the scope of my controller as an object called "posts". "posts" is rendered into my HTML via a templating system which attaches models via the Controller to the my Template once it is available.

As the user types, the "Posts" object is filtered and applied to the template. You can check it out here: [http://edwardhotchkiss.com/404.html](http://edwardhotchkiss.com/404.html).

First we need to be able to allow double curly brackets in our templates, since Liquid strips these out interpreting them as Liquid Tags. We need to edit config.yml to fix this.

**_config.yml:**

{% highlight html %}

leftCurleys: "{{ site.leftCurleys }}"
rightCurleys: "{{ site.rightCurleys }}"

{% endhighlight %}

**RSS Feed:**

Probably the easiest is to just grab this repo, it's there as "feed.xml"

{% highlight bash %}

$ git@github.com:edwardhotchkiss/edwardhotchkiss.github.com.git

{% endhighlight %}

**Link to Angular 0.10.6:**

{% highlight html %}

<script type="text/javascript" src="http://code.angularjs.org/0.10.6/angular-0.10.6.min.js"></script>

{% endhighlight %}

**Search & Templating HTML:**

{% highlight html %}

<div id="search-container" class="entrance" ng:app>
  <div ng:controller="JekyllSearchController">
    <div class="entrance-item">
      <h2>Error 404, Engineer Gone Rogue!</h2>
      <p><input placeholder="Live Search Posts..." ng:model="searchText" /> 
      or <a href="mailto:edwardhotchkiss@me.com">Email Me</a></p>
    </div>
    <div class="entrance-item">
      <h2>Blog Posts</h2>
      <ul ng:repeat="post in posts | filter:searchText">
        <li>
          - <span>{{ site.leftCurleys }} post.date {{ site.rightCurleys }}</span> &raquo; 
          <a href="{{ site.leftCurleys }} post.url {{ site.rightCurleys }}">{{ site.leftCurleys }} post.title {{ site.rightCurleys }}</a>
        </li>
      </ul>
    </div>
  </div>
</div>

{% endhighlight %}

**Angular.js Controller & Parser:**

{% highlight javascript %}

/**
 * Inject $http Object into our Controller
 */
  
JekyllSearchController.$inject = ['$http'];

/**
 * Controls our Search Filter & View
 */

function JekyllSearchController($http) {
  var scope = this;
  var posts = [];
  var params = { method : 'GET', url : '/feed.xml' };
  /**
   * GET our XML Feed
   */
  $http(params).success(function(response, statusCode) {
    var feed = angular.element(response);
    var entries = feed.children('entries');
    /**
     * Map through RSS/XML Document.
     * Pull out <entry />'s, parse into posts [] objects
     */
    angular.forEach(entries, function(entry) {
      if (angular.element(entry).children().length === 5) {
        var _children = angular.element(entry).children();
        var title = _children[0].innerHTML;
        var url = _children[1].href;
        var date = _children[2].innerHTML;
        var post = { title : title, url : url, date : date };
        posts.push(post);
      };
    });
    /**
     * Posts are ready, bind to Scope/View
     */
    scope.posts = posts;
  }).error(function(response, statusCode) {
    scope.posts = null;
    console.error('xhr issue retreiving your feed!')
  });
};

/* EOF */

{% endhighlight %}

There it is, sexy as hell! As always, any questions just [Email Me](mailto:edwardhotchkiss@me.com).

