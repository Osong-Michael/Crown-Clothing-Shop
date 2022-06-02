import { createSelector } from 'reselect';

const selectedCollectionsReducer = state => state.collectionsStore;

export const selectCollections = createSelector(
    [selectedCollectionsReducer],
    (collectionsSlice) => collectionsSlice.collections
);

export const formatCollectionsData = createSelector(
    [selectCollections],
    (arr) => arr.reduce((acc, collection) => {
        const { title, items } = collection
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);