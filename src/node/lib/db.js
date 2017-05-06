/**
 * Created by Paul Gerarts on 2/2/2017.
 */
var mysql = require('mysql');
var consoleColors = require('./consoleColors');
var config = require('../config');
var express = require('express');
var router = express.Router();

var Db = function Db() {
  var that = this;

  /**
   * The database connection settings for the MySQL connection.
   *
   * @type {{host: string, user: string, password: string, database: string}}
   */
  that.dbServer = {
    host: null,
    user: null,
    password: null,
    database: null
  };

  /**
   * The connection state.
   *
   * @type {boolean}
   */
  that.connected = false;

  /**
   * The number of times the server tried to instantiate a database connection.
   *
   * @type {int}
   */
  that.connectionAttempts = 0;

  /**
   * The MySQL database connection.
   *
   * @type {connection}
   */
  that.connection = null;

  /**
   * Initialize a new database connection.
   * @param {initCallback} callback - The callback function.
   */
  that.init = function(callback) {
    that.dbServer.host = config.dbHost;
    that.dbServer.user = config.dbUser;
    that.dbServer.password = config.dbPassword;
    that.dbServer.database = config.dbName;

    that.connection = that.connect(callback);
  };
  /**
   * The callback that gets called after the connection has been established.
   * @callback initCallback
   */

  /**
   * Try to reconnect up to 30 times to the MySQL database on connection
   * failure.
   * @param {reconnectCallback} callback - The callback function.
   */
  that.reconnect = function(callback) {
    if (that.connectionAttempts < 3) {
      setTimeout(function() {
        that.connection = that.connect(callback);
      }, 500);
    } else if (that.connectionAttempts < 15) {
      setTimeout(function() {
        that.connection = that.connect(callback);
      }, 1000);
    } else if (that.connectionAttempts < 30) {
      setTimeout(function() {
        that.connection = that.connect(callback);
      }, 5000);
    } else {
      consoleColors.statusError(
          'MySQL',
          'Failed to connect'
      );
      router.close();
    }
  };
  /**
   * The callback that gets called after a successful reconnect.
   * @callback reconnectCallback
   */

  /**
   * Establish a database connection.
   * @param {connectCallback} callback - The callback function.
   * @returns {Connection} The database connection object to make queries to.
   */
  that.connect = function(callback) {
    var connection = mysql.createConnection(that.dbServer);
    connection.on('error', that.errorHandler);

    that.connectionAttempts++;

    connection.connect(function(error) {
      if (error) {
        consoleColors.statusError('MySQL',
            'Error: ' + error.code
        );
        that.reconnect();
      } else if (isNaN(that.connection.threadId)) {
        consoleColors.statusWarning('MySQL', 'Something went wrong, we ' +
            'didn\'t get a threadId when connecting to the MySQL server.');
      } else {
        consoleColors.statusMessage('MySQL', 'Connected as id ' +
            that.connection.threadId + ' after ' + that.connectionAttempts +
            ' attempt(s).');
        that.connected = true;
        that.connectionAttempts = 0;
        if (callback) {
          callback();
        }
      }
    });

    return connection;
  };
  /**
   * The callback that gets called after a successful database connection has
   * been established.
   * @callback connectCallback
   */

  /**
   * The error handler for the database connection class.
   * @param {Object} error - The object to set the error in (if one occurs).
   */
  that.errorHandler = function(error) {
    that.connected = false;
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
      consoleColors.statusError('MySQL', 'Connection lost');
      consoleColors.statusWarning('MySQL', 'Reconnecting...');
    } else if (error.code === 'ECONNREFUSED') {
      consoleColors.statusError('MySQL', 'Connection refused');
    }
    that.reconnect();
  };

};
module.exports = new Db();
