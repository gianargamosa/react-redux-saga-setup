import { takeLatest, put, call } from 'redux-saga/effects'
import { updatePostInApi } from '../../services/posts'
import navigateTo from '../../services/navigation'

function* updatePost(action) {
  yield put({ type: 'UPDATE_POST_PENDING'})
  try {
    const updatedPost = yield call(updatePostInApi, action.payload)
    yield put( { type: 'UPDATE_POST_SUCCESS', payload: updatedPost })
    navigateTo('/home/posts')
  } catch (error) {
    yield put( {type: 'UPDATE_POST_FAILURE'})
    console.log(error)
    yield put(navigateTo('/error'))
  }
}

export default function* watchUpdatePost() {
  yield takeLatest('UPDATE_POST', updatePost)
}