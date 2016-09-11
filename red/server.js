var http = require ('http');
var port = 8080;
var color = "red";
var circle = '<circle cx="50" cy="50" r="40" stroke-width="4" fill="' + color + '" />';

function requestHandler(request, response) {
	console.log('rquest from: ', request);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write('<svg width="100" height="100">\n');
	response.write(circle);
	response.write('\n</svg>\n');
	response.end();
};

var server = http.createServer(requestHandler).listen(port, function() {
	console.log('serving color: %s', color);
	console.log('listening on port: %s', port);
});
