/*
 * @Author: wangli
 * @Date: 2020-05-18 13:46:48
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-19 10:54:11
 */
class BaseModel {
  constructor(data, msg) {
    if (typeof data === "string") {
      this.msg = data;
      data = null;
      msg = null;
    }
    if (data) {
      this.data = data;
    }
    if (msg) {
      this.msg = msg;
    }
  }
}
class SuccessModel extends BaseModel {
  constructor(data, msg) {
    super(data, msg);
    this.status = "S";
  }
}
class ErrorModel extends BaseModel {
  constructor(data, msg) {
    super(data, msg);
    this.code = "E";
  }
}
module.exports = {
  SuccessModel,
  ErrorModel,
};
