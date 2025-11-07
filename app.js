// Import required modules
var express = require('express');          // Framework for building web applications
var path = require('path');                // Helps manage file and directory paths
var cookieParser = require('cookie-parser'); // Parses cookies sent by the client
var logger = require('morgan');            // Logs HTTP requests to the console

// Import route files
var indexRouter = require('./routes/index'); // Handles main page routes
var usersRouter = require('./routes/users'); // Handles /users routes

// Create Express app instance
var app = express();

// Set up the view engine
app.set('views', path.join(__dirname, 'views')); // Folder where EJS view files are stored
app.set('view engine', 'ejs');                   // Set EJS as the template engine

// Middleware setup
app.use(logger('dev'));                          // Logs every request (helpful for debugging)
app.use(express.json());                         // Parses incoming JSON data
app.use(express.urlencoded({ extended: false })); // Parses form submissions
app.use(cookieParser());                         // Allows access to cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serves static files (CSS, JS, images)

// Prevent browser caching during development
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 0 }));

// Define routes for different parts of the site
app.use('/', indexRouter);   // Main pages (home, about, contact, etc.)
app.use('/users', usersRouter); // Routes for user-related pages

// Handle 404 errors (page not found)
app.use(function(req, res, next) {
  res.status(404).send('Not Found'); // Displays simple message for missing pages
});

// Export the app for use in other files (like bin/www)
module.exports = app;
