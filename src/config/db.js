/*
 * @Author: wangli
 * @Date: 2020-05-19 09:05:36
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-19 11:15:03
 */
// 环境参数
const env = process.env.NODE_ENV;
//配置
let MYSQL_CONF;
// 本地环境
if (env === "dev") {
  // mysql 配置
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "node_study",
    port: 3306,
  };
}
//生产环境
if (env === "production") {
  // mysql 配置
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "node_study",
    port: 3306,
  };
}
module.exports = { MYSQL_CONF };
