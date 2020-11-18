require('dotenv').config();

const { NODE_ENV } = process.env;

var fs = require('fs'),
	http = require('http'),
	https = require('https'),
	express = require('express'),
	session = require('express-session'),
	passportRoutes = require('./passport'),
	regularRoutes = require('./routes'),
	app = express();

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: { secure: NODE_ENV == 'production' ? true : false }
}));

app.use(passportRoutes);
app.use(regularRoutes);

http.createServer(app).listen(NODE_ENV == 'production' ? 80 : 5000);

if (NODE_ENV == 'production') {
	const credentials = {
		key: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/privkey.pem', 'utf8'),
		cert: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/cert.pem', 'utf8'),
		ca: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/chain.pem', 'utf8')
	};
	https.createServer(credentials, app).listen(443);
}