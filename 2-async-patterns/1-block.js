const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
  else if (req.url === '/about') {
    // blocking code
    //This not only blocks /about but other pages as well unless
    //the below code runs all pages are suspended.
    //You should always strive to set up your code asynchronously!
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page')
  } else {
    res.end('Error Page')
  }
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
