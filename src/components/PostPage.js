import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentPost } from '../selectors/posts';

import type { Connector } from 'react-redux'
import type { State } from '../types'
import type { Post } from '../types/posts'

type Props = {
  post: Post
}

type OwnProps = {
  match: {
    params: {
      id: number
    }
  }
}

const PostPage = ( {post}: Props) => {
  return (
    <div>
      { post && (
        <div>
          <h2>{post.title}</h2>
          <div>{post.body}</div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  const post = selectCurrentPost(state, Number(ownProps.match.params.id))
  return {
    post
  }
}

const connector: Connector<Props, OwnProps> = connect(mapStateToProps)
export default connector(PostPage)