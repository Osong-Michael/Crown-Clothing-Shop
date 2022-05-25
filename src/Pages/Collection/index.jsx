import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../Components/CollectionItem';
import { CollectionsContext } from '../../Context/collectionsContext';

import './index.scss';


const Collection = () => {
    const { collection } = useParams();
    const { collections } = useContext(CollectionsContext);

    const [products, setProducts] = useState(collections[collection]);

    useEffect(() => {
        setProducts(collections[collection]);
    }, [collection, collections]);


    return (
        <Fragment>
            <h2 className='collection-title'>{collection.toUpperCase()}</h2>
            <div className="collection-container">
                { products && products.map(product => (
                    <CollectionItem key={product.id} product={product} />
                ))}
            </div>
        </Fragment>
    );
};


export default Collection;