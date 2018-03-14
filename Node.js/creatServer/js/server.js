/**
 * 使用Node.js创建一个服务器
 */
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello Node.js\n');
});
server.listen(1377, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1377');