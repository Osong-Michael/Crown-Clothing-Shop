import { COLLECTION_ACTION_TYPES, Collection } from './collections.types';
import { createAction, Action, ActionWithPayload } from '../../Helpers/reducerHelper';


export type FetchCollectionsStart = Action<COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START>;
export type FetchCollectionsSuccess = ActionWithPayload<COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS, Collection[]>;
export type FetchCollectionsFail = ActionWithPayload<COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_FAIL, Error>;

export type CollectionAction = FetchCollectionsStart | FetchCollectionsSuccess | FetchCollectionsFail;


export const fetchCollectionsStart = (): FetchCollectionsStart =>
    createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START);

export const fetchCollectionsSuccess = (payload: Collection[]): FetchCollectionsSuccess =>
    createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS, payload);

export const fetchCollectionsFail = (error: Error): FetchCollectionsFail =>
    createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_FAIL, error);
