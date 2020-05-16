const { getBlogList } = require('../controller/blog')
const { SuccessModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
  const method = req.method;
  const path = req.path
  const query = req.query
  //获取博客列表接口
  if (method === 'POST' && path === '/api/blog/list') {
    const author = query.author
    const keyword = query.keyword
    const listData = getBlogList(author, keyword)
    return new SuccessModel(listData)
  }
  //获取博客详情接口
  if (method === 'GET' && path === '/api/blog/detail') {
    return {
      msg: '这是获取博客详情的接口'
    }
  }
  //新增博客接口
  if (method === 'POST' && path === '/api/blog/new') {
    return {
      msg: '这是新增博客的接口'
    }
  }
  //删除博客接口
  if (method === 'POST' && path === '/api/blog/del') {
    return {
      msg: '这是删除博客的接口'
    }
  }
  //更新博客接口
  if (method === 'POST' && path === '/api/blog/update') {
    return {
      msg: '这是更新博客的接口'
    }
  }
}
module.exports = handleBlogRouter;