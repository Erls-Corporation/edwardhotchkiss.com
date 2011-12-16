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

function build(){
  console.log('\nbuilding http://edwardhotchkiss.com/...\n');
  '<p>15 Dec 2011 &raquo; <a href="" title="" class="title">Some Example Post</a></p>'
};

/* EOF */