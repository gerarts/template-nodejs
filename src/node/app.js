/**
 * Created by paulgerarts on 04/05/2017.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var port = process.env.PORT || 3000;
var consoleColors = require('./lib/consoleColors');
// var db = require('./lib/db');

// Setup express to accept POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Enabling trust proxy
app.enable('trust proxy');

// Setup express to accept cookies
app.use(cookieParser());

// Use middleware
app.use(require('./middleware'));

// Setup static content
app.use('/', express.static(__dirname + '/../static'));

// Setup express routes
app.use('/', require('./controller'));

// Setup views
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

// Start the database connection
// db.init();

// Start listening for requests
app.listen(port, function() {
  consoleColors.statusMessage(
      'Express',
      'Listening at http://127.0.0.1:' + port
  );
  consoleColors.statusMessage(
      'Swagger',
      'Available if installed http://127.0.0.1:' + port + '/swagger-ui'
  );
});
