import React, { useContext, Fragment } from 'react';
import CollectionPreview from '../../Components/CollectionPreview';

import { CollectionsContext } from '../../Context/collectionsContext';

const CollectionsPreview = () => {
    const { collections } = useContext(CollectionsContext);
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