/*
 * @Author: wangli
 * @Date: 2020-05-18 15:29:43
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-19 16:07:33
 */
const { exec } = require("../db/mysql");
const loginCheck = (username, password) => {
  let sql = `select*from users where username='${username}' and password=${password}`;
  return exec(sql).then((usersData) => {
    return usersData[0] || {};
  });
};
module.exports = { loginCheck };
