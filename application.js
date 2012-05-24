
/**
 * edwardhotchkiss.com
 * (now on heroku)
 **/

var express = require('express')
  , app = express.createServer()
  , port = process.env.PORT || 8000

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

/**
 * blog
 * ex: /blog/2009/04/08/a-javascript-jquery-image-preloader-with-animations/
 **/

app.get('/blog/:year/:month/:day/:title/', function(request, response) {
  var title = request.params['title'] || '';
  var month = request.params['month'] || '';
  var year = request.params['year'] || '';
  var day = request.params['day'] || '';
  blog.compilePost(title, month, year, day, function(error, blogPost) {
    if (error) {
      response.send(error, 500);
    } else {
      response.render('post', {
        locals : {
          page : blogPost
        }
      });
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