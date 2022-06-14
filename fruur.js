var http = require('http')
http.createServer((req, res) => {
  res.end(`Tiden är: ${new Date()}`)
}).listen(5000)
  
