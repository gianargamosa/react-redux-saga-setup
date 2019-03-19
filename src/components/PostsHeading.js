// @flow

import React from 'react'
import type { Posts } from '../types/posts'

type Props = {
  loading: boolean,
  posts: Posts,
  onNewPost: () => void,
  onReloadPosts: () => void
}

export default function PostsHeading({
  loading,
  posts,
  onNewPost,
  onReloadPosts
}: Props) {
  return (
    <div>
      <div className="posts-heading">
        <h2 className="posts-heading-title">Posts</h2>
        <button
          className="btn posts-heading-btn"
          onClick={onNewPost}
          disabled={loading}
        >
          New Post
        </button>
        <button
          className="btn posts-heading-btn"
          onClick={onReloadPosts}
          disabled={loading || posts.length === 0}
        >
          Reload Posts
        </button>
      </div>
    </div>
  )
}