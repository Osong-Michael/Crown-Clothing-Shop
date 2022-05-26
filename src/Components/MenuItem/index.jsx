import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItemContainer, BackgroundImage, Content } from './index.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(linkUrl);

    return (
        <MenuItemContainer size={size} onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Content>
                <h1>{title.toUpperCase()}</h1>
                <span>SHOP NOW</span>
            </Content>
        </MenuItemContainer>
    )
};

export default MenuItem;