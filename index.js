const http = require('http');
const httpProxy = require('http-proxy');
const options = {}
const proxy = httpProxy.createProxyServer(options);

const server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:8080' });
});

proxy.on('error', function(e) {
  console.log('Proxy Error', e);
});

server.listen(80);
