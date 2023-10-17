import styled from 'styled-components';

type IconContainerStyledPropsType = {
    isShow: boolean,
    isFlight: boolean,
    distance: number,
};

export const ButtonContainerStyled = styled.div`
  width: 423px;
  height: 82px;
  background: transparent;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  
  @media screen and (max-width: 1024px) {
    width: 247px;
    height: 46px;
  }
`;

export const ImageStyled = styled.img`
  width: 423px;
  height: 82px;
  border-radius: 100px;
  object-fit: contain;

  @media screen and (max-width: 1279px) {
    width: 247px;
    height: 46px;
  }
`;

export const IconContainerStyled = styled.div<IconContainerStyledPropsType>`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  position: absolute;
  top: 50%;
  right: 45px;
  transform: ${({isShow}) => isShow ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.1)'};
  transition: transform ease-in-out 250ms;
  animation: ${({isFlight}) => isFlight ? 'flightOut 0.5s ease-in 0s 1 normal forwards' : 'none'};

  @keyframes flightOut {
    0% {
      right: 45px;
      top: 50%;
    }
    100% {
      right: -785px;
      top: -250%;
    }
  }
  
  @media screen and (max-width: 1279px) {
    width: 18px;
    height: 18px;
    right: 17px;
  }
`;
