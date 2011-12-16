#!/usr/bin/env node

/*!
  Module dependencies
*/

var fs = require('fs'),
    util = require('util'),
    path = require('path'),
    args = process.argv;

/*!
  Setup CLI
*/

switch(args[2]) {
  default:
    build();
    break;   
};

/*!
  Quickly thrown together :P
 */

function processPost(filename, data){
  // DATE FORMAT: 15 Dec 2011
  var date = filename;
  var title = data.match(/^(.*)$/mgi)[0].replace(/# /i,'');
  var html = '<p>'+date+' &raquo; <a href="" title="" class="title">'+title+'</a></p>';
  var source = fs.readFileSync(__dirname+'/../layout/index.html').toString();
  var redux = source.replace(/{{posts}}/gi, html);
  save(redux);
};

function build(){
  console.log('building http://edwardhotchkiss.com/...');
  fs.readdir(__dirname + "/../markdown", function(error, files){
    if (error) {
      console.error(error);
    } else {
      files.forEach(function(file){
        var data = fs.readFileSync(__dirname+'/../markdown/'+file);
        processPost(file, data.toString());
      });
    }
  });
};

function save(data){
  fs.writeFileSync(__dirname + '/../index.html', data, 'utf8');
  console.log('built.');
};

/* EOF */