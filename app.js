
/*!

  http://github/edwardhotchkiss/edward/

*/

var express = require('express')
  , app = express.createServer()
  , hits = 0;

/*!
  Setup ExpressJS
 */

app.configure(function() {
  app.use(express.static(__dirname+'/public'));
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
});

/*!
	routes
 */
  
app.get('/', function(request, response) {
  hits++;
  process.emit('hit', hits);
  response.render('index');  
});

app.get('/test', function(request, response) {  
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  process.on('hit', function(data) {
    response.write(data + '\n');
  });
});

/*!
  ExpressJS, Listen on <port>
 */

app.listen(8000, function() {
  console.log('server running on port 8000');
});

/* EOF */
