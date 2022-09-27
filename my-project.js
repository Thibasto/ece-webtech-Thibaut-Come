// Import a module
const http = require('http')
const url = require('url')
const qs = require('querystring')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'

const serverHandle = function (req, res) {

const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)


  res.writeHead(200, {'Content-Type': 'text/html'});

  if (path === '/hello' && 'name' in params) {
    res.write('Hello ' + params['name'])
  } else {
    res.write('Hello anonymous')
  }

  res.end();
}


const server = http.createServer(serverHandle);
server.listen(8080)