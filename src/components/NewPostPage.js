import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createPost } from '../actions/posts'
import navigateTo from '../services/navigation'
import PostForm  from './PostForm'

import type { Connector } from 'react-redux'
import type { PostPayload as Payload} from '../types/posts'

type Props = {
  createPost(payload: Payload): void
}

class NewPostPage extends Component<Props> {
  handleSubmit = (payload: Payload) => {
    this.props.createPost(payload)
    navigateTo("/home")
  }
      
  
  render() {
    return (
      <div>
        <h2>Create New Post</h2>
        <PostForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const connector: Connector<{}, Props> = connect(null, { createPost }) 
export default connector(NewPostPage)
