import { COLLECTION_ACTION_TYPES } from './collections.types';
import { createAction } from '../../Helpers/reducerHelper';


export const fetchCollectionsStart = () => createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START);

export const fetchCollectionsSuccess = payload => createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS, payload);

export const fetchCollectionsFail = error => createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_FAIL, error);
