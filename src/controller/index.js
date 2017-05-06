/**
 * Created by paulgerarts on 04/05/2017.
 */
var express = require('express');
var router = express.Router();

router.use('/application', require('./application'));
// router.use('/path', require('./folder'));

module.exports = router;
