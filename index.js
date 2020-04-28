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

const DEV_BRANCH_PATH = '/root/brinim.github.io';
const BIGDATA_BRANCH_PATH = '/root/bigdata';

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

app.use('/dev/bigdata/', express.static(path.join(BIGDATA_BRANCH_PATH, 'build'))); // Serve files of bigdata's project
app.use('/', express.static(path.join(__dirname, 'build'))); // Serve files in the build directory of the main app


// TODO: See if package.json was changed to determine whether npm install is needed,
// Saves ressources.
webhookHandler.on('push', function (repo, data) { // On repo push: Update and rebuild.
	if (data.ref === "refs/heads/dev") {
		exec(`cd ${DEV_BRANCH_PATH} && git pull && npm install && npm run build`, (err, stdout, stderr) => {
			if (err) console.error(err);
			if (stdout) console.log(stdout);
			if (stderr) console.error(stderr);
		});
	} else if (data.ref === "refs/heads/bigdata") {
		exec(`cd ${BIGDATA_BRANCH_PATH} && git pull && npm install && npm run build`, (err, stdout, stderr) => {
			if (err) console.error(err);
			if (stdout) console.log(stdout);
			if (stderr) console.error(stderr);
		});
	}
});

app.get('/dev/bigdata/*', function(req, res) {
	res.sendFile(path.join('build', 'index.html'));
});

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(80);
https.createServer(credentials, app).listen(443);