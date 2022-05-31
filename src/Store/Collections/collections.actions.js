import { COLLECTION_ACTION_TYPES } from './collections.types';
import { createAction } from '../../Helpers/reducerHelper';


export const setAllCollections = (payload) => createAction(COLLECTION_ACTION_TYPES.SET_ALL_COLLECTIONS, payload);