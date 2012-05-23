
/**
 * edwardhotchkiss.com
 * (now on heroku)
 */

var express = require('express')
  , app = express.createServer()
  , port = process.env.PORT || 3000

/**
 * middleware 
 **/

app.configure(function(){
  app.use(express.logger());
  app.use(express.static(__dirname + '/public'));
});

/**
 * .listen(8000)
 */

app.listen(port, function() {
  console.log('server_start', 'server started on port ' + port);
});

/* EOF */