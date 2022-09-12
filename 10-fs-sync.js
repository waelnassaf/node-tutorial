//FS (Filesystem) Module
//Sync: Blocking

const {readFileSync, writeFileSync} = require('fs')

console.log('Starting...')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'})

console.log('The end...')
console.log('On the next task...')

