/**
 * Created by paulgerarts on 06/05/2017.
 */
var assert = require('assert');
var Application = require('./application');

describe('Application', function() {
  describe('info', function() {

    it('should return the application name', function() {
      Application.info( function(result) {
        assert.equal('Application Name', result.name);
      });
    });

    it('should return the application version', function() {
      Application.info( function(result) {
        assert.equal('1.0.0', result.version);
      });
    });

  });
});
