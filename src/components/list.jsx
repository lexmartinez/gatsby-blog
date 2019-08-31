import React from 'react'
import PostCard from './post'

export default ({ posts = [] }) => {
    return (<div className={'post-list'}>
    {
        posts.map((post, idx) => {
            const { id = '' } = { ...post }
            return (<PostCard post={post} key={`${id || idx}`}/>)
        })
    }
    </div>)
}