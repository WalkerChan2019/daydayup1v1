const fs=require('fs')
const acorn=require('acorn')

const code = fs.readFileSync('./source.js').toString()
const ast = acorn.parse(code, { ecmaVersion: 7 })


module.exports=ast