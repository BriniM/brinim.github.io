var express = require('express'),
	path = require('path'),
	router = express.Router();

const BIGDATA_BRANCH_PATH = '/home/maher/bigdata';

// Serve files of bigdata's project
router.use('/dev/bigdata/', express.static(path.join(BIGDATA_BRANCH_PATH, 'build')));
// Serve files in the build directory of the main router
router.use('/', express.static(path.join(__dirname, 'build')));

router.get('/dev/bigdata/*', function (req, res) {
	res.sendFile(path.join('build', 'index.html'));
});

router.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = router;