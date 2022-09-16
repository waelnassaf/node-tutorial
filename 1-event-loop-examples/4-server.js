const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event') //Notice it outputs twice because browser also calls /favicon.ico
  res.end('Hello World')
})

//This function is asynchronous
//Keeps listening until request comes.
server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
