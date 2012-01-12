
module.exports = function(app) {
  app.get('/', function(request, response) {
    if (request.headers.host === 'donttazemebro.edwardhotchkiss.com') {
      response.render('donttazemebro');
    } else {
      response.render('index'); 
    }; 
  });
};