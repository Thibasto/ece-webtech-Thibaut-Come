// Import a module
const http = require('http')
const handles = require('./handles')
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




const server = http.createServer(handles.serverHandle);
server.listen(8080)