// var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
const { MongoClient } = require('mongodb');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var favicon = require('server-favicon');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();// express实例

var settings = require('./settings')
// view engine setup
app.set('views', path.join(__dirname, 'views'));// 视图文件存放目录
app.set('view engine', 'ejs');// 视图模板引擎

app.use(logger('dev'));// 加载日志中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());// 解析cookie中间件
app.use(express.static(path.join(__dirname, 'public')));// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app)

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
app.use(flash);

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'blog';
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  // the following code examples can be pasted here...
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

module.exports = app;// 导出app实例供其他模块
