/*
 * @Author: wangli
 * @Date: 2020-05-18 13:47:45
 * @Last Modified by: wangli
 * @Last Modified time: 2020-05-18 16:47:11
 */
const getBlogList = (author, keyword) => {
  // 返回假数据
  return [
    {
      id: 1,
      author: "张一",
      title: "博客1",
      content: "博客内容1",
      createtime: Date.now(),
    },
    {
      id: 2,
      author: "张二q",
      title: "博客2",
      content: "博客内容2",
      createtime: Date.now(),
    },
  ];
};
const getBlogDetail = (id) => {
  // 返回假数据
  return [
    {
      id: id,
      author: "张一",
      title: "博客1",
      content: "博客内容1",
      createtime: Date.now(),
    },
  ];
};
const newBlog = (blogData) => {
  // 返回假数据
  return [
    {
      id: 3,
      author: blogData.author,
      title: blogData.title,
      content: blogData.content,
      createtime: Date.now(),
    },
  ];
};
const delBlog = (id) => {
  return true;
};
const updateBlog = (id) => {
  return true;
};
module.exports = { getBlogList, getBlogDetail, newBlog, delBlog, updateBlog };
