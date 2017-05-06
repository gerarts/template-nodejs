/* eslint node/no-unpublished-require: off */
/**
 * Created by paulgerarts on 04/05/2017.
 */
/**
 * Test module to run eslint checks with mocha
 * @returns a test result created with eslint
 */
var lint = require('mocha-eslint');

var paths = [
  'src/'
];

var options = {
  // Increase the timeout of the test if linting takes to long
  timeout: 5000,  // Defaults to the global mocha `timeout` option

  // Increase the time until a test is marked as slow
  slow: 1000,  // Defaults to the global mocha `slow` option

  // Consider linting warnings as errors and return failure
  strict: true  // Defaults to `false`, only notify the warnings
};

lint(paths, options);
