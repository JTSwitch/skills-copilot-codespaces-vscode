// Create web server
// Use express to create web server
var express = require('express');
var app = express();

// Use body-parser to parse incoming data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use comments.js
var comments = require('./comments');
app.use('/comments', comments);

// Use port 3000
app.listen(3000, function() {
  console.log('Web server is running on http://localhost:3000');
});
