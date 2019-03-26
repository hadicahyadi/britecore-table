const fernet = require('./node_modules/fernet')

let arr = [ 104, 116, 116, 112, 115, 58, 47, 47, 101, 110, 103, 105, 110, 101, 101, 114, 105, 110, 103, 45, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 46, 98, 114, 105, 116, 101, 99, 111, 114, 101, 46, 99, 111, 109, 47, 113, 117, 105, 122, 47, 115, 97, 97, 115, 100, 97, 115, 100, 108, 102, 108, 102, 108, 115 ];
let tmp = arr.map(function(a) { return String.fromCharCode(a)});
let tmpStr = tmp.toString();
let tmpAfter = tmpStr.replace(/,/g, '')
console.log(tmpAfter)

let secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=')
// Oh no! The code is going over the edge! What are you going to do?
let message = 'gAAAAABcJI7Nlixa9KMQDKalMHzTMGIKVAgYVe6aX8qtb6YcObCbSiNhpUYYygmW6pBjjSWVsHyvHQ4Qb0p5FSEiyIdmbmei2LOuT6cHFb-8PgTMobq7rF89b1RkduVfHjbZJ_WJAkb8T-1SiDdKVwWIyoRj8KlkM4HOelhACWukBcELP9R38W4TcIoeNjuFlPkuJO1H0qfw'
let token = new fernet.Token({secret: secret, token: message, ttl:0})
let result = token.decode()
console.log(result)
