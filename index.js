var crypto = require('crypto')//加密模块
var md5 = crypto.createHash('md5');//引入md5加密
var apikey = "ecde8ce10c0148e7920dea692346fc2a";
var secretKey = "7086d528bc6f4a10823a341f62a30b76";
var time = new Date().getTime();
var addStr = apikey + secretKey + time;
var md5Str = md5.update(addStr).digest('hex')
var jsonStr = '{"apiKey": "'+apikey+'","time": "'+time+'","sign":"'+md5Str+'"}'
var finalStr = new Buffer(jsonStr).toString('base64')

console.log("获取的时间戳:  "+time);
console.log("拼接后的字符串:  "+addStr);
console.log("md5加密:  "+md5Str)
console.log("json字符串:  "+jsonStr)
console.log("base64编码后字符串:  "+finalStr)
