const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  const fetchPosts = () => axios.get('https://hapi-blog.herokuapp.com/v1/articles?limit=10&offset=0');
  const res = await fetchPosts();

  res.data.map((post, i) => {
    const postNode = {
      id: `${post.id}`,
      parent: '__SOURCE__',
      internal: {
        type: `Post`
      },
      title: post.title,
      abstract: post.abstract,
      content: post.content,
      image: post.imageUrl,
      published: new Date(post.publishedAt),
      tags: post.tags.map((tag) => tag.name ),
      key: post.key
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(postNode))
      .digest(`hex`);
    postNode.internal.contentDigest = contentDigest;

    createNode(postNode);
  });

  return;
}