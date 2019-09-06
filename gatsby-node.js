const axios = require('axios');
const crypto = require('crypto');

const fetchPosts = () => axios.get('https://dev.to/api/articles?username=lexmartinez');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const res = await fetchPosts();

  res.data.map((post) => {
    const postNode = {
      id: `${post.id}`,
      parent: '__SOURCE__',
      internal: {
        type: `Post`
      },
      title: post.title,
      abstract: post.description,
      image: post.cover_image,
      published: new Date(post.published_at),
      tags: post.tag_list,
      key: post.slug,
      url: post.url
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