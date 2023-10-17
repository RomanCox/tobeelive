import styled from 'styled-components';

export type PortalStyledPropsType = {
    right?: boolean,
};

export const DefaultAvatarsBlockStyled = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 977px;
  margin-top: 130px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1440px) {
    height: auto;
    justify-content: flex-start;
    gap: calc(30px + (60 - 30) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1279px) {
    max-height: none;
    gap: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 110px;
  }

  @media screen and (max-width: 480px) {
    gap: 30px;
  }
`;

export const PortalContainerStyled = styled.div<PortalStyledPropsType>`
  width: 20px;
  height: 650px;
  background: rgb(35,34,48);
  background: ${({right = false}) => `linear-gradient(${right ? 270 : 90}deg, rgba(35,34,48,1) 0%, rgba(35,34,48,1) 50%, rgba(125,95,235,0) 100%)`};
  position: absolute;
  top: 150px;
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

export const TitleStyled = styled.div`
  position: relative;
  z-index: 5;
  font-family: 'Commissioner', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  letter-spacing: 0.5px;
  text-align: center;
  color: white;

  @media screen and (max-width: 1440px) {
    font-size: calc(40px + (48 - 40) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    font-size: calc(32px + (40 - 32) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: calc(24px + (32 - 24) * (100vw - 360px) / (480 - 360));
  }

  @media screen and (max-width: 360px) {
    font-size: 24px;
  }
`;

export const SlidersContainerStyled = styled.div`
  width: 100%;
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  overflow-x: hidden;

  @media screen and (max-width: 1920px) {
    gap: calc(30px + (50 - 30) * (100vw - 1440px) / (1920 - 1440));
  }

  @media screen and (max-width: 1440px) {
    gap: calc(20px + (30 - 20) * (100vw - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    gap: calc(15px + (20 - 15) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 480px) {
    gap: 15px;
  }
`;

export const SliderWrapperStyled = styled.div<{ reverse: boolean }>`
  width: 100vw;
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: ${({reverse}) => reverse ? 'flex-end' : 'flex-start'};
  align-items: center;
  overflow-x: hidden;
`;

export const SliderContainerStyled = styled.div<{
    isMove: boolean,
    offSet: number,
    coefficient: number,
    gap: number,
    reverse: boolean
}>`
  height: 100%;
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: flex-start;
  gap: ${({gap}) => `${gap}px`};
  transform: ${({ isMove, offSet, coefficient, reverse }) =>
    isMove ? `translateX(${reverse ? offSet - offSet * coefficient : offSet * coefficient - offSet}px)` : 'none'};
  transition: ${({coefficient}) => `transform ${coefficient === 1 ? 30 : 0}s linear`};
`;

export const SlideContainerStyled = styled.div`
  width: 14vw;
  max-width: 269px;
  height: 16vw;
  max-height: 307px;
  padding: calc(5px + (8 - 5) * (100vw - 1280px) / (1920 - 1280));
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: calc(10px + (15 - 10) * (100vw - 1280px) / (1920 - 1280));
  border: solid 2px #393939;
  box-sizing: border-box;

  @media screen and (max-width: 1280px) {
    border-radius: calc(8px + (10 - 8) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    width: calc(97px + (142 - 97) * (100vw - 480px) / (1024 - 480));
    height: calc(110px + (162 - 110) * (100vw - 480px) / (1024 - 480));
    border-radius: calc(5px + (8 - 5) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    width: 97px;
    height: 110px;
    border-radius: 5px;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const NickNameStyled = styled.div`
  font-family: 'Unbounded', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: calc(12px + (18 - 12) * (100vw - 1280px) / (1920 - 1280));
  line-height: 120%;
  text-align: center;
  letter-spacing: calc(0.5px + (0.75 - 0.5) * (100vw - 1280px) / (1920 - 1280));
  color: white;

  @media screen and (max-width: 1280px) {
    font-size: calc(10px + (12 - 10) * (100vw - 1024px) / (1280 - 1024));
    letter-spacing: calc(0.4px + (0.5 - 0.4) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    font-size: calc(6px + (10 - 6) * (100vw - 480px) / (1024 - 480));
    letter-spacing: calc(0.25px + (0.4 - 0.25) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 1024px) {
    font-size: 6px;
    letter-spacing: 0.25px;
  }
`;

export const NumbersContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: calc(9px + (15 - 9) * (100vw - 1280px) / (1920 - 1280));

  @media screen and (max-width: 1280px) {
    gap: calc(7px + (9 - 7) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    gap: calc(5px + (7 - 5) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    gap: 5px;
  }
`;

export const CheckInsAndConnectionsStyled = styled.div`
  padding-right: calc(7px + (10 - 7) * (100vw - 1280px) / (1920 - 1280));
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: calc(15px + (24 - 15) * (100vw - 1280px) / (1920 - 1280));

  @media screen and (max-width: 1280px) {
    gap: calc(12px + (15 - 12) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    gap: calc(8px + (12 - 8) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
  }
`;

export const CheckInsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(2px + (3 - 2) * (100vw - 1280px) / (1920 - 1280));
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: calc(10px + (15 - 10) * (100vw - 1280px) / (1920 - 1280));
  line-height: calc(9px + (14 - 9) * (100vw - 1280px) / (1920 - 1280));
  text-align: center;
  letter-spacing: calc(0.25px + (0.375 - 0.25) * (100vw - 1280px) / (1920 - 1280));
  color: white;

  span {
    font-weight: 400;
    font-size: calc(7px + (10.5 - 7) * (100vw - 1280px) / (1920 - 1280));
  }

  @media screen and (max-width: 1280px) {
    gap: calc(1.5px + (2 - 1.5) * (100vw - 1024px) / (1280 - 1024));
    font-size: calc(8px + (10 - 8) * (100vw - 1024px) / (1280 - 1024));
    line-height: calc(7px + (9 - 7) * (100vw - 1024px) / (1280 - 1024));
    letter-spacing: calc(0.2px + (0.25 - 0.2) * (100vw - 1024px) / (1280 - 1024));

    span {
      font-size: calc(5.5px + (7 - 5.5) * (100vw - 1024px) / (1280 - 1024));
    }
  }

  @media screen and (max-width: 1024px) {
    gap: calc(1px + (1.5 - 1) * (100vw - 480px) / (1024 - 480));
    font-size: calc(5.5px + (8 - 5.5) * (100vw - 480px) / (1024 - 480));
    line-height: calc(5px + (7 - 5) * (100vw - 480px) / (1024 - 480));
    letter-spacing: calc(0.15px + (0.2 - 0.15) * (100vw - 480px) / (1024 - 480));

    span {
      font-size: calc(3.75px + (5.5 - 3.75) * (100vw - 480px) / (1024 - 480));
    }
  }

  @media screen and (max-width: 480px) {
    gap: 1px;
    font-size: 5.5px;
    line-height: 5px;
    letter-spacing: 0.15px;

    span {
      font-size: 3.75px;
    }
  }
`;

export const ConnectionsStyled = styled(CheckInsStyled)``;

export const LevelStyled = styled.div`
  padding: calc(7px + (9 - 7) * (100vw - 1280px) / (1920 - 1280)) calc(10px + (14 - 10) * (100vw - 1280px) / (1920 - 1280));
  border-radius: calc(5px + (7.5 - 5) * (100vw - 1280px) / (1920 - 1280));
  border-style: solid;
  border-width: calc(2px + (3 - 2) * (100vw - 1280px) / (1920 - 1280));
  border-color: white;
  background: #782FED;
  color: white;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: calc(10px + (16 - 10) * (100vw - 1280px) / (1920 - 1280));
  line-height: calc(7px + (10 - 7) * (100vw - 1280px) / (1920 - 1280));
  text-align: center;
  letter-spacing: 0.75px;

  @media screen and (max-width: 1280px) {
    padding: calc(5.5px + (7 - 5.5) * (100vw - 1024px) / (1280 - 1024)) calc(7.5px + (10 - 7.5) * (100vw - 1024px) / (1280 - 1024));
    border-radius: calc(4px + (5 - 4) * (100vw - 1024px) / (1280 - 1024));
    border-width: calc(1.5px + (2 - 1.5) * (100vw - 1024px) / (1280 - 1024));
    font-size: calc(8px + (10 - 8) * (100vw - 1024px) / (1280 - 1024));
    line-height: calc(6px + (7 - 6) * (100vw - 1024px) / (1280 - 1024));
  }

  @media screen and (max-width: 1024px) {
    padding: calc(3.5px + (5.5 - 3.5) * (100vw - 480px) / (1024 - 480)) calc(5px + (7.5 - 5) * (100vw - 480px) / (1024 - 480));
    border-radius: calc(2.5px + (4 - 2.5) * (100vw - 480px) / (1024 - 480));
    border-width: calc(1px + (1.5 - 1) * (100vw - 480px) / (1024 - 480));
    font-size: calc(5.5px + (8 - 5.5) * (100vw - 480px) / (1024 - 480));
    line-height: calc(4px + (6 - 4) * (100vw - 480px) / (1024 - 480));
  }

  @media screen and (max-width: 480px) {
    padding: 3.5px 5px;
    border-radius: 2.5px;
    border-width: 1px;
    font-size: 5.5px;
    line-height: 4px;
  }
`;
