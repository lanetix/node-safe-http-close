'use strict';

var http = require('http'),
  noop = require('noop2'),
  safeClose = require('./index'),
  test = require('tape');

function createAndListen() {
  var server = http.createServer(noop);
  server.listen(1337);
  return server;
}

test('should not callback with error if closed', function (t) {
  t.plan(2);

  var server = createAndListen();

  server.close(function (err) {
    t.error(err);
    safeClose(server, function (e) {
      t.error(e);
    });
  });
});
