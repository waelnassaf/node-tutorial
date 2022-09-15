//Events are a core building block of Node.js

// gets back the class
// if you want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`User data received. Name is ${name} and age is ${age}`)
})

customEmitter.on('response', () => {
    console.log(`Some other logic here..`)
})

customEmitter.emit('response', 'Wael', '26')

