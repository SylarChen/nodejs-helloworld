const path = require('path')  
const express = require('express')
const app = express()

var static_folder = path.join(__dirname, 'static_file')
app.use(express.static(static_folder));

app.listen(3004)