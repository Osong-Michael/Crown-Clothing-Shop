import { all, call } from 'redux-saga/effects';
import { collectionsSaga } from './Collections/collections.saga';
import { userSagas } from './User/user.saga';


export function* rootSaga() {
     yield all([call(collectionsSaga), call(userSagas)]);
};

