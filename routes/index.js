var express = require('express');
var router = express.Router();

// Home
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

// About
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

// Projects
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Contact (GET) - provide success/error defaults
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact', success: null, error: null });
});

// Contact (POST) - placeholder handler (no email sending here)
router.post('/contact', function (req, res, next) {
  try {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', { name, email, message });
    // If you add nodemailer later, send email here.
    return res.render('contact', { title: 'Contact', success: true, error: null });
  } catch (err) {
    console.error(err);
    return res.render('contact', { title: 'Contact', success: null, error: true });
  }
});

module.exports = router;
