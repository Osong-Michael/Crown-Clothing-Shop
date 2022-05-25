import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../Components/CollectionItem';
import { CollectionsContext } from '../../Context/collectionsContext';

import { ColletionContainer, CollectionTitle } from './index.styles';


const Collection = () => {
    const { collection } = useParams();
    const { collections } = useContext(CollectionsContext);

    const [products, setProducts] = useState(collections[collection]);

    useEffect(() => {
        setProducts(collections[collection]);
    }, [collection, collections]);


    return (
        <Fragment>
            <CollectionTitle>{collection.toUpperCase()}</CollectionTitle>
            <ColletionContainer>
                { products && products.map(product => (
                    <CollectionItem key={product.id} product={product} />
                ))}
            </ColletionContainer>
        </Fragment>
    );
};


export default Collection;