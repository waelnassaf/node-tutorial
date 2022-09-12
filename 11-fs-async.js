//FS (Filesystem) Module
//Async: Non-Blocking (We almost always use this approach)

//Callback: Run when functionality is complete.

const {readFile, writeFile} = require('fs')

console.log('Starting')

//Notice how this approach is messy, alts are: Promises or Async/Await
readFile('./content/first.txt', {encoding: 'utf-8'} , (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    const first = data
    readFile('./content/second.txt', 'utf-8' , (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const second = data //Redundant but expressive
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, data)=> {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('Task Done')
        })
    })
})

console.log('The end...')
console.log('On to the next task...')
