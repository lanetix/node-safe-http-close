'use strict';
var curry = require('curry'),

  ignoreNotRunning = curry(function (done, err) {
    if (err && err.message === 'Not running') {
      //Not running is OK because it just means the server has already
      //closed
      return done();
    }
    done(err);
  });

module.exports = function (server, callback) {
  var callback = ignoreNotRunning(callback);

  try { //in node < 0.12, close can throw.
    server.close(callback);
  }
  catch (ex) {
    callback(ex);
  }
};
