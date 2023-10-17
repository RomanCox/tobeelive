import {memo} from 'react';
import {
    BenefitsContextStyled,
    BackgroundStyled,
    BenefitsTitleStyled,
    BenefitsOrangeTextStyled,
    CircleImageStyled,
    BenefitsBlueTextStyled,
    CoffeeCupStyled,
    HeadphoneStyled,
} from './BenefitsBlock.styled';
import border from '../../assets/images/benefitsBlock/border.webp';
import borderTabletBig from '../../assets/images/benefitsBlock/borderTabletBig.webp';
import borderTabletSmall from '../../assets/images/benefitsBlock/borderTabletBig.webp';
import borderMobileBig from '../../assets/images/benefitsBlock/borderMobileBig.webp';
import coffee from '../../assets/images/benefitsBlock/coffee.webp';
import headphones from '../../assets/images/benefitsBlock/headphones.webp';
import circle from '../../assets/images/benefitsBlock/circle.webp';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize.ts';

export const BenefitsContext = memo(() => {
    const windowSize = useWindowSize();

    const img = windowSize.width && windowSize.width > 960
        ? border
        :   windowSize.width && windowSize.width > 768 ? borderTabletBig :
            windowSize.width && windowSize.width > 480 ? borderTabletSmall : borderMobileBig;

    return (
        <BenefitsContextStyled>
            <BackgroundStyled src={img} alt={'Border'}/>
            <BenefitsTitleStyled>
                Bridge the gap between online and offline
            </BenefitsTitleStyled>
            <BenefitsOrangeTextStyled>
                Complete <span>daily quests</span>, take part in battle-games and fight for a <span>leadership</span> in app
            </BenefitsOrangeTextStyled>
            <CircleImageStyled src={circle} alt={'circle with arrows'}/>
            <BenefitsBlueTextStyled>
                Make orders and get <span>personal discounts in real life</span>
            </BenefitsBlueTextStyled>
            <CoffeeCupStyled src={coffee} alt={'cup of coffee'}/>
            <HeadphoneStyled src={headphones} alt={'headphone'}/>
        </BenefitsContextStyled>
    )
});
