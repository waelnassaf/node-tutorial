// npm i <packageName>: Local dependency (Only for this project)
// [sudo] npm install -g <packageName> : Global dependency (Use it in any project)

// package.json - manifest file (stores important info about project/package)
//Create it manually (or)
//npm init (or)
//npm init -y (initialize instantly with defaults)

const _ = require('lodash')
const items = [1, [2, [3, [13, 100], {name: 'wael'} ,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)


