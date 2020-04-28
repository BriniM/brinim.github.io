// Sys Lib.
const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;

// Express, HTTP(s) Lib.
const http = require('http');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const REPO_PATH = '~/brinim.github.io';

// CI, CD Lib.
var GithubWebHook = require('express-github-webhook');
var webhookHandler = GithubWebHook({ path: '/ci', secret: process.env.GIT_WEBHOOK_TOKEN });

// SSL Files.
const credentials = {
	key: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/privkey.pem', 'utf8'),
	cert: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/cert.pem', 'utf8'),
	ca: fs.readFileSync('/etc/letsencrypt/live/maherbrini.tk/chain.pem', 'utf8')
};

app.use(bodyParser.json()); // must use bodyParser in express.
app.use(webhookHandler); // use GithubWebHook's middleware.
app.use(express.static(path.join(__dirname, 'build'))); // Serve files in the build directory.

webhookHandler.on('push', function (repo, data) { // On repo push: Update and rebuild.
	if (data.ref === "refs/heads/dev") {
		exec(`cd ${REPO_PATH} && git pull && npm install && npm run build`, (err, stdout, stderr) => {
			if (err) console.error(err);
			if (stdout) console.log(stdout);
			if (stderr) console.error(stderr);
		});
	}
});

// app.get('/dev/' ...);

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(80);
https.createServer(credentials, app).listen(443);