let EventEmitter = require('events');
let util = require('util');
util.inherits(Man,EventEmitter);//继承
function Man() {}
let man = new Man();
function findGirl(a) {console.log('找新女朋友',a)}
function saveMoney(a) {console.log('省钱',a)}
man.on('失恋',findGirl);
man.removeListener('失恋',findGirl);
man.emit('失恋',1);
