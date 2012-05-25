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

<script src="https://gist.github.com/2785568.js?file=config.yml"></script>

**RSS Feed:**

Probably the easiest is to just grab this repo, it's there as "feed.xml"

<script src="https://gist.github.com/2785568.js?file=clone.sh"></script>

**Link to Angular 0.10.6:**

<script src="https://gist.github.com/2785568.js?file=link_to.html"></script>

**Search & Templating HTML:**

<script src="https://gist.github.com/2785568.js?file=search_html.html"></script>

**CSS:**

<script src="https://gist.github.com/2785568.js?file=style.css"></script>

**AngularJS Controller & Parser:**

<script src="https://gist.github.com/2785568.js?file=angular_app.js"></script>

**UPDATE 3-28-12 Igor Speaks!:**

I received some comments from [Igor Minar](https://twitter.com/#!/igorminar) and it seems that the declarative XML style ng:whatever is now wholely substituted with ng-whatever. Thanks Igor and also for the note that it's **AngularJS** and ***not*** Angular.js. All the .js projects have their own convention, and it gets quite confusing.

**UPDATE 3-11-12 (Later that night!):**

I got a great email from [Boris Bokowski](https://twitter.com/bokowski) who linked me to a fiddle that ***"I might find interesting"***. Interesting indeed. So I updated the demo here on my site and this article -- to include a highlight filter & a proper Angular 0.10.x Module. Thanks again Boris.

**UPDATE 5-24-12

I no longer use either Jekyll or Angular, so the 404 example is no longer up. Regardless, good luck.

