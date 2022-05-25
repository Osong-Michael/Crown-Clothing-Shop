import React from 'react';
import { MenuItemContainer, BackgroundImage, Content } from './index.styles';

const MenuItem = ({ title, imageUrl, size }) => (
    <MenuItemContainer size={size}>
        <BackgroundImage imageUrl={imageUrl} />
        <Content>
            <h1>{title.toUpperCase()}</h1>
            <span>SHOP NOW</span>
        </Content>
    </MenuItemContainer>
);

export default MenuItem;