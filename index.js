// Sys Lib.
const path = require('path');
const fs = require('fs');

// Express, HTTP(s) Lib.
const http = require('http');
const https = require('https');
const express = require('express');
const app = express();

const BIGDATA_BRANCH_PATH = '/root/bigdata';

// SSL Files.
const credentials = {
	key: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/privkey.pem', 'utf8'),
	cert: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/cert.pem', 'utf8'),
	ca: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/chain.pem', 'utf8')
};

app.use('/dev/bigdata/', express.static(path.join(BIGDATA_BRANCH_PATH, 'build'))); // Serve files of bigdata's project
app.use('/', express.static(path.join(__dirname, 'build'))); // Serve files in the build directory of the main app

app.get('/dev/bigdata/*', function(req, res) {
	res.sendFile(path.join('build', 'index.html'));
});

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(80);
https.createServer(credentials, app).listen(443);