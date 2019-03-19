
import { all } from 'redux-saga/effects'
import { watchFetchPostsIfNeeded, watchFetchPosts } from './posts/fetch'
import watchCreatePost  from './posts/create'
import watchUpdatePost  from './posts/update'
import watchDeletePost  from './posts/delete'

export default function* rootSaga() {
  yield all([
    watchFetchPostsIfNeeded(),
    watchFetchPosts(),
    watchCreatePost(),
    watchUpdatePost(),
    watchDeletePost()
  ])
}