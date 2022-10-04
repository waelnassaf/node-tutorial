//HTTP Module
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is our home page')
    } else if (req.url === '/about') {
        res.end('This is a brief history about us.')
    } else {
        res.end(
            `<h1>Oops!</h1>
                <p>Nothing to do here!</p>
                <a href="/">Back home</a>`
        )
    }
})

server.listen(5500)

