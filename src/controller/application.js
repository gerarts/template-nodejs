/**
 * Created by paulgerarts on 04/05/2017.
 */
var express = require('express');
var router = express.Router();

var Application = require('../model/application');

router.get('/', function(req, res, next) {
  Application.info(function(info) {
    res.render('application', {data: info});
    next();
  });
});

module.exports = router;
