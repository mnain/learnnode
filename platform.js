var os = require('os');

console.log("userInfo: ",os.userInfo());
console.log("arch: "+os.arch());
console.log("cpus : ",os.cpus());
console.log("host : "+os.hostname());
console.log("totalmem : "+os.totalmem());
console.log("freemem : "+os.freemem());
console.log("platform : "+os.platform());
console.log("type : "+os.type());
console.log("uptime : "+os.uptime());
// console.log(os.constants);
