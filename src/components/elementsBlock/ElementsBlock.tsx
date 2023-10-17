import {memo, useRef, useEffect, useState} from 'react';

import {
    AvatarContainerStyled,
    ElementsBlockStyled, TextContainerStyled,
    ElementsSquareContainerStyled, CardContainerStyled,
    CardStyled, SunglassesStyled,
    TextStyled, CardBackgroundStyled, ActiveCardBackgroundStyled
} from './ElementsBlock.styled';

import useWindowSize from '../../hooks/useWindowSize/useWindowSize.ts';
import useOnScreen, {range} from '../../hooks/useOnScreen/useOnScreen.ts';
import {Portal} from './Portal';

import card from '../../assets/images/elementsBlock/card.webp';
import cardActive from '../../assets/images/elementsBlock/cardActive.webp';
import cardContainer from '../../assets/images/elementsBlock/cardContainer.webp';
import avatar from '../../assets/images/elementsBlock/avatar.webp';
import sunglasses from '../../assets/images/elementsBlock/sunglasses.webp';


export const ElementsBlock = memo(() => {
    const [isShow, setIsShow] = useState<boolean>(false);

    const windowSize = useWindowSize();
    const outerRef = useRef<HTMLDivElement>(null);
    const { ratio} = useOnScreen(outerRef, {threshold: range(0, 1, 0.01, 2)});

    const cards = [3, 2, 1, 0];

    useEffect(() => {
        if (!isShow && ratio >= 90) {
            setIsShow(true);
        }
        if (isShow && ratio <= 5) {
            setIsShow(false);
        }
    }, [ratio])

    return (
        <ElementsBlockStyled ref={outerRef}>
            {windowSize.width && windowSize.width > 1940 && <Portal/>}
            <ElementsSquareContainerStyled/>
            {windowSize.width && windowSize.width > 1940 && <Portal right/>}
            <AvatarContainerStyled>
                {cards.map(item => <CardContainerStyled key={item} card={item} isShow={isShow}>
                    <img src={cardContainer} alt={'avatar background container'}/>
                    {item === 0 &&
                        <CardStyled>
                            <CardBackgroundStyled src={card} alt={'avatar background'} isShow={isShow} />
                            <ActiveCardBackgroundStyled src={cardActive} alt={'avatar background'} isShow={isShow}/>
                            <img src={avatar} alt={'avatar'}/>
                            {isShow && <SunglassesStyled src={sunglasses} alt={'sunglasses'} isShow={isShow}/>}
                        </CardStyled>
                    }
                </CardContainerStyled>)}
            </AvatarContainerStyled>
            <TextContainerStyled>
                <TextStyled>
                    Collect unique elements, develop and share your avatar or become an
                    <span> opinion leader</span>
                </TextStyled>
            </TextContainerStyled>
        </ElementsBlockStyled>
    )
})
