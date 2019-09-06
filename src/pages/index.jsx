import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { PostList } from '../components/Post'

export default ({ data }) => {
  const { site = {}, allPost = {} } = { ...data }
  const { siteMetadata: metadata = {} } = { ...site }
  const { title = '' } = { ...metadata }
  const { nodes: posts = [] } = { ...allPost }
  return (
      <div>
        <Helmet>
          <meta charSet={'utf-8'}/>
          <title>{title}</title>
        </Helmet>
        <div className={'section-title'}>Dev.to posts</div>
        <PostList posts={posts}/>
      </div>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allPost {
      nodes {
        id
        key
        published(formatString: "MMM DD, YYYY")
        tags
        title
        image
        url
      }
    }
  }
`