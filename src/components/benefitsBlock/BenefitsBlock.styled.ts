import styled from 'styled-components';

export const BenefitsBlockContainerStyled = styled.div`
  width: 100%;
  margin-top: 220px;
  padding: 30px calc(50px + (120 - 50) * (100vw - 1280px) / (1920 - 1280));
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    margin-top: 180px;
    gap: 14px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 140px;
    gap: 11px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 calc(12px + (40 - 12) * (100vw - 360px) / (960 - 360));
    flex-direction: column;
    gap: 12px;
  }
`;

export const BenefitsPictureBlockStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
  gap: 20px;

  img {
    width: auto;
    height: calc((100vh - 60px - 20px) / 2);
    max-height: 449px;
    object-fit: contain;
  }

  @media screen and (max-width: 1440px) {
    gap: 14px;

    img {
      height: calc(((100vw - 2 * (50px + (120 - 50) * (100vw - 1280px) / (1920 - 1280))) * 65 / 100 - 14px) / 2.226);
    }
  }

  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    gap: 11px;

    img {
      height: calc(((100vw - 2 * (50px + (120 - 50) * (100vw - 1280px) / (1920 - 1280))) * 65 / 100 - 11px) / 2.226);
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const BenefitsContextStyled = styled.div`
  //width: calc((100vw - 2 * (50px + (120 - 50) * (100vw - 1280px) / (1920 - 1280))) * 35 / 100 - 20px);
  width: 29vw;
  //height: calc(2 * ((100vw - 2 * (50px + (120 - 50) * (100vw - 1280px) / (1920 - 1280))) * 65 / 100 - 20px) / 2.226 + 20px);
  height: auto;
  padding: 40px 0 0 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 2;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    width: calc((100vw - 2 * (50px + (120 - 50) * (100vw - 1280px) / (1920 - 1280))) * 35 / 100 - 14px);
    height: calc(2 * ((100vw - 2 * (50px + (120 - 50) * (100vw - 1280px) / (1920 - 1280))) * 65 / 100 - 14px) / 2.226 + 14px);
    padding: 45px 0 0 25px;
    gap: 22px;
  }

  @media screen and (max-width: 1024px) {
    width: calc((100vw - 2 * (50px + (120 - 50) * (100vw - 1280px) / (1920 - 1280))) * 35 / 100 - 11px);
    //height: calc(2 * ((100vw - 2 * (50px + (120 - 50) * (100vw - 1280px) / (1920 - 1280))) * 65 / 100 - 11px) / 2.226 + 11px);
    height: auto;
    padding: 30px 0 0 20px;
    gap: 16px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    //height: calc(385px + (555 - 385) * (100vw - 480px) / (960 - 480));
    height: auto;
    padding: calc(30px + (40 - 30) * (100vw - 480px) / (960 - 480));
    gap: calc(20px + (40 - 20) * (100vw - 480px) / (960 - 480));
  }

  @media screen and (max-width: 768px) {
    //height: 395px;
    //padding: 30px;
    //gap: 20px;
  }
`;

export const BackgroundStyled = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;


export const BenefitsTitleStyled = styled.div`
  width: 377px;
  font-family: Commissioner, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 67px;
  letter-spacing: 0;
  text-align: left;
  color: white;

  @media screen and (max-width: 1440px) {
    width: 310px;
    font-size: 40px;
    line-height: 56px;
  }

  @media screen and (max-width: 1024px) {
    width: 232px;
    font-size: 32px;
    line-height: 45px;
  }

  @media screen and (max-width: 960px) {
    width: calc(350px + (450 - 350) * (100vw - 480px) / (960 - 480));
    font-size: calc(32px + (40 - 32) * (100vw - 480px) / (960 - 480));
    line-height: calc(38px + (56 - 38) * (100vw - 480px) / (960 - 480));
  }

  @media screen and (max-width: 768px) {
    //font-size: 32px;
    //line-height: 45px;
  }

  @media screen and (max-width: 480px) {
    width: calc(275px + (350 - 275) * (100vw - 360px) / (480 - 360));
    font-size: calc(24px + (32 - 24) * (100vw - 360px) / (480 - 360));
    line-height: calc(29px + (38 - 29) * (100vw - 360px) / (480 - 360));
  }
`;

const BenefitsTextStyled = styled.div`
  width: 330px;
  font-family: Commissioner, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0;
  text-align: left;
  color: white;

  @media screen and (max-width: 1440px) {
    width: 290px;
  }

  @media screen and (max-width: 1024px) {
    width: 232px;
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (max-width: 960px) {
    width: 350px;
    font-size: calc(16px + (24 - 16) * (100vw - 480px) / (960 - 480));
    line-height: calc(20px + (29 - 20) * (100vw - 480px) / (960 - 480));
  }

  @media screen and (max-width: 768px) {
    //font-size: 20px;
    //line-height: 24px;
  }

  @media screen and (max-width: 620px) {
    width: 190px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 360px) {
    width: 165px;
  }
`;

export const BenefitsOrangeTextStyled = styled(BenefitsTextStyled)`
  margin-top: 26px;

  span {
    font-weight: 600;
    color: #F2A70A;
  }

  @media screen and (max-width: 1440px) {
    margin-top: 4px;
  }

  @media screen and (max-width: 960px) {
    margin-top: calc(4px + (26 - 4) * (100vw - 480px) / (960 - 480));
  }

  @media screen and (max-width: 480px) {
    margin-top: 4px;
  }
`;

export const CircleImageStyled = styled.img`
  width: 70px;
  height: 70px;
  background-size: contain;

  @media screen and (max-width: 1440px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 960px) {
    width: calc(40px + (70 - 40) * (100vw - 480px) / (960 - 480));
    height: calc(40px + (70 - 40) * (100vw - 480px) / (960 - 480));
  }

  @media screen and (max-width: 768px) {
    //width: 50px;
    //height: 50px;
  }
`;

export const BenefitsBlueTextStyled = styled(BenefitsTextStyled)`
  
  span {
    font-weight: 600;
    color: #00E4D7;
  }

  @media screen and (max-width: 1440px) {
    width: 270px;
  }

  @media screen and (max-width: 960px) {
    width: 350px;
  }

  @media screen and (max-width: 620px) {
    width: 190px;
  }

  @media screen and (max-width: 480px) {
    width: 190px;
  }

  @media screen and (max-width: 360px) {
    width: 170px;
  }
`;

export const CoffeeCupStyled = styled.img`
  width: 150px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 64px;

  @media screen and (max-width: 1920px) {
    width: calc(120px + (150 - 120) * (100vw - 1440px) / (1920 - 1440));
    bottom: calc(6px + (0 - 6) * (100vw - 1440px) / (1920 - 1440));
    left: calc(84px + (64 - 84) * (100vw - 1440px) / (1920 - 1440));
  }

  @media screen and (max-width: 1440px) {
    width: calc(70px + (120 - 70) * (100vw - 1024px) / (1440 - 1024));
    bottom: 6px;
    left: 34px;
  }

  @media screen and (max-width: 1024px) {
    width: 70px;
  }

  @media screen and (max-width: 960px) {
    width: calc(87px + (180 - 87) * (100vw - 480px) / (960 - 480));
    top: calc(150px + (30 - 150) * (100vw - 768px) / (960 - 768));
    bottom: auto;
    left: auto;
    right: calc(110px + (150 - 110) * (100vw - 768px) / (960 - 768));
  }

  @media screen and (max-width: 768px) {
    top: calc(150px + (30 - 150) * (100vw - 480px) / (768 - 480));
    right: calc(85px + (110 - 85) * (100vw - 480px) / (768 - 480));
  }

  @media screen and (max-width: 480px) {
    width: calc(75px + (87 - 75) * (100vw - 360px) / (480 - 360));
    top: 150px;
    right: calc(65px + (85 - 65) * (100vw - 360px) / (480 - 360));
  }

  @media screen and (max-width: 360px) {
    width: 75px;
    right: 65px;
  }
`;

export const HeadphoneStyled = styled.img`
  width: 400px;
  height: auto;
  position: absolute;
  bottom: -155px;
  right: -60px;
  z-index: 4;

  @media screen and (max-width: 1920px) {
    width: calc(300px + (400 - 300) * (100vw - 1440px) / (1920 - 1440));
    bottom: calc(-105px + (-155 + 105) * (100vw - 1440px) / (1920 - 1440));
    right: calc(-45px + (-60 + 45) * (100vw - 1440px) / (1920 - 1440));
  }

  @media screen and (max-width: 1440px) {
    width: calc(190px + (300 - 190) * (100vw - 1024px) / (1440 - 1024));
    bottom: -105px;
    right: calc(-30px + (-45 + 30) * (100vw - 1024px) / (1440 - 1024));
  }

  @media screen and (max-width: 1024px) {
    width: calc(400px + (190 - 400) * (100vw - 960px) / (1024 - 960));
    bottom: calc(-153px + (-75 + 153) * (100vw - 960px) / (1024 - 960));
    right: calc(-60px + (-30 + 60) * (100vw - 960px) / (1024 - 960));
  }
  
  @media screen and (max-width: 960px) {
    width: calc(165px + (400 - 165) * (100vw - 480px) / (960 - 480));
    bottom: calc(-60px + (-153 + 60) * (100vw - 480px) / (960 - 480));
    right: calc(-25px + (-60 + 25) * (100vw - 480px) / (960 - 480));
  }

  @media screen and (max-width: 480px) {
    width: calc(140px + (165 - 140) * (100vw - 360px) / (480 - 360));
    bottom: calc(-55px + (-60 + 55) * (100vw - 360px) / (480 - 360));
    right: calc(-10px + (-25 + 10) * (100vw - 360px) / (480 - 360));
  }

  @media screen and (max-width: 360px) {
    width: 140px;
    bottom: -55px;
    right: 10px;
  }
`;
