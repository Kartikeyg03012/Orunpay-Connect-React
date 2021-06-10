import { takeEvery, call, put } from 'redux-saga/effects'
import { types } from '../types'
import { fetchDataSuccess } from '../actions'

import axios from 'axios'

function* ayscFetchRequest(action) {
    try {
        const url = `https://orunpay-api.herokuapp.com/v1`
        const response = yield call(() => axios.get(url))
        console.log(action.payload);
        console.log(response);
        yield put(fetchDataSuccess(response.data.ip))
    }
    catch (error) {
        console.log(error);
    }
}

export function* watchFetchDataSaga() {

    yield takeEvery(types.SEND_REQUEST, ayscFetchRequest)
}