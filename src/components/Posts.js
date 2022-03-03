import React from 'react'

export const Posts = ({loading, posts}) => {
    return <>
        <ul id="posts">
                {
                    posts.map(post => (
                        <li key={post.id}>
                            <h4 className="post-title">{post.title}</h4>
                            <p className="post-body">{post.body}</p>
                        </li>
                    ))
                }
            </ul>
    </>
    
    
}
