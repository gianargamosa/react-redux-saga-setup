import { takeLatest, put, call, select } from 'redux-saga/effects'
import { fetchPostsFromApi } from '../../services/posts'
import { selectPosts } from '../../selectors/posts'
// import navigateTo from '../../services/navigation'

function* fetchPosts() {
  yield put( { type: 'FETCH_POSTS_PENDING'} )
  try {
    const posts = yield call(fetchPostsFromApi)
    console.log(posts)
    yield put({ type: 'FETCH_POSTS_SUCCESS', payload: posts })

  } catch (e) {
    yield put( {type: 'FETCH_POSTS_FAILURE'} )
    console.log(e)
  }
}

export function* watchFetchPosts() {
  yield takeLatest('FETCH_POSTS', fetchPosts)
}

function* fetchPostsIfNeeded() {
  const { items: posts } = yield select(selectPosts)
  if (posts.length === 0) {
    yield call(fetchPosts)
  }
}
  
export function* watchFetchPostsIfNeeded() {
  yield takeLatest('FETCH_POSTS_IF_NEEDED', fetchPostsIfNeeded)
}
