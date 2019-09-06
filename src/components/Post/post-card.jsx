import React from 'react'

export default ({ post }) => {
    const { id = '', image = '', title = '', tags = [], published = '', key = '', url = ''} = { ...post };
    return (<a href={url} target={'_blank'}>
                <div className={'post-card'}>
                    <img className={'post-image'} alt={`${id}-${key}`} src={image}/>
                    <div className={'post-info'}>
                        <p className={'post-card-title'}>{title}</p>
                        <p className={'post-card-subtitle'}>{`${(tags || []).join(', ')}`}  &middot; <span className={'post-card-date'}>{published}</span></p>
                    </div>
                </div>
            </a>)
}