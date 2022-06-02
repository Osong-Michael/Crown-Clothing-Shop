import { createSelector } from 'reselect';

const selectedCollectionsReducer = state => state.collectionsStore;

export const selectCollections = createSelector(
    [selectedCollectionsReducer],
    (collectionsSlice) => collectionsSlice.collections
);

export const selectCollectionItems = createSelector(
    [selectCollections],
    (arr) => arr.reduce((acc, collection) => {
        const { title, items } = collection
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);

export const selectCollectionIsLoading = createSelector(
    [selectCollections],
    (collectionSlice) => collectionSlice.isLoading
)