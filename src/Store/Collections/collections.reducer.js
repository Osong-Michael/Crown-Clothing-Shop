import { COLLECTION_ACTION_TYPES } from "./collections.types";
const INITIAL_STATE = {
    collections: {},
};


export const collectionsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case COLLECTION_ACTION_TYPES.SET_ALL_COLLECTIONS:
            return {
                ...state,
                collections: payload,
            };

        default:
            return state;
    }
};