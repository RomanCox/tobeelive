import styled from 'styled-components';

type PictureContainerStyledPropsType = {
    isOpacity: boolean
};

export const SliderBlockContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 230px;
  padding: 120px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1920px) and (min-width: 1025px) {
    margin-top: calc(100px + (120 - 100) * (100vw - 1280px) / (1920 - 1280));
    padding-left: calc(50px + (120 - 50) * ((100vw - 1025px) / (1920 - 320)));
    padding-right: calc(50px + (120 - 50) * ((100vw - 1025px) / (1920 - 320)));
  }

  @media (max-width: 1280px) {
    margin-top: calc(80px + (100 - 80) * (100vw - 1024px) / (1280 - 1024));
  }
  
  @media screen and (max-width: 1024px) {
    padding: 130px 50px 115px;
    margin-top: calc(75px + (80 - 75) * (100vw - 480px) / (1024 - 480));
    flex-direction: column;
    gap: 100px;
  }

  @media screen and (max-width: 480px) {
    padding: 118px 25px 115px;
    margin-top: 75px;
  }

  @media screen and (max-width: 360px) {
    margin-top: 75px;
  }
`;

export const CarouselWrapperStyled = styled.div`
  width: 530px;
  min-width: 530px;
  height: 236px;

  @media screen and  (max-width: 768px) {
    height: 140px;
  }
`;

export const SliderPictureContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PictureContainerStyled = styled.div<PictureContainerStyledPropsType>`
  max-width: 920px;  //1000px
  max-height: 735px; //800px
  animation: ${({ isOpacity }) => isOpacity ? 'opacityOff .25s ease-in-out forwards' : 'opacityOn .25s ease-in-out forwards'};

  @keyframes opacityOn {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }

  @keyframes opacityOff {
    0% {
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }
`;

export const PictureStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
