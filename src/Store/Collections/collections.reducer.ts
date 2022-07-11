import { Collection, COLLECTION_ACTION_TYPES } from "./collections.types";
import { CollectionAction } from "./collections.actions";

export type CollectionsState = {
    readonly collections: Collection[];
    readonly isLoading: boolean;
    readonly error: Error | null;
};


const INITIAL_STATE: CollectionsState = {
    collections: [],
    isLoading: false,
    error: null,
};


export const collectionsReducer = (state = INITIAL_STATE, action = {} as CollectionAction) => {

    switch(action.type) {
        case COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isLoading: true,
            };
        case COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isLoading: false,
            };
        case COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }

        default:
            return state;
    }
};