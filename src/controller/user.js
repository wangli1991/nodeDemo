/*
 * @Author: wangli
 * @Date: 2020-05-18 15:29:43
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-20 08:39:51
 */
const { exec } = require("../db/mysql");
const login = (username, password) => {
  let sql = `select*from users where username='${username}' and password=${password}`;
  return exec(sql).then((usersData) => {
    return usersData[0] || {};
  });
};
module.exports = { login };
