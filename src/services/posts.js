import {
    Post,
    Posts
  } from '../types/posts'
  
  import service from './Api'
  
  export function fetchPostsFromApi(): Promise <Posts> {
    return service.get('/posts')
  }
  
  export function fetchPostFromApi(id: number): Promise <Post> {
    return service.get(`/post/${id}`)
  }
  
  export function createPostInApi(payload: Post): Promise <Post> {
    return service.post('/posts', payload)
  }
  
  export function deletePostInApi(id: number): Promise <number> {
    return service.delete(`/posts/${id}`)
  }
  
  export function updatePostInApi(payload: Post): Promise <Post> {
    const {
      id,
      ...rest
    } = payload
    return service.patch(`/posts/${id}`, rest)
  }