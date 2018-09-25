let url = require('url');
// /([^?&=]+)=([^?&=]+)/g
let {query:Query,pathname} = url.parse('https://username:password@ke.qq.com/user/tasks/index.html?cid=189623#tid=100224588&fr=2',true);
console.log(Query)
/*
obj.query;
obj.pathname;*/
