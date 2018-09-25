let path = require('path');
//相对转绝对
console.log(path.resolve('./dist','a','b'));
console.log(path.join(__dirname,'./dist','a','b'));
