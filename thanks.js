const http = require('http');

const hostname = 'thanksasaservice.com';
const port = 80;

let r = ''
r += '<html>'
r += '<head>'
r += '<title>thanks</title>'
r += '<meta name="description" content="thanks">'
r += '<meta name="keywords" content="thanks">'
r += '<meta property="og:title" content="thanks">'
r += '<meta property="og:description" content="thanks">'
r += '<meta property="og:type" content="website">'
r += '<meta name="twitter:title" content="thanks">'
r += '<meta name="twitter:description" content="thanks">'
r += '</head>'
r += '<body>thanks</body>'
r += '</html>'

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(r);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
