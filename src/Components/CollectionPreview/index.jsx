import React from 'react';
import CollectionItem from '../CollectionItem';

import { CollectionPreviewContainer, Title, Preview } from './index.styles';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <h1>
            <Title to={title}>
                {title.toUpperCase()}
            </Title>
        </h1>
        <Preview>
            {items.filter((_, idx) => idx < 4).map(product => (
                <CollectionItem key={product.id} product={product} />
            ))}
        </Preview>
    </CollectionPreviewContainer>
);

export default CollectionPreview;