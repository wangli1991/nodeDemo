/*
 * @Author: wangli
 * @Date: 2020-05-18 13:47:04
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-18 16:47:36
 */
const { loginCheck } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const handleUserRouter = (req, res) => {
  const method = req.method;
  const path = req.path;
  const query = req.query;
  //登录接口
  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    if (result) {
      return new SuccessModel("登陆成功");
    } else {
      return new ErrorModel("登陆失败");
    }
  }
};
module.exports = handleUserRouter;
