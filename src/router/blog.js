/*
 * @Author: wangli
 * @Date: 2020-05-18 13:35:39
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-18 15:40:08
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
  // 获取博客列表接口
  if (method === "GET" && path === "/api/blog/list") {
    const author = query.author;
    const keyword = query.keyword;
    const listData = getBlogList(author, keyword);
    return new SuccessModel(listData);
  }
  // 获取博客详情接口
  if (method === "GET" && path === "/api/blog/detail") {
    const detailData = getBlogDetail(query.id);
    return new SuccessModel(detailData);
  }
  // 新增博客接口
  if (method === "POST" && path === "/api/blog/new") {
    const data = newBlog(req.body);
    return new SuccessModel(data);
  }
  // 删除博客接口
  if (method === "POST" && path === "/api/blog/del") {
    const result = delBlog(req.id);
    if (result) {
      return new SuccessModel("删除博客成功");
    } else {
      return new ErrorModel("删除博客失败");
    }
  }
  // 更新博客接口
  if (method === "POST" && path === "/api/blog/update") {
    const result = updateBlog(req.id);
    if (result) {
      return new SuccessModel("博客更新成功");
    } else {
      return new ErrorModel("博客更新失败");
    }
  }
};
module.exports = handleBlogRouter;
