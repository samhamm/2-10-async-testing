'use strict';

var http = require('http');
var url = require('url');

var time = new Date();
var theTime = 'What time is it?!?! The time is ' +
  ('0' + time.getHours()).slice(-2)   + ':' +
  ('0' + time.getMinutes()).slice(-2) + ':' +
  ('0' + time.getSeconds()).slice(-2) + ' muthafucka!';

var server  = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });

  var urlPath = url.parse(req.url).path.split('/');

  if (urlPath[1] === 'greet')
    var userName = urlPath[2];

  switch(urlPath[1]) {
    case 'time':
      res.write(theTime);
      break;
    case 'greet':
      res.write("Eat me, " + userName + "!");
      break;
    default:
      res.write('No route here, sucker.');
    }
  res.end();
});

server.listen(3000);
console.log('Server is running at http://localhost:3000');
console.log('Ctl+C to stop the server.');
