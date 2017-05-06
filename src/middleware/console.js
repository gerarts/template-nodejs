/**
 * Created by Paul Gerarts on 2/2/2017.
 */
var express = require('express');
var router = express.Router();
var consoleColors = require('./../lib/consoleColors');

router.use(function(req, res, next) {
  consoleColors.statusRequest('Express', req.method,
      req.locale + ' ' + req.url
  );
  next();
});

module.exports = router;
