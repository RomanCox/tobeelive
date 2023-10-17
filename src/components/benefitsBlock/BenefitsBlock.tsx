import {memo} from 'react';
import {BenefitsBlockContainerStyled, BenefitsPictureBlockStyled} from './BenefitsBlock.styled';
import realLife from '../../assets/images/benefitsBlock/realLife.webp';
import onlineGaming from '../../assets/images/benefitsBlock/onlineGaming.webp'
import {BenefitsContext} from './BenefitsContext';

export const BenefitsBlock = memo(() => {
    return (
        <BenefitsBlockContainerStyled>
            <BenefitsPictureBlockStyled>
                <img src={onlineGaming} alt={'onlineGaming'}/>
                <img src={realLife} alt={'real life'}/>
            </BenefitsPictureBlockStyled>
            <BenefitsContext/>
        </BenefitsBlockContainerStyled>
    )
});
