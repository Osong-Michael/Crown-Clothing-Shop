import { COLLECTION_ACTION_TYPES } from './collections.types';
import { createAction } from '../../Helpers/reducerHelper';
import { getCollectionsAndDocuments } from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START);

export const fetchCollectionsSuccess = payload => createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS, payload);

export const fetchCollectionsFail = error => createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_FAIL, error);

export const fetchCollectionsAsync = () => async dispatch => {
    dispatch(fetchCollectionsStart());

    try {
        const collectionArray = await getCollectionsAndDocuments();
        dispatch(fetchCollectionsSuccess(collectionArray));
    } catch (error) {
        dispatch(fetchCollectionsFail(error))
    };
};