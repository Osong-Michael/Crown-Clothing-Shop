import { AnyAction } from "redux";
import { Collection } from "./collections.types";
import { fetchCollectionsStart, fetchCollectionsSuccess, fetchCollectionsFail } from "./collections.actions";

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


export const collectionsReducer = (state = INITIAL_STATE, action: AnyAction): CollectionsState => {
    if(fetchCollectionsStart.match(action)) {
        return {
            ...state,
            isLoading: true,
        };
    };

    if(fetchCollectionsSuccess.match(action)) {
        return {
            ...state,
            isLoading: false,
            collections: action.payload,
        };
    };

    if(fetchCollectionsFail.match(action)) {
        return {
            ...state,
            isLoading: false,
            error: action.payload,
        };
    };

    return state;
};