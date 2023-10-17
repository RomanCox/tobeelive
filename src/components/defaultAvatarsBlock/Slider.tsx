import {memo, Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';

import useWindowSize from '../../hooks/useWindowSize/useWindowSize.ts';

import {
    SliderWrapperStyled, SliderContainerStyled, ImageStyled, NickNameStyled,
    NumbersContentContainerStyled, CheckInsAndConnectionsStyled, CheckInsStyled,
    ConnectionsStyled, LevelStyled, SlideContainerStyled
} from './DefaultAvatarsBlock.styled';

import {SlideType} from './DefaultAvatarsBlock';

type PropsType = {
    data: Array<SlideType>,
    isMove: boolean,
    setIsMove: Dispatch<SetStateAction<boolean>>,
    reverse?: boolean,
};

export type CoefficientType = 0 | 1;

export const Slider = memo(({data, isMove, setIsMove, reverse = false}: PropsType) => {
    const [offSet, setOffSet] = useState<number>(0);
    const [gap, setGap] = useState<number>(0);
    const [coefficient, setCoefficient] = useState<CoefficientType>(0);

    const windowSize = useWindowSize();

    const containerRef = useRef<HTMLDivElement>(null);

    const slides = [...data, ...data];

    useEffect(() => {
        if (windowSize.width && windowSize.width > 1920) {
            setGap(30);
        } else if (windowSize.width && windowSize.width > 1440) {
            const value = 20 + (30 - 20) * (windowSize.width - 1440) / (1920 - 1440);
            setGap(Math.round(value));
        } else if (windowSize.width && windowSize.width > 1280) {
            const value = 15 + (20 - 15) * (windowSize.width - 1280) / (1440 - 1280);
            setGap(value);
        } else if (windowSize.width && windowSize.width > 1024) {
            const value = 10 + (15 - 10) * (windowSize.width - 480) / (1024 - 480);
            setGap(value);
        } else if (windowSize.width && windowSize.width <= 1024) {
            setGap(10);
        }
    }, [windowSize.width])

    useEffect(() => {
        if (isMove) {
            setCoefficient(1);
            setTimeout(() => {
                setIsMove(false)
            }, 30000)
        } else {
            setCoefficient(0);
            setIsMove(true);
        }
    }, [isMove])

    useEffect(() => {
        if (containerRef.current) {
            setOffSet(Math.ceil((containerRef.current.offsetWidth - gap) / 2) + gap / 2);
        }
        setIsMove(true);
    }, [containerRef, gap])

    return (
        <SliderWrapperStyled reverse={reverse}>
            <SliderContainerStyled ref={containerRef}
                                   isMove={isMove}
                                   offSet={offSet}
                                   coefficient={coefficient}
                                   gap={gap}
                                   reverse={reverse}>
                {slides.map((slide, index) =>
                    <SlideContainerStyled key={slide.nickname + index}>
                        <ImageStyled src={slide.image}/>
                        <NickNameStyled>{slide.nickname}</NickNameStyled>
                        <NumbersContentContainerStyled>
                            <CheckInsAndConnectionsStyled>
                                <CheckInsStyled>
                                    {slide.checkins} K
                                    <span>check-ins</span>
                                </CheckInsStyled>
                                <ConnectionsStyled>
                                    {slide.connections}
                                    <span>connections</span>
                                </ConnectionsStyled>
                            </CheckInsAndConnectionsStyled>
                            <LevelStyled>
                                LV. {slide.level}
                            </LevelStyled>
                        </NumbersContentContainerStyled>
                    </SlideContainerStyled>
                )}
            </SliderContainerStyled>
        </SliderWrapperStyled>
    )
})
