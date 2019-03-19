// @flow

import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_POSTS_IF_NEEDED,
  FETCH_POSTS
} from './types'

import type { PostPayload as Payload} from '../types/posts'

export function fetchPostsIfNeeded() {
  return {
    type: FETCH_POSTS_IF_NEEDED
  }
}

export function fetchPosts() {
  return {
    type: FETCH_POSTS
  }
}

export function createPost(payload: Payload) {
  return {
    type: CREATE_POST,
    payload
  }
}

export function updatePost(payload: Payload) {
  return {
    type: UPDATE_POST,
    payload
  }
}

export function deletePost(id: number) {
  return {
    type: DELETE_POST,
    id
  }
}