import styled from 'styled-components';
import {AvatarType} from './Avatar.component';

type AvatarStyledPropsType = {
    item: AvatarType,
    isAnimation: boolean,
}

type FilledEnergyStripePropsType = {
    energyCount: number,
}

export const StickyWrapperStyled = styled.div<{isFixed: boolean}>`
  width: ${({isFixed}) => isFixed ? '100vw' : '100%'};
  max-width: 1920px;
  height: 100vh;
  padding-left: calc(50px + (120 - 50) * (100vw - 1440px) / (1920 - 1440));
  padding-right: calc(50px + (120 - 50) * (100vw - 1440px) / (1920 - 1440));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: ${({ isFixed }) => isFixed ? 'fixed' : 'relative'};
  top: ${({ isFixed }) => isFixed ? '0' : 'auto'};
  left: ${({ isFixed }) => isFixed ? '50%' : 'auto'};
  transform: ${({ isFixed }) => isFixed ? 'translateX(-50%)' : 'none'};
  box-sizing: border-box;
  z-index: 5;

  @media screen and (max-width: 1440px) {
    padding-left: calc(100px + (50 - 100) * (100vw - 1280px) / (1440 - 1280));
    padding-right: calc(100px + (50 - 100) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    padding-left: calc(50px + (100 - 50) * (100vw - 1024px) / (1280 - 1024));
    padding-right: calc(50px + (100 - 50) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    padding: calc(20px + (50 - 20) * (100vw - 480px) / (1024 - 480)) 0;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100vh;
    padding: 20px 0;
  }
`;

export const FakeStickyWrapperStyled = styled.div<{additionalHeight: number}>`
  width: 100%;
  height: ${({ additionalHeight }) => `calc(100vh + ${additionalHeight === 0 ? 500 : additionalHeight}px)`};
  position: relative;
  z-index: 4;
`;

export const ContainerStyled = styled.div`
  width: 100%;
  height: 85vh;
  max-height: 830px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 1439px) {
    height: 99vh;
    top: 0.5vh;
    padding: 20px 0;
  }

  @media screen and (max-width: 1280px) {
    align-items: flex-start;
  }

  @media screen and (max-width: 1024px) {
    max-height: none;
    padding: 0;
    flex-direction: column;
    align-items: center;
    gap: calc(30px + (90 - 30) * (100vw - 480px) / (1024 - 480));
  }
`;

export const SmallDeskTopContainerStyled = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
`;

export const DescriptionsContainerStyled = styled.div`
  width: 23vw;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: calc(60px + (120 - 60) * (100vw - 1440px) / (1920 - 1440));
  background: transparent;
  box-sizing: border-box;

  @media screen and (max-width: 1280px) {
    width: auto;
    max-width: 460px;
    gap: calc(30px + (50 - 40) * (100vw - 1024px) / (1439 - 1024));
  }
`;

export const AvatarComponentContainerStyled = styled.div`
  width: 405px;
  height: 100%;
  padding: 40px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  background: #7D8DFF;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  border-radius: 40px;

  @media screen and (max-width: 1440px) {
    padding-top: calc(30px + (40 - 30) * (100vw - 1280px) / (1440 - 1280));
    border-radius: calc(20px + (40 - 20) * (100vw - 1280px) / (1440 - 1280));
  }
  
  @media screen and (max-width: 1439px) {
    width: 45%;
  }

  @media screen and (max-width: 1280px) {
    width: 460px;
    padding-top: 30px;
  }

  @media screen and (max-width: 1024px) {
    width: calc(295px + (460 - 295) * (100vw - 480px) / (1024 - 480));
    height: 70%;
    padding-top: calc(20px + (30 - 20) * (100vw - 480px) / (1280 - 480));
    gap: calc(20px + (30 - 20) * (100vw - 480px) / (1280 - 480));
    border-radius: calc(13px + (20 - 13) * (100vw - 480px) / (1280 - 480));
  }

  @media screen and (max-width: 480px) {
    width: 295px;
    padding-top: 20px;
    gap: 20px;
    border-radius: 13px;
  }
`;

export const AppNameStyled = styled.div`
  width: 100%;
  color: rgba(255, 255, 255, 0.35);
  font-family: 'Unbounded', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: calc(11px + (20 - 11) * (100vw - 480px) / (1024 - 480));
  }
`;

export const LocationsContainerStyled = styled.div`
  width: 100%;
  height: 114px;
  overflow: hidden;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1440px) {
    height: calc(110px + (114 - 110) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    height: 110px;
  }

  @media screen and (max-width: 1024px) {
    height: calc(89px + (110 - 89) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    height: 89px;
  }
`;

export const LocationsWrapperStyled = styled.div<{ size: number, index: number, isTranslate: boolean }>`
  width: 900%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({size}) => `${size}px`};
  transform: ${({size, index}) => `translateX(${-size * index}px)`};
  transition: ${({isTranslate}) => isTranslate ? 'all 0.5s ease 0s' : 'all 0s ease 0s'};
`;

export const LocationNameContainerStyled = styled.div<{ size: number }>`
  width: ${({size}) => `${size}px`};
  display: flex;
  justify-content: center;
`;

export const LocationNameStyled = styled.div`
  min-width: 200px;
  padding: 20px 24px;
  border-radius: 100px;
  position: relative;
  background: rgba(255, 255, 255, 0.65);
  color: #6274FF;
  box-shadow: 5px 4px 10px rgba(55, 78, 252, 0.2), inset 0 1px 0 white;
  backdrop-filter: blur(25px);
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.5px;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: 1440px) {
    font-size: calc(20px + (24 - 20) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    padding: 20px;
    font-size: 20px;
  }

  @media screen and (max-width: 1024px) {
    padding: calc(13px + (20 - 13) * (100vw - 480px) / (1024 - 480));
    font-size: calc(13px + (20 - 13) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    padding: 13px;
    font-size: 13px;
  }
`;

export const CheckInContainerStyled = styled.div<{ isShow: boolean }>`
  position: absolute;
  top: 80%;
  left: 50%;
  z-index: 4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  opacity: ${({isShow}) => isShow ? '1' : '0'};
  transform: ${({isShow}) => isShow ? 'translateX(-50%) rotateX(0deg)' : 'translateX(-50%) rotateX(100deg)'};
  transform-style: preserve-3d;
  transform-origin: -50% 0 0;
  animation: ${({isShow}) => isShow ? 'rotateXOn 0.5s ease-out 1 forwards' : 'none'};

  @keyframes rotateXOn {
    0% {
      opacity: 0;
      transform: translateX(-50%) rotateX(100deg);
    }
    10% {
      opacity: 1;
      transform: translateX(-50%) rotateX(100deg);
    }
    50% {
      transform: translateX(-50%) rotateX(-30deg);
    }
    70% {
      transform: translateX(-50%) rotateX(20deg);
    }
    90% {
      transform: translateX(-50%) rotateX(-10deg);
    }
    100% {
      transform: translateX(-50%) rotateX(0);
    }
  }

  @media screen and (max-width: 1024px) {
    gap: calc(10px + (16 - 10) * (100vw - 480px) / (1024 - 480));
  }
`;

export const CheckBoxContainerStyled = styled.div`
  padding: 9px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: #6274FF;
  box-shadow: 5px 4px 10px rgba(55, 78, 252, 0.2), inset 0 1px 0 white;
  backdrop-filter: blur(25px);
  border-radius: 100px;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0.25px;
  color: white;
  white-space: nowrap;

  @media screen and (max-width: 1440px) {
    font-size: calc(20px + (24 - 20) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1024px) {
    padding: calc(5px + (9 - 5) * (100vw - 480px) / (1024 - 480));
    font-size: calc(9px + (14 - 9) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    padding: 5px;
    font-size: 9px;
  }
`;

export const CheckBoxStyled = styled.div<{ isDone: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background: white;
  position: relative;

  &:before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: "";
    background-color: rgba(98, 116, 255, 0.75);
    height: 4px;
    width: 4px;
    border-radius: 100%;
    z-index: 4;
    opacity: 0;
    margin: 0;
    animation: ${({isDone}) => isDone ? 'rippleOn 500ms forwards ease-out' : 'none'};
  }

  @keyframes rippleOn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: scale(13);
    }
  }

  @media screen and (max-width: 1024px) {
    width: calc(20px + (30 - 20) * (100vw - 480px) / (1024 - 480));
    height: calc(20px + (30 - 20) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

export const CheckStyled = styled.div<{ isDone: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  transform: scale(1);
  animation: ${({isDone}) => isDone ? 'scaleOn 250ms forwards ease-out' : 'none'};

  &:before {
    content: '';
    width: 30%;
    height: 3px;
    position: absolute;
    top: 55%;
    left: 30%;
    background: ${({isDone}) => isDone ? '#6274FF' : '#A8A8A8'};
    border-radius: 10px;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    content: '';
    width: 55%;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 60%;
    background: ${({isDone}) => isDone ? '#6274FF' : '#A8A8A8'};
    border-radius: 10px;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  @keyframes scaleOn {
    0% {
      transform: scale(1);
    }
    80% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const CancelStyled = styled.div`
  width: 50px;
  height: 50px;
  background: #BAC3FF;
  box-shadow: 5px 4px 10px rgba(55, 78, 252, 0.2), inset 0 1px 0 white;
  backdrop-filter: blur(25px);
  border-radius: 100px;
  position: relative;

  &:before, &:after {
    content: '';
    width: 50%;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #6274FF;
    border-radius: 10px;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  @media screen and (max-width: 1024px) {
    width: calc(30px + (50 - 30) * (100vw - 480px) / (1024 - 480));
    height: calc(30px + (50 - 30) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export const LifeBalanceContainerStyled = styled.div<{ isShow: boolean }>`
  width: 28.5vw;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: calc(10px + (30 - 10) * (100vw - 1280px) / (1920 - 1280));
  background: transparent;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  transform: ${({isShow}) => isShow ? 'translateY(0)' : 'translateY(50px)'};
  opacity: ${({isShow}) => isShow ? '1' : '0'};
  transition: all 0.5s ease 0s;

  @media screen and (max-width: 1280px) {
    width: auto;
    max-width: 500px;
    gap: calc(6px + (10 - 6) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    width: auto;
    max-width: 380px;
    gap: calc(3px + (6 - 3) * (100vw - 480px) / (768 - 480));
  }

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const ContentContainerStyled = styled.div`
  width: 100%;
  height: 237px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 170px;
  }
`;

export const DescriptionBlockStyled = styled.div<{ isShow: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(10px + (18 - 10) * (100vw - 1280px) / (1920 - 1280));
  transform: translateY(50px);
  opacity: 0;
  animation: ${({isShow}) => isShow ? 'textShow 0.5s ease forwards' : 'textHide 0.5s ease forwards'};

  @keyframes textShow {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes textHide {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-50px);
    }
  }

  @media screen and (max-width: 1439px) {
    min-height: 400px;
  }

  @media screen and (max-width: 1280px) {
    min-height: 124px;
    gap: 10px;
  }

  @media screen and (max-width: 1024px) {
    width: 350px;
    min-height: 105px;
  }

  @media screen and (max-width: 768px) {
    width: calc(295px + (350 - 295) * (100vw - 480px) / (768 - 480));
  }
`;

export const TitleStyled = styled.h2`
  width: 430px;
  margin: 0;
  font-family: 'Commissioner', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: calc(40px + (48 - 40) * (100vw - 1280px) / (1920 - 1280));
  line-height: 140%;
  display: flex;
  align-items: center;
  color: white;

  @media screen and (max-width: 1280px) {
    width: auto;
    font-size: calc(32px + (40 - 32) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: calc(24px + (32 - 24) * (100vw - 360px) / (480 - 360));
  }
`;

export const TextStyled = styled.div<{ index: number }>`
  margin: 0;
  font-family: 'Commissioner', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: white;
  text-align: left;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const AvatarContainerStyled = styled.div`
  width: 100%;
  height: 85%;
  position: absolute;
  top: 11%;
  left: 0;
  z-index: 1;
`;

export const AvatarStyled = styled.img<AvatarStyledPropsType>`
  width: ${({item}) => item.id === 0 ? '100%' : 'auto'};
  height: ${({item}) => item.id === 0 ? 'auto' : '100%'};
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: ${({item}) => item.zIndex};
  object-fit: cover;
  transform: ${({item}) => item.id < 3 ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(1)'};
  opacity: ${({item, isAnimation}) => item.id < 3 ? '1' :
    isAnimation ? '1' : '0'};
  transition: all 0.1s ease-in-out 0.5s;
  animation: ${({isAnimation}) => isAnimation ? 'showNewItem .25s ease-in-out forwards' : 'none'};

  @keyframes showNewItem {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 1;
    }
    80% {
      top: ${({item}) => item.id === 4 ? '54%'
    : item.id === 6 ? '49%'
        : item.id === 8 ? '46%'
            : item.id === 10 ? '42%'
                : '50%'};
      transform: translate(-50%, -50%) scale(1.3);
    }
    100% {
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @media screen and (max-width: 480px) {
    top: calc(50% - 30px);
  }
`;

export const CheckinsCounter = styled.div`
  min-width: 135px;
  height: 46px;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 5.5px 4.5px 11px rgba(55, 78, 252, 0.2), inset 0 1px 0 white;
  backdrop-filter: blur(28px);
  border-radius: 100px;
  font-family: 'SF Pro Text', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16.5px;
  line-height: 24px;
  letter-spacing: -0.25px;
  color: white;

  @media screen and (max-width: 1024px) {
    min-width: calc(115px + (135 - 115) * (100vw - 480px) / (1024 - 480));
    height: calc(36px + (46 - 36) * (100vw - 480px) / (1024 - 480));
    bottom: 20px;
    font-size: calc(11px + (16.5 - 11) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
    line-height: 16px;
  }
`;

export const NumberContainerStyled = styled.div`
  width: 15px;
  height: 24px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 16px;
  }
`;

export const NumberStyled = styled.div<{ index: number }>`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-align: center;
  transform: ${({index}) => `translateY(${-29 * index}px)`};
  transition: all 0.5s ease 0s;

  @media screen and (max-width: 1024px) {
    font-size: calc(12px + (20 - 12) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    line-height: 16px;
    transform: ${({index}) => `translateY(${-21 * index}px)`};
  }
`;

export const EnergyStyled = styled.div`
  width: 100%;
  height: 31px;
  margin-top: 10px;
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1439px) {
    margin-top: 0;
  }

  @media screen and (max-width: 1439px) {
    width: 345px;
    height: 24px;
    gap: 6px;
    justify-content: flex-start;
  }

  @media screen and (max-width: 1024px) {
    width: calc(295px + (345 - 295) * (100vw - 480px) / (768 - 480));
  }
`;

export const EnergyStripeStyled = styled.div`
  width: calc(100% - 40px);
  height: 9px;
  background: white;
  border-radius: 10px;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 30px);
    height: 7px;
  }
`;

export const FilledEnergyStripeStyled = styled(EnergyStripeStyled)<FilledEnergyStripePropsType>`
  width: ${({energyCount}) => `${25 * energyCount}%`};
  height: 100%;
  background: linear-gradient(270deg, rgba(120, 47, 237, 0.6) 0%, rgba(120, 47, 237, 0.05) 100%), white;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease 0s;
`;

export const BalanceBlocksStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;

  @media screen and (max-width: 1280px) {
    gap: calc(10px + (15 - 10) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    width: 345px;
    margin-top: 10px;
    gap: 10px;
  }

  @media screen and (max-width: 1024px) {
    width: calc(295px + (345 - 295) * (100vw - 480px) / (768 - 480));
    margin-top: 2px;
    gap: calc(5px + (10 - 5) * (100vw - 480px) / (768 - 480));
  }
`;

export const BalanceBlockStyled = styled.div`
  width: 47.5%;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid rgba(165, 175, 249, 0.7);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (max-width: 1439px) {
    padding: 6px 10px;
    border-radius: 15px;
    gap: 5px;
  }

  @media screen and (max-width: 1024px) {
    padding: 8px;
    border-radius: 10px;
    border-width: 1px;
    gap: 2px;
  }

  @media screen and (max-width: 1024px) {
    padding: 4px;
  }
`;

export const BalanceTitleStyled = styled.h5`
  margin: 0;
  font-family: 'Commissioner', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: calc(20px + (24 - 20) * (100vw - 1440px) / (1920 - 1440));
  line-height: 120%;
  color: #A5AFF9;

  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }

  @media screen and (max-width: 1280px) {
    font-size: calc(15px + (20 - 15) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    font-size: calc(11px + (15 - 11) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;

export const ValueStyled = styled.div`
  font-family: 'Unbounded', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 120%;
  color: #A5AFF9;
  

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }

  @media screen and (max-width: 1440px) {
    font-size: calc(32px + (38 - 32) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    font-size: calc(24px + (32 - 24) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    font-size: calc(16px + (24 - 16) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
