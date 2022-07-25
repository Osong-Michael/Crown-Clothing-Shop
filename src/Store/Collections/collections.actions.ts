import { COLLECTION_ACTION_TYPES, Collection } from './collections.types';
import { createAction, Action, ActionWithPayload, withMatcher } from '../../Helpers/reducerHelper';


export type FetchCollectionsStart = Action<COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START>;

export type FetchCollectionsSuccess = ActionWithPayload<COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS, Collection[]>;

export type FetchCollectionsFail = ActionWithPayload<COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_FAIL, Error>;


export const fetchCollectionsStart = withMatcher((): FetchCollectionsStart =>
    createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START));

export const fetchCollectionsSuccess = withMatcher((payload: Collection[]): FetchCollectionsSuccess =>
    createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS, payload));

export const fetchCollectionsFail = withMatcher((error: Error): FetchCollectionsFail =>
    createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_FAIL, error));
