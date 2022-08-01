import { takeLatest, all, call, put } from 'typed-redux-saga/macro';
import { getCollectionsAndDocuments } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFail } from './collections.actions';
import { COLLECTION_ACTION_TYPES } from './collections.types';


export function* fetchCollectionsAsync() {
    try {
        const collectionArray = yield* call(getCollectionsAndDocuments);
        yield* put(fetchCollectionsSuccess(collectionArray));
    } catch (error) {
        yield* put(fetchCollectionsFail(error as Error))
    };
}


export function* onFetchCollections() {
    yield* takeLatest(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* collectionsSaga() {
    yield* all([call(onFetchCollections)])
}