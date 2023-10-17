import styled from 'styled-components';
import {PositionPropsType} from './Avatars.types';

export const AvatarStyled = styled.div<PositionPropsType>`
  width: ${({ position }) => position === 'central' ? '100%' : 'auto'};
  height: ${({ position }) => position === 'central' ? '100%' : '80%'};
  position: absolute;
  top: ${({ position }) => position === 'central' ? 'auto' : '0'};
  left: ${({ position }) => position === 'central' ? '50%' : position === 'left' ? '0' : 'auto'};
  bottom: ${({ position }) => position === 'central' ? '0' : 'auto'};
  right: ${({ position }) => position === 'right' ? '0' : 'auto'};
  transform: ${({ position }) => position === 'central' ? 'translateX(-50%)' : 'none'};
  //z-index: ${({ position }) => position === 'central' ? '1' : '2'};
  z-index: 1;
  user-select: none;

  @media screen and (max-width: 768px) {
    left: ${({ position }) => position === 'central' ? '50%' : position === 'left' ? '-6%' : 'auto'};
    right: ${({ position }) => position === 'right' ? '-6%' : 'auto'};
  }

  @media screen and (max-width: 650px) {
    left: ${({ position }) => position === 'central' ? '50%' : position === 'left' ? '-10%' : 'auto'};
    right: ${({ position }) => position === 'right' ? '-10%' : 'auto'};
  }

  @media screen and (max-width: 430px) {
    width: ${({ position }) => position === 'central' ? '100%' : '65%'};
    left: ${({ position }) => position === 'central' ? '50%' : position === 'left' ? '-15%' : 'auto'};
    right: ${({ position }) => position === 'right' ? '-15%' : 'auto'};
  }
  
  @media screen and (max-width: 410px) {
    left: ${({ position }) => position === 'central' ? '50%' : position === 'left' ? '-20%' : 'auto'};
    right: ${({ position }) => position === 'right' ? '-20%' : 'auto'};
  }

  img {
    z-index: 2;
    object-fit: contain;
  }
  
  video {
    z-index: 2;
    object-fit: contain;
  }
`;
