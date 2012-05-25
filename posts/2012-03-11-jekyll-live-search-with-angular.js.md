--
Title: Jekyll Live Search with AngularJS
Description: Ever wanted a search page on Jekyll/Github Pages? This is a Live Search with AngularJS for Jekyll
Date: 03.11.12
Keywords: Jekyll,Angular.js,Live,Search
--

**Background:**

I wanted users hitting my static [Jekyll](http://jekyllrb.com/) site's [404 page](http://edwardhotchkiss.com/404.html) to be able to live search. As you type, blog pages related to your query should show up in real-time. Since Jekyll is static, I use [AngularJS](http://angularjs.org) on the client-side.

**Why AngularJS?**

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

<script type="text/javascript" src="http://code.angularjs.org/1.0.0rc2/angular-1.0.0rc2.min.js"></script>

{% endhighlight %}

**Search & Templating HTML:**

{% highlight html %}

<div id="search-container" class="entrance" ng-app="JekyllApp" ng-controller="JekyllSearchController">
  <div class="entrance-item">
    <h2>Error 404, Engineer Gone Rogue!</h2>
    <p><input id="searchText" type="search" placeholder="Live Search Posts..." ng-model-instant ng-model="searchText" /> 
    or <a href="mailto:edwardhotchkiss@me.com">Email Me</a></p>
  </div>
  <div class="entrance-item">
    <h2>Blog Posts</h2>
    <ul>
      <li ng-repeat="post in posts | filter:searchText">
        - <span ng-bind-html="post.date | highlight:filterBy"></span> &raquo; 
        <a href="{{ site.leftCurleys }} post.url {{ site.rightCurleys }}" ng-bind-html="post.title | highlight:searchText"></a>
      </li>
    </ul>
  </div>
</div>

{% endhighlight %}

**CSS:**

{% highlight css %}

#searchText {
  line-height:22px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) inset;
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) inset;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) inset;
  border: 1px solid #ccc;
  color: #999;
  padding: 6px 15px 6px 15px;
  -webkit-border-radius:15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  margin-right: 15px;
}

.match {
  background-color: #f9ffa1;
  -webkit-animation-name: pop;
  -webkit-animation-duration: 0.3s;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-timing-function: ease-in-out;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;    
}

{% endhighlight %}

**AngularJS Controller & Parser:**

{% highlight javascript %}


/**
 * Setup Module with `highlight` filter
 */

var JekyllApp = angular.module('JekyllApp', [], function($routeProvider) {
});

JekyllApp.filter('highlight', function() {
  return function(text, filter) {
    if (filter === undefined) {
      return text;
    } else {
      return text.replace(new RegExp(filter, 'gi'), '<span class="match">$&</span>');
    };
  };
});

/**
 * Inject $http Object into our Controller
 */
  
JekyllSearchController.$inject = ['$scope', '$http'];

function JekyllSearchController($scope, $http) {
  var posts = $scope.posts = [];
  $http.get('/feed.xml').success(function(response) {
    var feed = angular.element(response);
    var entries = feed.children('entries');
    angular.forEach(entries, function(entry) {
      var children = angular.element(entry).children();
      if (children.length === 5) {
        posts.push({
          title : children[0].innerHTML,
          url   : children[1].href,
          date  : children[2].innerHTML
        });
      };
    });
  }).error(function() {
    console.error('xhr issue retreiving your feed!')
  });
};

{% endhighlight %}

**UPDATE 3-28-12 Igor Speaks!:**

I received some comments from [Igor Minar](https://twitter.com/#!/igorminar) and it seems that the declarative XML style ng:whatever is now wholely substituted with ng-whatever. Thanks Igor and also for the note that it's **AngularJS** and ***not*** Angular.js. All the .js projects have their own convention, and it gets quite confusing.

**UPDATE 3-11-12 (Later that night!):**

I got a great email from [Boris Bokowski](https://twitter.com/bokowski) who linked me to a fiddle that ***"I might find interesting"***. Interesting indeed. So I updated the demo here on my site and this article -- to include a highlight filter & a proper Angular 0.10.x Module. Thanks again Boris.

There it is, sexy as hell! As always, any questions just [Email Me](mailto:edwardhotchkiss@me.com).

