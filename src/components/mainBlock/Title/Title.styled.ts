import styled from 'styled-components';

export const TitleContainerStyled = styled.div`
  width: 889px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  position: relative;
  z-index: 2;
  
  @media screen and (max-width: 1024px), (max-height: 850px) {
    width: 557px;
    gap: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 15px;
  }

  @media screen and (max-width: 360px) {
    gap: 10px;
  }
`;

export const TitleStyled = styled.h1`
  width: 116px;
  margin: 0;
  font-family: 'Unbounded', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: white;
  user-select: none;
  
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px), (max-height: 850px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`;

export const DescriptionStyled = styled.h3`
  width: 100%;
  margin: 0;
  font-family: 'Commissioner', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  text-align: center;
  color: white;
  user-select: none;

  @media screen and (max-width: 1024px), (max-height: 850px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @media screen and (max-width: 360px) {
    height: 58px;
    font-size: 24px;
  }
`;

export const ButtonContainerStyled = styled.div`
  margin-top: 25px;

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 15px;
  }

  @media screen and (max-width: 360px) {
    margin-top: 10px;
  }
`;
