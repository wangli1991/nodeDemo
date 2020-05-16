/**
 * @Author: 王利 
 * @Date: 2020-05-15 08:53:48 
 * @Last Modified by: 王利
 * @Last Modified time: 2020-05-15 09:08:19
 **/
const getBlogList = (author, keyword) => {
  // 返回假数据
  return [
    {
      id: 1,
      author: '张一',
      title: '博客1',
      content: '博客内容1',
      createtime: Date.now()
    }, {
      id: 2,
      author: '张二q',
      title: '博客2',
      content: '博客内容2',
      createtime: Date.now()
    }
  ]
}
const getBlogDetail = (id) => {
  // 返回假数据
  return [
    {
      id: 1,
      author: '张一',
      title: '博客1',
      content: '博客内容1',
      createtime: Date.now()
    }
  ]
}
module.exports = { getBlogList }