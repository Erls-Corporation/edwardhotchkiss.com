
/**
 * deps
 **/

var fs = require('fs')
  , path = require('path')
  , markdown = require('github-flavored-markdown');

/**
 * .md?
 **/

var isMarkdownFile = function(filename) {
  return /(.*?)\.(md)$/i.test(filename);
};

/**
 * @class blog
 */

var blog = module.exports = {};

/**
 * @method parsePost
 **/

blog.parsePost = function(filename) {
  file = path.normalize(__dirname + '/../posts/' + filename);
  var data = fs.readFileSync(file, 'utf8');
  var metaRE = /--([\s\S]*?)--\n/;
  var meta = data.match(metaRE)[0].split('\n');
  var md = data.replace(metaRE, '');
  var postTitle = meta[1].replace('Title: ', '');
  var postDescription = meta[2].replace('Description: ', '');
  var postDate = meta[3].replace('Date: ', '');
  var postKeywords = meta[4].replace('Keywords: ', '');
  var year = filename.substr(0, 4);
  var month = filename.substr(5, 2);
  var day = filename.substr(8, 2);
  var name = filename.replace('.md', '').substr(11);
  var postURL = '/blog/' + year + '/' + month + '/' + day + '/' + name + '/';
  var postBody = markdown.parse(md);
  var blogPost = {     
    description : postDescription,
    keywords    : postKeywords,
    title       : postTitle,
    date        : postDate,
    body        : postBody,
    url         : postURL
  };
  return blogPost;
};

/**
 * @method compileList
 * @param {Function} callback
 **/

blog.compileList = function() {
  var posts = __dirname + '/../posts/';
  var files = fs.readdirSync(posts);
  var results = [];
  files.sort(function(a, b) {
    if (isMarkdownFile(a) && isMarkdownFile(b)) {
      var dateStringA = a.substr(0, 10);
      var dateStringB = b.substr(0, 10);
      var dateA = new Date(dateStringA);
      var dateB = new Date(dateStringB);
      // DESC
      return dateB - dateA;
    } else {
      return;
    };
  });
  console.log(files);
  files.map(function(filename) {
    if (isMarkdownFile(filename)) {
      var blogPost = blog.parsePost(filename);
      results.push(blogPost);
    };
  });
  return results;
};

/**
 * @method compilePost
 * @param {String} title
 * @param {String} month
 * @param {String} year
 * @param {String} day
 * @param {Function} callback
 **/

blog.compilePost = function (title, month, year, day) {
  var name = year + '-' + month + '-' + day + '-' + title;
  var file = name + '.md';
  return blog.parsePost(file);
};

/* EOF */