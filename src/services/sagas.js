import { call, put, takeLatest } from 'redux-saga/effects';
import { types, actions } from './actions';
import api from './api'

const getGqlToken = function* ({ payload }) {
    const res = yield call(api.getToken);
    console.log(res)
    if (res) {
             localStorage.setItem(
                'gqlToken',`${res.access_token}`
            );

        yield put(actions.getGqlTokenSuccess(res))
    } else {
        yield put(actions.getGqlTokenFail())
    }
}




const watcher = function* () {
   yield takeLatest(types.GET_GQL_TOKEN, getGqlToken)
}

export default watcher()

