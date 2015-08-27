var express = require('express'),
    app = express(),
    adminRouter = express.Router(),
    path = require('path');

adminRouter.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

adminRouter.get('/', function(req, res) {
  res.send('I am the dashboard!');
});

adminRouter.get('/users', function(req, res) {
  res.send('I show all the users!');
});

adminRouter.get('/users/:name', function(req, res) {
  res.send('hello ' + req.params.name + '!');
});

adminRouter.get('/posts', function(req, res) {
  res.send('I show all the posts!');
});

app.use('/admin', adminRouter);

app.listen(1337);
console.log('1337 is the magic port!');
