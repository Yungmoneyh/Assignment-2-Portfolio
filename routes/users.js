// Import Express
var express = require('express');

// Create a router object
var router = express.Router();

/* 
  GET request for /users page 
  When someone goes to /users, this message will show
*/
router.get('/', function(req, res, next) {
  res.send('Users route');
});

// Export the router so it can be used in app.js
module.exports = router;
