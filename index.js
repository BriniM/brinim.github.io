require('dotenv').config();

var fs = require('fs'),
	http = require('http'),
	https = require('https'),
	express = require('express'),
	session = require('express-session'),
	passportRoutes = require('./passport'),
	regularRoutes = require('./routes'),
	app = express();

// SSL Files.
const credentials = {
	key: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/privkey.pem', 'utf8'),
	cert: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/cert.pem', 'utf8'),
	ca: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/chain.pem', 'utf8')
};

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: { secure: true }
}));

app.use(passportRoutes);
app.use(regularRoutes);

http.createServer(app).listen(80);
https.createServer(credentials, app).listen(443);