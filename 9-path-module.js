//path: Path Module.

const path = require('path')

const sep = path.sep
console.log(sep)

//path.join: joins all args and normalize the result (Concatenation)
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

//This function path.resolve creates absolute path
// from right to left until an absolute path is constructed.
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)


