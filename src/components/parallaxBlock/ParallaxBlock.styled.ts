import styled from 'styled-components';
import {ContainerType} from './ParallaxImage';

type ParallaxBlockContainerStyledPropsType = {
    height: number,
};

export type PortalStyledPropsType = {
    right?: boolean,
};

type ImageStyledPropsType = {
    imageId: number,
};

type ImageContainerStyledPropsType = ParallaxBlockContainerStyledPropsType & ImageStyledPropsType & {
    container: {
        d1920: ContainerType,
        d1440: ContainerType,
        d1280: ContainerType,
        t1024: ContainerType,
        t768: ContainerType,
        m480: ContainerType,
        m360: ContainerType,
    },
};

export const ParallaxBlockContainerStyled = styled.div<ParallaxBlockContainerStyledPropsType>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  max-height: 977px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: calc(360px + (650 - 360) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    height: calc(320px + (360 - 320) * (100vw - 360px) / (480 - 360));
  }
`;

export const PortalContainerStyled = styled.div<PortalStyledPropsType>`
  width: 20px;
  height: 560px;
  background: rgb(35,34,48);
  background: ${({right = false}) => `linear-gradient(${right ? 270 : 90}deg, rgba(35,34,48,1) 0%, rgba(35,34,48,1) 50%, rgba(125,95,235,0) 100%)`};
  position: absolute;
  top: ${({right = false}) => right ? '140px' : '275px'};
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

export const ParallaxSquareContainerStyled = styled.div`
  width: 2100px;
  height: 550px;
  position: absolute;
  z-index: 0;
  top: 415px;
  left: 50%;
  background: rgba(125, 95, 235, 0.3);
  border-top: 2px solid rgba(125, 95, 235, 0.8);
  border-bottom: 2px solid rgba(125, 95, 235, 0.8);
  transform: rotate(-4deg) translate(-50%, -50%);

  @media screen and (max-width: 1920px) {
    width: calc(1600px + (2100 - 1600) * (100vw - 1440px) / (1920 - 1440));
  }

  @media screen and (max-width: 1440px) {
    width: calc(1350px + (2100 - 1350) * (100vw - 1280px) / (1440 - 1280));
    height: calc(400px + (450 - 400) * (100vw - 1280px) / (1440 - 1280));
    top: calc(310px + (415 - 310) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1440px) {
    width: calc(1350px + (2100 - 1350) * (100vw - 1280px) / (1440 - 1280));
    height: calc(400px + (450 - 400) * (100vw - 1280px) / (1440 - 1280));
    top: calc(310px + (415 - 310) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    width: calc(1100px + (1350 - 1100) * (100vw - 1024px) / (1280 - 1024));
    height: calc(320px + (400 - 320) * (100vw - 1024px) / (1280 - 1024));
    top: calc(290px + (280 - 290) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    width: calc(850px + (1100 - 850) * (100vw - 768px) / (1024 - 768));
    height: calc(250px + (320 - 250) * (100vw - 768px) / (1024 - 768));
    top: calc(255px + (290 - 255) * (100vw - 768px) / (1024 - 768));
  }
  
  @media screen and (max-width: 768px) {
    width: calc(550px + (850 - 550) * (100vw - 480px) / (768 - 480));
    height: calc(165px + (250 - 165) * (100vw - 480px) / (768 - 480));
    top: calc(155px + (225 - 155) * (100vw - 480px) / (768 - 480));
  }

  @media screen and (max-width: 480px) {
    width: calc(400px + (550 - 400) * (100vw - 360px) / (480 - 360));
    height: calc(125px + (165 - 125) * (100vw - 360px) / (480 - 360));
    top: calc(145px + (155 - 145) * (100vw - 360px) / (480 - 360));
  }

  @media screen and (max-width: 360px) {
    width: 400px;
    height: 125px;
    top: 145px;
  }
`;

export const ContentStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    padding: calc(10px + (30 - 10) * (100vw - 480px) / (1024 -  480));
  }

  @media screen and (max-width: 480px) {
    padding: calc(5px + (10 - 5) * (100vw - 400px) / (480 -  400));
  }

  @media screen and (max-width: 360px) {
    padding: 5px;
  }
`;

export const TextContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    position: relative;
    z-index: 2;
    font-family: 'Unbounded', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 118px;
    line-height: 120%;
    color: white;
    user-select: none;
  }

  @media screen and (max-width: 1920px) {
    span {
      font-size: calc(80px + (118 - 80) * (100vw - 1280px) / (1920 - 1280));
    }
  }

  @media screen and (max-width: 1280px) {
    span {
      font-size: calc(64px + (80 - 64) * (100vw - 1024px) / (1280 - 1024));
    }
  }

  @media screen and (max-width: 1024px) {
    gap: calc(8 * (100vw - 480px) / (1024 - 480));

    span {
      font-size: calc(36px + (64 - 36) * (100vw - 480px) / (1024 - 480));
    }
  }

  @media screen and (max-width: 480px) {
    gap: 0;
    
    span {
      font-size: calc(28px + (36 - 28) * (100vw - 360px) / (480 - 360));
    }
  }

  @media screen and (max-width: 360px) {
    span {
      font-size: 28px;
    }
  }
`;

export const ImageContainerStyled = styled.div<ImageContainerStyledPropsType>`
  width: ${({container}) => container.d1920.side + 'vw'};
  max-width: ${({container}) => `${1920 * container.d1920.side / 100}px`};
  height: ${({container}) => container.d1920.side + 'vw'};
  max-height: ${({container}) => `${1920 * container.d1920.side / 100}px`};
  position: absolute;
  z-index: ${({imageId}) => imageId < 5 ? '4' : '2'};
  top: ${({container, height}) => `${container.d1920.top / 100 * height}px`};
  left: ${({container}) => `${container.d1920.left}px`};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1920px) {
    top: ${({container, height}) => `calc(
    ${container.d1440.top}vh +
    (${container.d1920.top} / 100 * ${height} - ${container.d1440.top} / 100 * ${height})
    * ((100vw - 1440px) / (1920 - 1440))
  )`};
    left: ${({container}) => `calc(
    ${container.d1440.left}px + (${container.d1920.left} - ${container.d1440.left}) * ((100vw - 1440px) / (1920 - 1440))
  )`};
  }

  @media screen and (max-width: 1440px) {
    top: ${({container, height}) => `calc(
      ${container.d1280.top}vh +
      (${container.d1440.top} / 100 * ${height} - ${container.d1280.top} / 100 * ${height})
      * ((100vh - 617px) / (977 - 617))
    )`};
    left: ${({container}) => `calc(${container.d1280.left}px +
    (${container.d1440.left} - ${container.d1280.left}) * ((100vw - 1280px) / (1440 - 1280)))`};
  }

  @media screen and (max-width: 1280px) {
    top: ${({container}) => `${container.d1280.top}vh`};
  }

  @media screen and (max-width: 1024px) {
    top: ${({container, height}) => `calc(
        ${container.t768.top}% +
        (${container.t1024.top} / 100 * ${height} - ${container.t768.top} / 100 * ${height})
        * ((100vw - 768px) / (1024 - 768))
    )`};
    left: ${({container}) => `calc(${container.t768.left}px +
    (${container.t1024.left} - ${container.t768.left}) * ((100vw - 768px) / (1024 - 768)))`};
  }

  @media screen and (max-width: 768px) {
    width: ${({container}) => container.t768.side + 'vw'};
    height: ${({container}) => container.t768.side + 'vw'};
    top: ${({container, height}) => `calc(
        ${container.m480.top}% +
        (${container.t768.top} / 100 * ${height} - ${container.m480.top} / 100 * ${height})
        * ((100vw - 480px) / (768 - 480))
    )`};
    left: ${({container}) => `calc(${container.m480.left}px +
    (${container.t768.left} - ${container.m480.left}) * ((100vw - 480px) / (768 - 480)))`};
  }

  @media screen and (max-width: 480px) {
    top: ${({container, height}) => `calc(
        ${container.m360.top}% +
        (${container.m480.top} / 100 * ${height} - ${container.m360.top} / 100 * ${height})
        * ((100vw - 360px) / (480 - 360))
    )`};
    left: ${({container}) => `calc(${container.m360.left}px +
    (${container.m480.left} - ${container.m360.left}) * ((100vw - 360px) / (480 - 360)))`};
  }

  @media screen and (max-width: 360px) {
    width: ${({container}) => container.m360.side + 'vw'};
    height: ${({container}) => container.m360.side + 'vw'};
    top: ${({container}) => `${container.m360.top}%`};
    left: ${({container}) => `${container.m360.left}px`};
  }


`;

export const ImageStyled = styled.img<ImageStyledPropsType>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 1279px) {
    animation: ${({imageId}) => `moveImage 15s linear ${500 * imageId}ms infinite`};
  }

  @keyframes moveImage {
    0% {
      top: 0;
      left: 0;
    }
    16.6% {
      top: 10%;
      left: -10%;
    }
    32.4% {
      top: -10%;
    }
    50% {
      top: 0;
      left: 0;
    }
    65.6% {
      top: 10%;
      left: 10%;
    }
    82.4% {
      top: -10%;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
`;
