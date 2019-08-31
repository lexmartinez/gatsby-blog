import React from 'react'
import PostList from '../components/list'
const posts = [
  { 
    id: 5,
    title: 'Announcing Vue Github Activity: A Vue.js Component to include a github feed into your project/website',
    image: 'https://images.pexels.com/photos/6076/wood-road-forest-path.jpg?auto=compress&cs=tinysrgb&dpr=2&h=5013&w=4634',
    key: 'vue-github-activity',
    published: '2018-04-29T20:59:58.000Z',
    tags: [ 'component', 'vuejs', 'github' ]
  }
]
  
export default () => {
  return (
      <div>
        <div className={'section-title'}>Recents posts</div>
        <PostList posts={posts}/>
      </div>
  );
};