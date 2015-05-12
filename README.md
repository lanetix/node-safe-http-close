safe-http-close
====================
`httpServer.close` will (throw in node < 0.12) callback with an error if the
server is still running. This is not what you want if you're just cleaning up
connections as part of your server's shutdown procedure. This libary provides
a function for you to safely close your server

Installation
------------

```bash
npm install safe-http-close
```

Usage
-----

Instead of calling `httpServer.close`, do

```javascript
var safeClose = require('safe-http-close');

safeClose(server, function (err) {
  if (!err) { console.log('closed'); }
});
```
