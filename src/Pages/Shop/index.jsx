import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import CollectionsPreview from '../ColletionsPreview';
import Collection from '../Collection';

const ShopPage = () => {
    return (
        <Fragment>
            <Routes>
                <Route index element={ <CollectionsPreview /> } />
                <Route path=':collection' element={ <Collection /> } />
            </Routes>
        </Fragment>
    )
};


export default ShopPage;