/*
 * @Author: wangli
 * @Date: 2020-05-18 13:47:13
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-18 14:56:47
 */
const http = require("http");
const PORT = 8888;
const serverHandle = require("../server");
const server = http.createServer(serverHandle);
server.listen(PORT);
console.log("ok");
