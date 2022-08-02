export enum COLLECTION_ACTION_TYPES {
    FETCH_COLLECTIONS_START = 'collections/FETCH_COLLECTIONS_START',
    FETCH_COLLECTIONS_SUCCESS = 'collections/FETCH_COLLECTIONS_SUCCESS',
    FETCH_COLLECTIONS_FAIL = 'collections/FETCH_COLLECTIONS_FAIL',
};


export type CollectionItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
};


export type Collection = {
    title: string;
    imageUrl: string;
    items: CollectionItem[];
};

export type CollectionMap = {
    [key: string]: CollectionItem[];
};