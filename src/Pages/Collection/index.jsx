import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../Components/CollectionItem';
import Spinner from '../../Components/Spinner';
import { selectCollectionItems, selectCollectionIsLoading } from '../../Store/Collections/collections.selector';

import { ColletionContainer, CollectionTitle } from './index.styles';


const Collection = () => {
    const { collection } = useParams();
    const collections = useSelector(selectCollectionItems);
    const isLoading = useSelector(selectCollectionIsLoading);

    const [products, setProducts] = useState(collections[collection]);

    useEffect(() => {
        setProducts(collections[collection]);
    }, [collection, collections]);


    return (
        <Fragment>
            <CollectionTitle>{collection.toUpperCase()}</CollectionTitle>
            { isLoading ? (
                <Spinner />
            ) : (
                <ColletionContainer>
                    { products && products.map(product => (
                        <CollectionItem key={product.id} product={product} />
                    ))}
                </ColletionContainer>
            )}
        </Fragment>
    );
};


export default Collection;