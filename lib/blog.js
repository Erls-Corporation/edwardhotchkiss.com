
/**
 * deps
 **/

var fs = require('fs')
  , markdown = require('markdown').markdown;

/**
 * @class blog
 */

var blog = module.exports = {};

/**
 * @method compilePost
 * @param {String} title
 * @param {String} month
 * @param {String} year
 * @param {String} day
 * @param {Function} callback
 **/

blog.compilePost = function (title, month, year, day, callback) {
  var name = year + '-' + month + '-' + day + '-' + title;
  var file = __dirname + '/../posts/' + name + '.md';
  fs.readFile(file, 'utf8', function(error, data) {
    if (error) {
      throw new Error(error);
    } else {
      var metaRE = /--([\s\S]*?)--\n/;
      var meta = data.match(metaRE)[0].split('\n');
      var md = data.replace(metaRE, '');
      var postTitle = meta[1].replace('Title: ', '');
      var postDescription = meta[2].replace('Description: ', '');
      var postKeywords = meta[3].replace('Keywords: ', '');
      var postURL = '/blog/' + name + '/';
      var postDate =  month + '.' + day + '.' + year; 
      var postBody = markdown.toHTML(md);
      var blogPost = {     
        description : postDescription,
        keywords    : postKeywords,
        title       : postTitle,
        date        : postDate,
        body        : postBody,
        url         : postURL
      };
      callback(null, blogPost);
    };
  });
};

/* EOF */