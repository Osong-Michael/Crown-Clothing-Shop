import { createSelector } from 'reselect';

import { CollectionsState } from './collections.reducer';
import { CollectionMap } from './collections.types';
import { RootState } from '../store';

const selectedCollectionsReducer = (state: RootState): CollectionsState => state.collectionsStore;

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
    [selectedCollectionsReducer],
    (collectionSlice) => collectionSlice.isLoading
)