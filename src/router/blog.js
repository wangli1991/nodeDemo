/*
 * @Author: wangli
 * @Date: 2020-05-18 13:35:39
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-19 16:46:19
 */
const {
  getBlogList,
  getBlogDetail,
  newBlog,
  delBlog,
  updateBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const path = req.path;
  const query = req.query;
  const id = query.id;
  // 获取博客列表接口
  if (method === "GET" && path === "/api/blog/list") {
    const author = query.author || "";
    const keyword = query.keyword || "";
    const result = getBlogList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }
  // 获取博客详情接口
  if (method === "GET" && path === "/api/blog/detail") {
    const id = query.id;
    const result = getBlogDetail(id);
    return result.then((detailData) => {
      return new SuccessModel(detailData);
    });
  }
  // 新增博客接口
  if (method === "POST" && path === "/api/blog/new") {
    req.body.author = "张三";
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }
  // 删除博客接口
  if (method === "POST" && path === "/api/blog/del") {
    req.body.author = "张三";
    const result = delBlog(req.body);
    return result.then((data) => {
      if (data) {
        return new SuccessModel("删除博客成功");
      } else {
        return new ErrorModel("删除博客失败");
      }
    });
  }
  // 更新博客接口
  if (method === "POST" && path === "/api/blog/update") {
    req.body.author = "张三";
    const result = updateBlog(req.body);
    return result.then((data) => {
      console.log(data);
      if (data) {
        return new SuccessModel("博客更新成功");
      } else {
        return new ErrorModel("博客更新失败");
      }
    });
  }
};
module.exports = handleBlogRouter;
