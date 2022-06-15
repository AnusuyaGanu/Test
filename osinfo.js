const os = require('os')
const user = os.userInfo();


console.log(user['username']);
console.log(os.uptime());


const osinfo = {
  name : os.type(),
  version : os.version(),
  uptime : os.uptime(),
  release : os.release(),
  totalMem : os.totalmem(),
  freeMem : os.freemem()
}
console.log(osinfo);