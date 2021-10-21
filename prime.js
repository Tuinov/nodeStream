const colors = require('colors');
console.log(colors.green('hello'));
const [from, to] = process.argv.slice(2);
console.log(from, to);

