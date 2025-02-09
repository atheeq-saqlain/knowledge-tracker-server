require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo');
const usersData = require('./modules/users/data-access/user.data');

var indexRouter = require('./routes/index');
var conceptsRouter = require('./modules/concepts/controller/concepts.routes');
var questionsRouter = require('./modules/questions/controller/questions.routes');
var syllabusRouter = require('./modules/syllabus/controller/syllabus.routes');
var educationBoardRouter = require('./modules/educationBoard/controller/educationBoard.routes');
var usersRouter = require('./modules/users/controller/users.routes');
var institutesRouter = require('./modules/institute/controller/institutes.routes');
var studentsRouter = require('./modules/students/controller/students.routes');
var subjectsRouter = require('./modules/subject/controller/subjects.routes');

var app = express();

//connecting to mongoose
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('Connected to Mongodb');
});

db.getClient();

// init authentication
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      client: db.getClient(),
      collectionName: 'sessions',
    }),
  })
);
// This is the basic express session({..}) initialization.
app.use(passport.initialize());
// init passport on every route call.
app.use(passport.session());
// allow passport to use "express-session".

const authUser = async (username, password, done) => {
  // console.log(`Value of "User" in authUser function ----> ${username}`); //passport will populate, user = req.body.username
  // console.log(`Value of "Password" in authUser function ----> ${password}`); //passport will popuplate, password = req.body.password

  let user = await usersData.findByUserName(username);
  if (!user) return done(null, false, { message: 'User not found' });
  else if (user.password != password) return done(null, false, { message: 'Invalid password' });

  //Search the user, password in the DB to authenticate the user
  //Let's assume that a search within your DB returned the username and password match for "Kyle".
  let authenticated_user = user;
  return done(null, authenticated_user);
};

passport.use(new LocalStrategy(authUser));
// The "authUser" is a function that we will define later will contain the steps to authenticate a user, and will return the "authenticated user".

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: 'http://localhost:9000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
    credentials: true,
  })
);

// initialize routers
app.use('/', indexRouter);
app.use('/concepts', conceptsRouter);
app.use('/questions', questionsRouter);
app.use('/syllabus', syllabusRouter);
app.use('/education-board', educationBoardRouter);
app.use('/users', usersRouter);
app.use('/institutes', institutesRouter);
app.use('/students', studentsRouter);
app.use('/subjects', subjectsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
