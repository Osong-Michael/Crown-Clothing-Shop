import styled from 'styled-components';

type BackgroundImageProps = {
  imageUrl: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 50px;
    display: none;
  }

  &:hover {
    ${BackgroundImage} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: block;
    }
`;


export const CollectionFooter = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
  