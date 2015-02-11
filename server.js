'use strict';

var http = require('http');
var url = require('url');

var server  = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });

  switch(req.url) {
    case '/time':
      var time = new Date();
      var theTime = ('What time is it?!?! The time is ' +
        ('0' + time.getHours()).slice(-2)   + ':' +
        ('0' + time.getMinutes()).slice(-2) + ':' +
        ('0' + time.getSeconds()).slice(-2) + ' muthafucka!');
      res.write(theTime);
      break;
    case '/greet':
      var name = "fuckface";
      res.write("Eat me, " + name + "!");
      break;
    default:
      res.write('No Route Here - 404');
    }
  res.end();
});

server.listen(3000);
console.log('Server is running at http://localhost:3000');
console.log('Ctl+C to stop the server.');
