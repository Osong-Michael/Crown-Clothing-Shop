import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../../Components/CollectionPreview';
import { selectCollectionItems, selectCollectionIsLoading } from '../../Store/Collections/collections.selector';
import Spinner from '../../Components/Spinner';

const CollectionsPreview = () => {
    const collections = useSelector(selectCollectionItems);
    const isLoading = useSelector(selectCollectionIsLoading);

    return (
        <Fragment>
            {
               isLoading ? (
                   <Spinner />
               ) : (
                    Object.keys(collections).map(title => {
                        const items = collections[title];
                        return (
                            <CollectionPreview key={title} title={title} items={items} />
                        )
                    })
               )
            }
        </Fragment>
    )
};


export default CollectionsPreview;