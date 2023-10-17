import styled from 'styled-components';
import {ContainerType} from './ParallaxImage';

export type PortalStyledPropsType = {
    right?: boolean,
};

type ImageStyledPropsType = {
    imageId: number,
};

type ImageContainerStyledPropsType = ImageStyledPropsType & {
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

type SliderContainerStyledPropsType = {
    offSet: number,
    gap: number,
    duration: number,
};

export const FollowBlockStyled = styled.div`
  width: 100%;
  margin-top: 120px;
  padding-top: 155px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  overflow: hidden;
`;

export const PortalContainerStyled = styled.div<PortalStyledPropsType>`
  width: 20px;
  height: 910px;
  background: rgb(35,34,48);
  background: ${({right = false}) => `linear-gradient(${right ? 270 : 90}deg, rgba(35,34,48,1) 0%, rgba(35,34,48,1) 50%, rgba(125,95,235,0) 100%)`};
  position: absolute;
  top: ${({right = false}) => right ? '52px' : '185px'};
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

export const FollowSquareContainerStyled = styled.div`
  width: 2100px;
  height: 900px;
  position: absolute;
  z-index: 0;
  top: 575px;
  background: rgba(125, 95, 235, 0.3);
  border-top: 2px solid rgba(125, 95, 235, 0.8);
  border-bottom: 2px solid rgba(125, 95, 235, 0.8);
  transform: rotate(-4deg) translate(0, -50%);

  @media screen and (max-width: 1920px) {
    width: calc(1600px + (2100 - 1600) * (100vw - 1440px) / (1920 - 1440));
    height: calc(750px + (925 - 750) * (100vw - 1440px) / (1920 - 1440));
    top: calc(450px + (550 - 450) * (100vw - 1440px) / (1920 - 1440));
  }

  @media screen and (max-width: 1440px) {
    width: calc(1350px + (2100 - 1350) * (100vw - 1280px) / (1440 - 1280));
    height: calc(600px + (750 - 600) * (100vw - 1280px) / (1440 - 1280));
    top: calc(400px + (450 - 400) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    width: calc(1100px + (1350 - 1100) * (100vw - 1024px) / (1280 - 1024));
    height: calc(550px + (600 - 550) * (100vw - 1024px) / (1280 - 1024));
    top: calc(360px + (400 - 360) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    width: calc(850px + (1100 - 850) * (100vw - 768px) / (1024 - 768));
    height: calc(430px + (550 - 430) * (100vw - 768px) / (1024 - 768));
    top: calc(310px + (360 - 310) * (100vw - 768px) / (1024 - 768));
  }

  @media screen and (max-width: 768px) {
    width: calc(550px + (850 - 550) * (100vw - 480px) / (768 - 480));
    height: calc(300px + (430 - 300) * (100vw - 481px) / (768 - 481));
    top: calc(260px + (300 - 260) * (100vw - 481px) / (768 - 481));
  }

  @media screen and (max-width: 480px) {
    width: calc(400px + (550 - 400) * (100vw - 360px) / (480 - 360));
    height: calc(350px + (430 - 350) * (100vw - 360px) / (480 - 360));
    top: calc(280px + (310 - 280) * (100vw - 360px) / (480 - 360));
  }

  @media screen and (max-width: 360px) {
    width: 400px;
    height: 350px;
    top: 280px;
  }
`;

export const ParallaxImageContainerStyled = styled.div<ImageContainerStyledPropsType>`
  width: ${({container}) => `${container.d1920.side}vw`};
  height: ${({container}) => `${container.d1920.side}vw`};
  position: absolute;
  z-index: ${({imageId}) => imageId < 5 ? '4' : '2'};
  top: ${({container}) => `${container.d1920.top}px`};
  left: ${({container}) => `calc(${container.d1440.left}px +
    (${container.d1920.left} - ${container.d1440.left}) * (100vw - 1440px) / (1920 - 1440))`};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1440px) {
    top: ${({container}) => `calc(
      ${container.d1280.top}px + (${container.d1440.top} - ${container.d1440.top}) * (100vw - 1280px) / (1440 - 1280))`};
    left: ${({container}) => `${container.d1440.left}px`};
  }

  @media screen and (max-width: 1279px) {
    top: ${({container}) => `calc(
      ${container.t1024.top}px + (${container.d1280.top} - ${container.t1024.top}) * (100vw - 1042px) / (1280 - 1024))`};
    left: ${({container}) => `${container.d1280.left}px`};
  }

  @media screen and (max-width: 1024px) {
    width: ${({container}) => `calc(${container.t768.side}vw +
      (${container.t1024.side} - ${container.t768.side}) * (100vw - 768px) / (1024 - 768))`};
    height: ${({container}) => `calc(${container.t768.side}vw +
      (${container.t1024.side} - ${container.t768.side}) * (100vw - 768px) / (1024 - 768))`};
    top: ${({container}) => `${container.t1024.top}px`};
    left: ${({container}) => `calc(${container.t768.left}px +
      (${container.t1024.left} - ${container.t768.left}) * (100vw - 768px) / (1024 - 768))`};
  }

  @media screen and (max-width: 768px) {
    width: ${({container}) => `calc(${container.m480.side}vw +
      (${container.t768.side} - ${container.m480.side}) * (100vw - 480px) / (768 - 480))`};
    height: ${({container}) => `calc(${container.m480.side}vw +
      (${container.t768.side} - ${container.m480.side}) * (100vw - 480px) / (768 - 480))`};
      //top: ${({container}) => `${container.t768.top}px`};
    top: ${({container}) => `calc(${container.m480.top}px +
      (${container.t768.top} - ${container.m480.top}) * (100vw - 480px) / (768 - 480))`};
      //left: ${({container}) => `${container.t768.left}px`};
    left: ${({container}) => `calc(${container.m480.left}px +
      (${container.t768.left} - ${container.m480.left}) * (100vw - 480px) / (768 - 480))`};
  }

  @media screen and (max-width: 480px) {
    width: ${({container}) => `calc(${container.m360.side}vw +
      (${container.m480.side} - ${container.m360.side}) * (100vw - 360px) / (480 - 360))`};
    height: ${({container}) => `calc(${container.m360.side}vw +
      (${container.m480.side} - ${container.m360.side}) * (100vw - 360px) / (480 - 360))`};
    top: ${({container}) => `${container.m480.top}px`};
    left: ${({container}) => `${container.m480.left}px`};
  }

  @media screen and (max-width: 360px) {
    top: ${({container}) => `${container.m360.top}px`};
    left: ${({container}) => `${container.m360.left}px`};
  }
`;

export const ParallaxImageStyled = styled.img<ImageStyledPropsType>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 1279px) {
    animation: ${({imageId}) => `moveImage 15s linear ${5 * imageId}s infinite`};
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
      left: -10%;
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
      left: 10%;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
`;

export const TitleStyled = styled.div`
  width: 1000px;
  position: relative;
  z-index: 5;
  font-family: 'Unbounded', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 112px;
  line-height: 120%;
  text-align: center;
  color: white;

  @media screen and (max-width: 1920px) {
    width: calc(850px + (1000 - 850) * (100vw - 1440px) / (1920 - 1440));
    font-size: calc(96px + (112 - 96) * (100vw - 1440px) / (1920 - 1440));
  }

  @media screen and (max-width: 1440px) {
    width: calc(550px + (850 - 550) * (100vw - 1280px) / (1440 - 1280));
    font-size: calc(64px + (96 - 64) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    width: 550px;
    font-size: 64px;
  }

  @media screen and (max-width: 1024px) {
    width: calc(450px + (550 - 450) * (100vw - 768px) / (1024 - 768));
    font-size: calc(50px + (64 - 50) * (100vw - 768px) / (1024 - 768));
  }

  @media screen and (max-width: 768px) {
    width: calc(300px + (450 - 300) * (100vw - 480px) / (768 - 480));
    font-size: calc(36px + (50 - 36) * (100vw - 480px) / (768 - 480));
  }

  @media screen and (max-width: 480px) {
    width: calc(250px + (300 - 250) * (100vw - 360px) / (480 - 360));
    font-size: calc(28px + (36 - 28) * (100vw - 360px) / (480 - 360));
  }

  @media screen and (max-width: 360px) {
    width: 250px;
    font-size: 28px;
  }
`;

export const SliderWrapperStyled = styled.div`
  width: calc(100% - 10px);
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;

  @media screen and (max-width: 480px) {
    height: 42.5vw;
  }
`;

export const GradientContainerStyled = styled.div<{ gradientWidth: number, left?: boolean }>`
  width: ${({ gradientWidth }) => `${gradientWidth}px`};
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 6;
  left: ${({left = false}) => left ? '0' : 'auto'};
  right: ${({left = false}) => left ? 'auto' : '0'};
  background: #232230;
  background: ${({left = false}) => `linear-gradient(${left ? 90 : 270}deg, rgba(35,34,48,1) 0%, rgba(225,225,225,0) 100%)`};
`;

export const GradientStyled = styled.div<{ left?: boolean }>`
  width: 100%;
  height: 100%;
  background: rgba(125, 95, 235, 0.3);
  background: ${({left = false}) => `linear-gradient(${left ? 90 : 270}deg, rgba(125,95,235,0.3) 0%, rgba(225,225,225,0) 100%)`};
`;

export const SliderContainerStyled = styled.div<SliderContainerStyledPropsType>`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: flex-start;
  gap: ${({gap}) => `${gap}px`};
  transform: ${({offSet}) => `translateX(${offSet}px)`};
  transition: ${({duration}) => `transform linear ${duration}ms`};
`;

export const SlideStyled = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

export const ImageContainerStyled = styled.div`
  width: 28.5vw;
  max-width: 547px;
  height: 21.1vw;
  max-height: 405px;
  position: relative;
  z-index: 1;
  display: flex;

  @media screen and (max-width: 480px) {
    width: 57.5vw;
    height: 42.5vw;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  object-fit: cover;

  @media screen and (max-width: 1920px) {
    border-radius: calc(20px + (30 - 20) * (100vw - 1280px) / (1920 - 1280));
  }

  @media screen and (max-width: 1280px) {
    border-radius: calc(16px + (20 - 16) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    border-radius: 16px;
  }

  @media screen and (max-width: 480px) {
    border-radius: calc(10px + (16 - 10) * (100vw - 360px) / (480 - 360));
  }
`;
