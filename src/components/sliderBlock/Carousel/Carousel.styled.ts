import styled from 'styled-components';

type SlidesContainerStyledPropsType = {
    offset: number,
    transitionDuration: number,
};

type SlideContainerStyledPropsType = {
    size: number,
};

type AnimationType = 'none' | 'increase' |'decrease';

type TextStyledPropsType = {
    isDedicated: boolean,
    animation: AnimationType,
};

export const CarouselContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const WindowStyled = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SlidesContainerStyled = styled.div<SlidesContainerStyledPropsType>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  transform: ${({ offset }) => `translateY(${offset}px)`};
  transition: translateY;
  transition-property: transform;
  transition-duration: ${({ transitionDuration }) => `${transitionDuration}ms`};
  transition-timing-function: ease-in-out;

  @media screen and (max-width: 768px) {
    gap: 22px;
  }
`;

export const SlideContainerStyled = styled.div<SlideContainerStyledPropsType>`
  width: 100%;
  min-height: 52px;
  max-height: 52px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    min-height: 28px;
    max-height: 28px;
  }
`;

export const TextStyled = styled.span<TextStyledPropsType>`
  font-family: 'Commissioner', sans-serif;
  font-style: normal;
  font-weight: ${({ isDedicated }) => isDedicated ? '700' : '400'};
  font-size: ${({ isDedicated }) => isDedicated ? '52px' : '48px'};
  line-height: 52px;
  color: ${({ isDedicated }) => isDedicated ? 'white' : 'rgba(255, 255, 255, 0.3)'};
  text-align: left;
  user-select: none;
  animation: ${({ animation }) => animation === 'decrease' ? 'decrease .5s ease-in-out forwards' : animation === 'increase' ? 'increase .5s ease-in-out forwards' : 'none'};

  @keyframes increase {
    0% {
      font-weight: 400;
      font-size: 48px;
      color: rgba(255, 255, 255, 0.3);
    }
    100% {
      font-weight: 700;
      font-size: 52px;
      color: white;
    }
  }

  @keyframes decrease {
    0% {
      font-weight: 700;
      font-size: 52px;
      color: white;
    }
    100% {
      font-weight: 400;
      font-size: 48px;
      color: rgba(255, 255, 255, 0.3);
    }
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ isDedicated }) => isDedicated ? '28px' : '26px'};
    line-height: 32px;
    text-align: center;

    @keyframes increase {
      0% {
        font-weight: 400;
        font-size: 26px;
        color: rgba(255, 255, 255, 0.3);
      }
      100% {
        font-weight: 700;
        font-size: 28px;
        color: white;
      }
    }

    @keyframes decrease {
      0% {
        font-weight: 700;
        font-size: 28px;
        color: white;
      }
      100% {
        font-weight: 400;
        font-size: 26px;
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;
