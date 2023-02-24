const fs = require('fs');
const http = require('http');

const hostname = process.env.HOSTNAME
const port = parseInt(process.env.PORT)

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': fs.statSync('thanks.html').size
  })
  fs.createReadStream('thanks.html').pipe(res)
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
