import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../../Components/CollectionPreview';

const CollectionsPreview = () => {
    const { collections } = useSelector(state => state.collectionsStore);
    return (
        <Fragment>
            {
                Object.keys(collections).map(title => {
                    const items = collections[title];
                    return (
                        <CollectionPreview key={title} title={title} items={items} />
                    )
                })
            }
        </Fragment>
    )
};


export default CollectionsPreview;