import React from 'react'

export default ({ post }) => {
    const { id = '', image = '', title = '', tags = [], published = '', key = '' } = { ...post };
    return (<div className={'post-card'}>
                <img className={'post-image'} alt={`${key}-${id}`} src={image}/>
                <p className={'post-card-title'}>{title}</p>
                <p className={'post-card-subtitle'}>{`${(tags || []).join(', ')}`}  &middot; {published}</p>
            </div>)
}