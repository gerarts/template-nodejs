/**
 * Created by Paul Gerarts on 2/2/2017.
 */
var Datetime = function Datetime() {
  var that = this;

  that.getCurrent = function() {
    var date = new Date();
    return that.dateToDateString(date);
  };

  that.getDatetime = function(day, month, year, hour, minute, second) {
    var date = new Date();
    date.setDate(day);
    date.setMonth(month - 1);
    date.setYear(year);
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    return that.dateToDateString(date);
  };

  that.dateToDateString = function(date) {
    var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +
        date.getDate();
    var timeString = date.getHours() + ':' + date.getMinutes() + ':' +
        date.getSeconds();
    return dateString + ' ' + timeString;
  };
};
module.exports = new Datetime();
