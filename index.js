const express = require('express');
const path = require('path');
const exec = require('child_process').exec;
const app = express();

var GithubWebHook = require('express-github-webhook');
var webhookHandler = GithubWebHook({ path: '/ci', secret: process.env.GIT_WEBHOOK_TOKEN });

app.use(bodyParser.json()); // must use bodyParser in express
app.use(webhookHandler); // use our middleware

app.use(express.static(path.join(__dirname, 'build')));

webhookHandler.on('push', function (repo, data) {
    exec('cd ' + repo + ' && git pull');
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(80);