import { takeLatest, put, call } from 'redux-saga/effects'
import { deletePostInApi } from '../../services/posts'
import navigateTo from '../../services/navigation'

function* deletePost(action) {
  yield put({ type: 'DELETE_POST_PENDING', id: action.id})
  try {
    const result = yield call(deletePostInApi, action.id)
    console.log(result)
    // if (count !== 1) throw new Error('Api delete request failed')
    yield put( { type: 'DELETE_POST_SUCCESS', id: action.id })
  } catch (error) {
    yield put( {type: 'DELETE_POST_FAILURE'})
    console.log(error)
    yield put(navigateTo('/error'))
  }
}

export default function* watchDeletePost() {
  yield takeLatest('DELETE_POST', deletePost)
}