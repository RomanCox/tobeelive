import styled from 'styled-components';

type ButtonStyledPropsType = {
    tg?: boolean,
};
export const FooterContainerStyled = styled.div`
  width: 100%;
  height: 220px;
  margin-top: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1280px) {
    height: 160px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: calc(150px + (250 - 150) * (100vw - 768px) / (1024 - 768));
  }

  @media screen and (max-width: 768px) {
    margin-top: 150px;
    height: 118px;
  }
  
  @media screen and (max-width: 360px) {
    padding: 0 16px;
  }
`;

export const ButtonsContainerStyled = styled.div`
  width: 364px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 768px) {
    width: 304px;
    height: 48px;
  }
`;

export const ButtonStyled = styled.a<ButtonStyledPropsType>`
  width: 60px;
  height: 60px;
  padding-right: ${({ tg = false }) => tg ? '2px' : '0'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: ${({ tg = false }) => tg ? '#782FED' : 'rgba(174, 156, 245, 0.1)'};
  box-shadow: ${({ tg = false }) => tg
    ? '0 0 8px rgba(6, 23, 79, 0.1), inset 1px 1px 0 rgba(255, 255, 255, 0.7)'
    : '0 0 8px rgba(6, 23, 79, 0.1), inset 1px 1px 0 rgba(255, 255, 255, 0.25)'};
  cursor: pointer;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
