const http = require('http')

//Traditional Method
// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })

//Using Event Emitter API
const server = http.createServer()
//Emits request event
//Subscribe to it, listen for it, respond to it.
server.on('request', (req, res) => {
    res.end('Welcomen')
})

server.listen(5000, (err) => {
    if (err) {
        console.log('Something went wrong', err)
    } else {
        console.log('Server is listening on port ' + 5000)
    }
})

