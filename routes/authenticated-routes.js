// Routes in this module require authentication

var express = require('express');
var router = express.Router();
var AUTH_REQUIRED = (process.env.AUTH_REQUIRED == 'true'); // Controls whether this web app will require authentication and authorization.

// middleware that is specific to this router
router.use(function authorized(req, res, next) {
  if (req.isAuthenticated() || !AUTH_REQUIRED) {
  	return next();
  }
  	res.redirect('/auth/forcedotcom?redirect='+req.originalUrl);
});

router.get('/about', function(req, res) {
	return res.render('about');
});

module.exports = router;
