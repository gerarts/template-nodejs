/**
 * Created by paulgerarts on 04/05/2017.
 */
/**
 * Get the application's general information.
 * @param {infoCallback} callback - The callback function.
 */
exports.info = function(callback) {
  // Make some data
  var returnable = {
    "name": "Application Name",
    "version": "1.0.0"
  };

  // Return data
  callback(returnable);
};
/**
 * The callback to return the application information.
 * @callback infoCallback
 * @param {object} data
 */
