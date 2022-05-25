import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../CollectionItem';

import './index.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1>
            <Link to={title} className="title">
                {title.toUpperCase()}
            </Link>
        </h1>
        <div className='preview'>
            {items.filter((_, idx) => idx < 4).map(product => (
                <CollectionItem key={product.id} product={product} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;