// ./handles.js
// Necessary imports
const http = require('http')
const handles = require('./handles')
const url = require('url')
const qs = require('querystring')

const contentThibaut=
'<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>LAB2</title>' +
'    </head>' +
'    <body>' +
'       <h1>Thibaut d Astorg</h1>' +
'       <h2>ING4 Information System GRP3</h2>'+
'    </body>' +
'</html>'

const contentCome=
'<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>LAB2</title>' +
'    </head>' +
'    <body>' +
'       <h1>Come Chappuis</h1>' +
'       <h2>ING4 Information System GRP3</h2>'+
'    </body>' +
'</html>'

const contentError404 =
'<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>404</title>' +
'    </head>' +
'    <body>' +
'       <h2>ERROR 404 PAGE NOT FOUND</h2>'+
'    </body>' +
'</html>'

module.exports = {
     serverHandle : function (req, res) {

        const route = url.parse(req.url)
          const path = route.pathname 
          const params = qs.parse(route.query)
        
        
          res.writeHead(200, {'Content-Type': 'text/html'});


          if (path === '/hello' && 'name' in params) 
          {
            if(params['name'] == 'Thibaut')
            {
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(contentThibaut);
            }
            if(params['name'] == 'Come')
            {
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(contentCome);
            }
            else
            {
              res.writeHead(200, {'Content-Type': 'text/plain'});
              res.write('Hello ' + params['name']);
            }
          }
          else 
          {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.write(contentError404);
          }
          res.end();
        }
  }