import styled from 'styled-components';

export const MainBlockContainerStyled = styled.div`
  width: 100%;
  height: 75vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    height: 70vh;
  }

  @media screen and (max-width: 1280px) {
    height: 75vh;
  }

  @media screen and (max-width: 768px) {
    padding: 60px 24px;
  }

  @media screen and (max-width: 728px) {
    height: 90vh;
  }

  @media screen and (max-width: 480px) {
    height: 100vh;
    padding: 30px 24px;
  }

  @media screen and (max-width: 360px) {
    padding: 30px 16px;
  }
`;

export const AvatarsContainerStyled = styled.div`
  width: 100%;
  max-width: 1234px;
  height: 53%;
  position: absolute;
  left: 50%;
  top: 35vh;
  transform: translateX(-50%);
  z-index: 1;

  @media screen and (max-width: 1440px) {
    top: calc(40vh + (35vh - 40vh) * (100vh - 1280px) / (1440 - 1280));
  }

  @media screen and (max-width: 1280px) {
    top: 40vh;
  }

  @media screen and (max-width: 1024px) {
    height: 56%;
    top: 27%;
  }

  @media screen and (max-width: 768px) {
    height: 50vh;
    top: 35%;
  }

  @media screen and (max-width: 728px) {
    height: 65vh;
  }

  @media screen and (max-height: 900px) {
    top: auto;
    bottom: 0;
  }
`;
