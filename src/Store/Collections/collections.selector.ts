import { createSelector } from 'reselect';

import { CollectionsState } from './collections.reducer';
import { CollectionMap } from './collections.types';

const selectedCollectionsReducer = (state): CollectionsState => state.collectionsStore;

export const selectCollections = createSelector(
    [selectedCollectionsReducer],
    (collectionsSlice) => collectionsSlice.collections
);

export const selectCollectionItems = createSelector(
    [selectCollections],
    (arr): CollectionMap => arr.reduce((acc, collection) => {
        const { title, items } = collection
        acc[title.toLowerCase()] = items;
        return acc;
    }, {} as CollectionMap)
);

export const selectCollectionIsLoading = createSelector(
    [selectCollections],
    (collectionSlice) => collectionSlice.isLoading
)