var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, resp) {
    if (req.url === "/") {
        fs.readFile("mypage.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1><h1>404 NOT FOUND</h1> <a href="/">Back</a>');
        // resp.write('<h1>Sorry !!!</h1><br /><a href="/">Back</a>: ' + req.url);
        resp.end();
    }
});
//5.
server.listen(5050);
 
console.log('Server Started listening on 5050');