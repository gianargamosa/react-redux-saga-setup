import { takeLatest, put, call } from 'redux-saga/effects'
import { createPostInApi } from '../../services/posts'
import navigateTo from '../../services/navigation'

function* createPost(action) {
  yield put({ type: 'CREATE_POST_PENDING'})
  try {
    const newPost = yield call(createPostInApi, action.payload)
    yield put( { type: 'CREATE_POST_SUCCESS', payload: newPost })
    navigateTo('/home/posts')
  } catch (error) {
    yield put( {type: 'CREATE_POST_FAILURE'})
    console.log(error)
    yield put(navigateTo('/error'))
  }
}

export default function* watchCreatePost() {
  yield takeLatest('CREATE_POST', createPost)
}