var express = require('express'),
    app = express(),
    path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337);
console.log('1337 is the magic port!');
