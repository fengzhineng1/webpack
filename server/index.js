var http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
      // 发送响应数据 "Hello World"
  res.end('Hello World111\n')
  console.log(23)
}).listen(8888)
