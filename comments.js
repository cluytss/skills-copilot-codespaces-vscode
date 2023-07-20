// create web server
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var commentsFilePath = path.join(__dirname, 'comments.json');
var comments = JSON.parse(fs.readFileSync(commentsFilePath, 'utf8'));
