
/*!

  http://github/edwardhotchkiss/edward/

*/

var express = require('express')
  , app = express.createServer()

/*!
  Setup ExpressJS
 */

app.configure(function() {
  app.use(express.static(__dirname+'/public'));
});

/*!
  ExpressJS, Listen on <port>
 */

app.listen(8000, function() {
  console.log('server running on port 8000');
});

/* EOF */
