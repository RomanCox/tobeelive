import styled from 'styled-components';
import {CircleType} from './Background.tsx';

type CircleStyledType = {
    circle: CircleType,
}

export const BackgroundContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #232230;
  overflow: hidden;
  box-sizing: border-box;
`;

export const CircleStyled = styled.div<CircleStyledType>`
  width: ${({circle}) => `${circle.width}px`};
  height: ${({circle}) => `${circle.height}px`};
  position: absolute;
  top: ${({circle}) => `${circle.top}%`};
  left: ${({circle}) => `${circle.left}%`};
  background: radial-gradient(50% 50% at 50% 50%, #7D5FEB 0%, rgba(125, 95, 235, 0) 100%);
  background: ${({circle}) => circle.color === 'blue'
    ? 'radial-gradient(50% 50% at 50% 50%, #7D5FEB 0%, rgba(125, 95, 235, 0) 100%)'
    : 'radial-gradient(50% 50% at 50% 50%, #FCD60E 0%, rgba(252, 14, 232, 0) 100%)'};
  opacity: ${({circle}) => circle.color === 'blue' ? '0.3' : '0.2'};
  filter: ${({circle}) => circle.color === 'blue' ? 'blur(25px)' : 'blur(50px)'};
  z-index: 0;
  animation: ${({circle}) => `${circle.title} 15s linear ${500 * circle.id}ms infinite`};

  @keyframes ${({circle}) => circle.title} {
    0% {
      top: ${({circle}) => `${circle.top}%`};
      left: ${({circle}) => `${circle.left}%`};
    }
    16.6% {
      top: ${({circle}) => `${circle.top + 5}%`};
      left: ${({circle}) => `${circle.left - 5}%`};
    }
    32.4% {
      top: ${({circle}) => `${circle.top - 5}%`};
    }
    50% {
      top: ${({circle}) => `${circle.top}%`};
      left: ${({circle}) => `${circle.left}%`};
    }
    65.6% {
      top: ${({circle}) => `${circle.top + 5}%`};
      left: ${({circle}) => `${circle.left + 5}%`};
    }
    82.4% {
      top: ${({circle}) => `${circle.top - 5}%`};
    }
    100% {
      top: ${({circle}) => `${circle.top}%`};
      left: ${({circle}) => `${circle.left}%`};
    }
  }
`;
