/*
 * @Author: wangli
 * @Date: 2020-05-18 13:47:04
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-20 09:10:34
 */
const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const handleUserRouter = (req, res) => {
  const method = req.method;
  const path = req.path;
  const query = req.query;
  const cookie = req.cookie;
  //登录接口
  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    const result = login(username, password);
    console.log(cookie);
    return result.then((data) => {
      if (data.username) {
        return new SuccessModel(data, "登陆成功");
      } else {
        return new ErrorModel("登陆失败");
      }
    });
  }
  //登陆验证测试
  if (method === "GET" && path === "/api/user/login-test") {
    const { username, password } = query;
    const result = login(username, password);
    console.log(cookie);
    return result.then((data) => {
      if (cookie.username) {
        //操作cookie
        res.setHeader(
          "Set-Cookie",
          `username=${data.username};path=/;httpOnly;expires=${getExpireTime()}`
        );
        return new SuccessModel(data, "登陆成功");
      } else {
        return new ErrorModel("登陆失败");
      }
    });
  }
};
//设置cookie过期时间
const getExpireTime = () => {
  let d = new Date();
  d.setTime(d.getTime() + 15 * 60 * 1000);
  return d.toUTCString();
};
module.exports = handleUserRouter;
