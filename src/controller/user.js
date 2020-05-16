/*
 * @Author: wangli
 * @Date: 2020-05-18 15:29:43
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-18 16:46:38
 */
const loginCheck = (username, password) => {
  if (username === "a" && password === "123") {
    return true;
  }
  return false;
};
module.exports = { loginCheck };
