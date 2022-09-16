// npm i <packageName>: Local dependency (Only for this project)
// npm i <packageName> -D: Save as dev dependency
// [sudo] npm install -g <packageName> : Global dependency (Use it in any project)

//package.json - [manifest file] (stores important info about project/package)
//Create it manually (or)
//npm init (or)
//npm init -y (initialize instantly with defaults)

//RUN (npm install): To install required modules after cloning project.

//when you installed npm above 5.2.0 version then automatically npx was installed.
// It is an npm package runner that can execute any package that you want from the npm registry
// without even installing that package.
//npx create-react-app my-app -> This will run although missing pkg

//e.g. npm i lodash
const _ = require('lodash')
const items = [1, [2, [3, [13, 100], {name: 'wael'} ,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)


