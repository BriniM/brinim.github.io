var express = require('express'),
	passport = require('passport'),
	LocalStrategy = require('passport-local'),
	User = require('./db'),
	router = express.Router();

passport.use(new LocalStrategy((username, password, done) => {
	User.findOne({ username: username }, async (err, user) => {
		if (err) { return done(err); }
		if (!user) {
			return done(null, false, { message: 'Incorrect username.' });
		}

		if (!await user.validPassword(password)) {
			return done(null, false, { message: 'Incorrect password.' });
		}
		return done(null, user);
	});
}));

passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser((id, done) => {
	User.findOne({ _id: id }, (err, doc) => {
		if (err) done(err, null);
		done(null, doc);
	});
});

if (process.env.NODE_ENV == 'production') {
	router.use(function useHttps(req, res, next) {
		if (req.secure) {
			// request was via https, so do no special handling
			next();
		} else {
			// request was via http, so redirect to https
			res.redirect('https://' + req.headers.host + req.url);
		}
	});
}

router.use(require('body-parser').urlencoded({ extended: true }));

router.use(passport.initialize());
router.use(passport.session());

router.all('/fb/recentactivity/', function (req, res, next) {
	if(req.isAuthenticated())
	{
		next();
	}
	else
	{
		return res.redirect('/fb/recentactivity/login');
	}
});

router.post('/fb/recentactivity/login', passport.authenticate('local', {
	failureRedirect: '/fb/recentactivity/login',
	successRedirect: '/fb/recentactivity/'
}));

module.exports = router;