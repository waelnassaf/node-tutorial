//Modules — A module is an encapsulated piece of code.
//EVERY FILE IS A MODULE!!

const {wael, patrick} = require('./4-first-module')
const sayHi = require('./5-second-module')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi('Susan')
sayHi(wael)
sayHi(patrick)
console.log(data)

