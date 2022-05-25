import styled from 'styled-components';

export const ColletionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`;

export const CollectionTitle = styled.h2`
    font-size: 38px;
    margin-bottom: 45px;
    text-align: center;
`;