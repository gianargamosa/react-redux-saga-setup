// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import type { Posts } from '../types/posts'

type Props = {
  loading: boolean,
  posts: Posts,
  url: string,
  onEditPost: (id: number) => void,
  onDeletePost: (id: number) => void
}

export default function PostsList(props: Props) {
  const { loading, url, posts, onEditPost, onDeletePost } = props

  if (loading) return <p>Loading...</p>
  if (posts.length === 0) return <div>No Posts</div>

  return (
    <ul>
      { posts.map(post => (
        <li key={post.id}>
          <Link to={`${url}/${post.id}`}>
            {post.title}
          </Link>
      
          <button title="Edit" onClick={()=> onEditPost(post.id)}>
            Edit
          </button>
          <button title="Delete" onClick={() => onDeletePost(post.id)}>
            Delete
          </button>
        </li>
      )) }
    </ul>
  )
}
