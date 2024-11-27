var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auriculares', require('./routes/auriculares'));
app.use('/teclado', require('./routes/teclado'));
app.use('/gabinetes', require('./routes/gabinetes'));
app.use('/fuentes', require('./routes/fuentes'));
app.use('/alma', require('./routes/alma'));
app.use('/procesadores', require('./routes/procesadores'));
app.use('/mothers', require('./routes/mothers'));
app.use('/video', require('./routes/video'));
app.use('/ram', require('./routes/ram'));



app.get('/mouse', (req, res) => {
  res.render('mouse', { title: 'Vista del Mouse' }); // Renderiza mouse.hbs
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
