var express = require('express'),
    app = express(),
    adminRouter = express.Router(),
    path = require('path');

app.route('/login')
  .get(function(req, res) {
    res.send('this is the login form');
  })
  .post(function(req, res) {
    console.log('processing');
    res.send('processing the login form!');
  });

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

adminRouter.param('name', function(req, res, next, name) {
  if(name !== 'bad name') {
    req.name = name;
    next();
  } else {
    console.log('name validation failed with name = ' + name);
    res.sendStatus(400);
  }
});

adminRouter.get('/users/:name', function(req, res) {
  res.send('hello ' + req.name + '!');
});

adminRouter.get('/posts', function(req, res) {
  res.send('I show all the posts!');
});

app.use('/admin', adminRouter);

app.listen(1337);
console.log('1337 is the magic port!');
