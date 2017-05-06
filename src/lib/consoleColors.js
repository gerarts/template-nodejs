/* eslint no-console: off */
/**
 * Created by Paul Gerarts on 2/2/2017.
 */
var ConsoleColors = function ConsoleColors() {
  var that = this;

  that.Black = function(string) {
    var Black = '0;30';
    return constructColorString(string, Black);
  };
  that.BlackBold = function(string) {
    var BlackBold = '1;30';
    return constructColorString(string, BlackBold);
  };
  that.Red = function(string) {
    var Red = '0;31';
    return constructColorString(string, Red);
  };
  that.RedBold = function(string) {
    var RedBold = '1;31';
    return constructColorString(string, RedBold);
  };
  that.Green = function(string) {
    var Green = '0;32';
    return constructColorString(string, Green);
  };
  that.GreenBold = function(string) {
    var GreenBold = '1;32';
    return constructColorString(string, GreenBold);
  };
  that.Orange = function(string) {
    var Orange = '0;33';
    return constructColorString(string, Orange);
  };
  that.OrangeBold = function(string) {
    var OrangeBold = '1;33';
    return constructColorString(string, OrangeBold);
  };
  that.Blue = function(string) {
    var Blue = '0;34';
    return constructColorString(string, Blue);
  };
  that.BlueBold = function(string) {
    var BlueBold = '1;34';
    return constructColorString(string, BlueBold);
  };
  that.Purple = function(string) {
    var Purple = '0;35';
    return constructColorString(string, Purple);
  };
  that.PurpleBold = function(string) {
    var PurpleBold = '1;35';
    return constructColorString(string, PurpleBold);
  };
  that.Cyan = function(string) {
    var Cyan = '0;36';
    return constructColorString(string, Cyan);
  };
  that.CyanBold = function(string) {
    var CyanBold = '1;36';
    return constructColorString(string, CyanBold);
  };
  that.LightGray = function(string) {
    var LightGray = '0;37';
    return constructColorString(string, LightGray);
  };
  that.LightGrayBold = function(string) {
    var LightGrayBold = '1;37';
    return constructColorString(string, LightGrayBold);
  };

  that.statusMessage = function(module, string) {
    console.log(
        that.Blue(constructTag(module)) +
        that.Green(string)
    );
  };

  that.statusWarning = function(module, string) {
    console.log(
        that.Blue(constructTag(module)) +
        that.Orange(string)
    );
  };

  that.statusError = function(module, string) {
    console.log(
        that.Blue(constructTag(module)) +
        that.Red(string)
    );
  };

  that.statusRequest = function(module, method, url) {
    console.log(
        that.Blue(constructTag(module)) +
        'New ' +
        that.Purple(method + ' ') +
        'REQUEST ' +
        that.Orange(url)
    );
  };

  /**
   * Constructs a console-tag with the correct length.
   * @param {string} string - The input string for the tag.
   * @returns {string} Returns the tag.
   */
  function constructTag(string) {
    var out = string;
    for (var i = 0; i < (7 - string.length); i++) {
      if (i % 2 === 0) {
        out = out + ' ';
      } else {
        out = ' ' + out;
      }
    }
    return '[' + out + '] ';
  }

  /**
   * Colorize a string for the console.
   * @param {string} string - The string to colorize.
   * @param {string} color - The color.
   * @returns {string} Returns the colorized string.
   */
  function constructColorString(string, color) {
    return colorStart(color) + string + colorExit();
  }

  /**
   * Starts a colorized string.
   * @param {string} color - The color.
   * @returns {string} Returns a color-start.
   */
  function colorStart(color) {
    return '\x1B[' + color + 'm';
  }

  /**
   * Stops a colorized string.
   * @returns {string} Returns a color-end.
   */
  function colorExit() {
    return '\x1B[0m';
  }
};
module.exports = new ConsoleColors();
