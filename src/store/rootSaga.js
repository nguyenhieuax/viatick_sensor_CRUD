import { all } from 'redux-saga/effects'

import saga from '../services/sagas';
export default function* rootSaga() {
    yield all([
        saga
    ])
}
