import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getCollectionsAndDocuments } from '../../firebase/firebase.utils';

import { setAllCollections } from '../../Store/Collections/collections.actions'

import CollectionsPreview from '../ColletionsPreview';
import Collection from '../Collection';

const ShopPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCollectionsMap = async () => {
            const collectionMap = await getCollectionsAndDocuments();

            dispatch(setAllCollections(collectionMap));
        };

        getCollectionsMap();
    }, []);

    return (
        <Routes>
            <Route index element={ <CollectionsPreview /> } />
            <Route path=':collection' element={ <Collection /> } />
        </Routes>
    )
};


export default ShopPage;