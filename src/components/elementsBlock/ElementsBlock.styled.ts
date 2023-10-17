import styled from 'styled-components';

export type PortalStyledPropsType = {
    right?: boolean,
};

type CardContainerStyledPropsType = ShowContentType & {
    card: number,
};
type ShowContentType = {
    isShow: boolean,
};

export const ElementsBlockStyled = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 977px;
  padding: 0 150px;
  margin-top: 130px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1920px) {
    padding: 0 calc(8vw + (8 - 4) * (100vw - 1280px) / (1920 - 1280));
  }

  @media screen and (max-width: 1280px) {
    padding: 0 4vw;
  }

  @media screen and (max-width: 1279px) {
    height: 60vw;
    max-height: none;
  }
  
  @media screen and (max-width: 768px) {
    //height: calc(156px + 60px + 80vw);
    height: auto;
    padding: 0 0 70px 0;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    gap: 12.5vw;
  }

  @media screen and (max-width: 360px) {
    //height: calc(116px + 40px + 80vw);
    height: auto;
    padding: 0 0 70px 0;
    gap: 40px;
  }
`;

export const PortalContainerStyled = styled.div<PortalStyledPropsType>`
  width: 20px;
  height: 660px;
  background: rgb(35,34,48);
  background: ${({right = false}) => `linear-gradient(${right ? 270 : 90}deg, rgba(35,34,48,1) 0%, rgba(35,34,48,1) 50%, rgba(125,95,235,0) 100%)`};
  position: absolute;
  top: ${({right = false}) => right ? '60px' : '195px'};
  left: ${({right = false}) => right ? 'auto' : '0'};
  right: ${({right = false}) => right ? '0' : 'auto'};
  z-index: 6;
  
  svg {
    position: absolute;
    top: 50%;
    left: ${({right = false}) => right ? 'auto' : '-5px'};
    right: ${({right = false}) => right ? '-5px' : 'auto'};
    transform: translateY(-50%);
  }
`;

export const ElementsSquareContainerStyled = styled.div`
  width: calc(100vw + 120px);
  height: 650px;
  position: absolute;
  z-index: 0;
  top: 50px;
  left: 50%;
  transform: rotate(-4deg) translateX(-50%);
  background: rgba(125, 95, 235, 0.3);
  border-top: 2px solid rgba(125, 95, 235, 0.8);
  border-bottom: 2px solid rgba(125, 95, 235, 0.8);

  @media screen and (max-width: 1920px) {
    top: calc(130px + (40 - 130) * (100vw - 1440px) / (1920 - 1440));
  }

  @media screen and (max-width: 1440px) {
    height: calc(420px + (500 - 420) * (100vw - 1280px) / (1440 - 1280));
    top: calc(60px + (130 - 60) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    height: calc(350px + (420 - 350) * (100vw - 1024px) / (1279 - 1024));
    top: 60px;
  }

  @media screen and (max-width: 1024px) {
    height: calc(270px + (350 - 270) * (100vw - 769px) / (1024 - 769));
    top: calc(40px + (60 - 40) * (100vw - 769px) / (1024 - 769));
  }

  @media screen and (max-width: 769px) {
    height: 270px;
  }

  @media screen and (max-width: 768px) {
    height: 75vw;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 60px;
    top: calc(160px + (170 - 160) * (100vw - 480px) / (768 - 480));
  }

  @media screen and (max-width: 480px) {
    top: 160px;
  }

  @media screen and (max-width: 360px) {
    height: 80vw;
    top: 110px;
  }
`;

export const AvatarContainerStyled = styled.div`
  width: 35.5vw;
  max-width: 680px;
  height: 43vw;
  max-height: 825px;
  padding: 1.15vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 54vw;
    height: 65vw;
  }

  @media screen and (max-width: 360px) {
    width: 212px;
    height: 249px;
    padding: 0;
  }
`;

export const CardContainerStyled = styled.div<CardContainerStyledPropsType>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.5s ease-in-out;
  transform: ${({ isShow, card }) => isShow ? `rotate(calc(-2* ${card}deg))` : 'none'};
  transform-origin: 0 25%;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 360px) {
    top: 0;
  }
`;

export const CardStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 7px 5px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  
  img {
    width: 94%;
    height: 96%;
    position: absolute;
    top: 2%;
    left: 3%;
    object-fit: contain;
  }
`;

export const CardBackgroundStyled = styled.img<ShowContentType>`
  opacity: ${({ isShow }) => isShow ? '0' : '1'};
  transition: opacity ease-in-out 0.5s;
`;

export const ActiveCardBackgroundStyled = styled.img<ShowContentType>`
  opacity: ${({ isShow }) => isShow ? '1' : '0'};
  transition: opacity ease-in-out 0.5s;
`;

export const SunglassesStyled = styled.img<ShowContentType>`
  opacity: ${({ isShow }) => isShow ? '1' : '0'};
  transition: opacity ease-in-out 0.1s;
  animation: ${({ isShow }) => isShow ? 'sunglasses 0.4s ease-in-out forwards' : 'none'};
  z-index: 2;
  
  @keyframes sunglasses {
    0% {
      transform: scale(1);
    }
    50% {
      top: 6%;
      left: 4%;
      transform: scale(1.3);
    }
    100% {
      top: 2%;
      left: 3%;
      transform: scale(1);
    }
  }
`;

export const TextContainerStyled = styled.div`
  width: 43%;
  padding-bottom: 120px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: 1279px) {
    width: 50%;
    padding-bottom: 0;
    top: -40px;
  }

  @media screen and (max-width: 1024px) {
    width: calc(390px + (471 - 390) * (100vw - 769px) / (1024 - 769));
    top: calc(-30px + (30 - 40) * (100vw - 769px) / (1024 - 769));
  }

  @media screen and (max-width: 768px) {
    width: 370px;
    height: 156px;
    top: 0;
  }

  @media screen and (max-width: 480px) {
    width: 330px;
  }

  @media screen and (max-width: 360px) {
    height: 116px;
    padding: 0;
  }
`;

export const TextStyled = styled.span`
  width: 100%;
  position: relative;
  z-index: 2;
  font-family: 'Commissioner', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;
  text-align: left;
  color: white;
  user-select: none;
  white-space: pre-line;

  span {
    color: #00E4D7;
  }

  @media screen and (max-width: 1920px) {
    font-size: calc(40px + (48 - 40) * (100vw - 1280px) / (1920 - 1280));
  }

  @media screen and (max-width: 1280px) {
    font-size: calc(32px + (40 - 32) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }

  @media screen and (max-width: 768px) {
    font-size: calc(24px + (32 - 24) * (100vw - 360px) / (768 - 360));
    line-height: 120%;
    text-align: center;
  }

  @media screen and (max-width: 360px) {
    font-size: 24px;
    line-height: 120%;
    text-align: center;
  }
`;
