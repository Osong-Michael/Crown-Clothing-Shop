import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../Components/CollectionItem';

import { ColletionContainer, CollectionTitle } from './index.styles';


const Collection = () => {
    const { collection } = useParams();
    const { collections } = useSelector(state => state.collectionsStore);

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