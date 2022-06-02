import { COLLECTION_ACTION_TYPES } from "./collections.types";
const INITIAL_STATE = {
    collections: [],
    isLoading: false,
    error: null,
};


export const collectionsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isLoading: true,
            };
        case COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: payload,
                isLoading: false,
            };
        case COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }

        default:
            return state;
    }
};