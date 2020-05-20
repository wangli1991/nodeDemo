/*
 * @Author: wangli
 * @Date: 2020-05-18 11:16:59
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-20 08:45:29
 */
const url = require("url");
const util = require("util");
const querystring = require("querystring");
const handleUserRouter = require("./src/router/user");
const handleBlogRouter = require("./src/router/blog");
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (
      req.method !== "POST" ||
      req.headers["content-type"] !== "application/json"
    ) {
      resolve({});
      return;
    }
    // 定义了一个postData变量，用于暂存请求体的信息
    let postData = "";
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到postData变量中
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    // end事件
    req.on("end", function () {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
  return promise;
};

const serverHandle = (req, res) => {
  // 设置返回格式为 JSON
  res.setHeader("Content-type", "application/json");
  //获取path
  req.path = url.parse(req.url, true).pathname;
  //解析query
  req.query = url.parse(req.url, true).query;
  //解析cookie
  // 服务器端读取cookie
  req.cookie = {};
  let cookies = req.headers.cookie ? req.headers.cookie.split(";") : [];
  if (cookies.length > 0) {
    cookies.forEach((item) => {
      if (item) {
        let cookieArray = item.split("=");
        if (cookieArray && cookieArray.length > 0) {
          let key = cookieArray[0].trim();
          let value = cookieArray[1] ? cookieArray[1].trim() : undefined;
          req.cookie[key] = value;
        }
      }
    });
  }
  //处理 post data
  getPostData(req).then((postData) => {
    //设置body
    req.body = postData;
    // 处理user路由
    const userResult = handleUserRouter(req, res);
    if (userResult) {
      userResult.then((userData) => {
        res.end(JSON.stringify(userData));
      });
      return;
    }
    // 处理blog路由
    const blogResult = handleBlogRouter(req, res);
    if (blogResult) {
      blogResult.then((blogData) => {
        res.end(JSON.stringify(blogData));
      });
      return;
    }
    // const blogData = handleBlogRouter(req, res);
    // if (blogData) {
    //   res.end(JSON.stringify(blogData));
    //   return;
    // }

    // 未命中路由 返回404
    res.writeHead(404, { "Content-type": "text/plan" });
    res.write("404 Not Found");
    res.end();
  });
};
module.exports = serverHandle;
