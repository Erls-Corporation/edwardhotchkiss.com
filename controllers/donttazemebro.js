
var fs = require('fs')
    , util = require('util')
    , path = require('path')
    , formidable = require('formidable')

/*!
  image url hasher
 */

function hasher(){
  var AUID = [],
      CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (var i = 0; i < 6; i++) {
    AUID.push(CHARS[Math.floor(Math.random()*62)]);
  }
  return AUID.join('');
};

/*!
  routes
 */

module.exports = function(app) {
  
  app.get('/cloud', function(request, response) {
    response.send(
      '<form action="/upload" enctype="multipart/form-data" method="post">'+
      '<input type="file" name="upload" multiple="multiple"><br>'+
      '<input type="submit" value="Upload">'+
      '</form>'
    );
  });

  app.post('/upload', function(request, response) {
    var ext
      , hash
      , form = new formidable.IncomingForm()
      , files = []
      , fields = [];
    form.keepExtensions = true;
    form.uploadDir = 'uploads';
    form.on('fileBegin', function(name, file) {
      ext = file.path.split('.')[1];
      hash = hasher();
      file.path = form.uploadDir + '/' + hash + '.' + ext;
    });
    form.on('field', function(field, value) {
      fields.push([field, value]);
    }).on('file', function(field, file) {
      files.push([field, file]);
    }).on('end', function() {
      response.redirect('http://' + request.headers.host + '/' + hash);
    });
    form.parse(request);
  });

  app.get('/:hash', function(request, response) {
    var imageFile = path.normalize(process.cwd() + "/uploads/" + request.params.hash + '.png');
    fs.stat(imageFile, function(error, results) {
      if (error) {
        response.redirect('/', 404);
      } else {
        response.writeHead(200, {
          'Content-Type': 'image/png',
          'Content-Length': results.size
        });
        fs.createReadStream(imageFile, { 'bufferSize' : 32 * 1024 }).pipe(response);
      };
    });
  });

};

/* EOF */