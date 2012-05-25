
/**
 * @site edwardhotchkiss.com
 * @author Edward Hotchkiss <edwardhotchkiss@me.com>
 * (now on heroku)
 **/

var express = require('express')
  , app = express.createServer()
  , port = process.env.PORT || 8000;

/**
 * @class blog dep
 */

var blog = require('./lib/blog');

/**
 * middleware 
 **/

app.configure(function(){
  app.use(express.logger());
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
});

app.get('/', function(request, response) {
  var pageTitle = "Edward Hotchkiss, Software Engineer";
  var pageDescription = '';
  pageDescription += "My name is Edward Hotchkiss and I'm a Software";
  pageDescription += " Engineer and Entrepreneur based in NYC. My work with";
  pageDescription += " startups focuses on Node.js, and other emerging technologies";
  var pageList = blog.compileList();
  var page = {
    title       : pageTitle,
    list        : pageList,
    description : pageDescription
  };
  response.render('index', {
    locals : {
      page : page
    }
  });
});

/**
 * @content Blog Posts
 * @example Paterrn: /blog/2009/04/08/a-javascript-jquery-image-preloader-with-animations/
 **/

app.get('/blog/:year/:month/:day/:title/', function(request, response) {
  var title = request.params['title'] || '';
  var month = request.params['month'] || '';
  var year = request.params['year'] || '';
  var day = request.params['day'] || '';
  var blogPost = blog.compilePost(title, month, year, day);
  response.render('post', {
    locals : {
      page : blogPost
    }
  });
});

/**
 * .listen(8000)
 **/

app.listen(port, function() {
  console.log('server_start', 'server started on port ' + port);
});

/* EOF */