// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updatePost } from '../actions/posts'
import PostForm from './PostForm'
import { selectCurrentPost } from '../selectors/posts'
import navigateTo from '../services/navigation';

import type { Connector } from 'react-redux'
import type { State } from '../types'
import type { Post, PostPayload as Payload } from '../types/posts'

type Props = {
  post: Post,
  updatePost(payload: Payload): void
}

type OwnProps = {
  match: {
    params: {
      id: number
    }
  }
}

class EditPostPage extends Component<Props> {
  handleSubmit = (payload: Payload) => {
    const { id } = this.props.post
    payload = { ...payload, id }
    this.props.updatePost(payload)
    navigateTo('/home')
  }
  render() {
    const { post } = this.props
    console.log(post)
    return (
      <div>
        <h2>Edit Post</h2>
        { post && <PostForm post={post} onSubmit={this.handleSubmit} />}
      </div>
    )
  }
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  const post = selectCurrentPost(state, Number(ownProps.match.params.id))
  return {
      post
  }
}

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, { updatePost })
export default connector(EditPostPage)
