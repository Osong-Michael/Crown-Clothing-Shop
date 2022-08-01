import { all, call } from 'typed-redux-saga/macro';
import { collectionsSaga } from './Collections/collections.saga';
import { userSagas } from './User/user.saga';


export function* rootSaga() {
     yield* all([call(collectionsSaga), call(userSagas)]);
};

