const express = require('express')  
const app = express()

app.get('/', (request, response) => {  
  throw new Error('I always throw the exception')
})

app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke: ' + err)
})

app.listen(3002)
