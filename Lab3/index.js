// Import a module
// const http = require('http')
// const handles = require('./handles')
const express = require('express')
const app = express()

const birds = require('./birds')
app.use('/birds', birds)

app.listen(8080)