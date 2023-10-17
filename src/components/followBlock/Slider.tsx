import {memo, useEffect, useRef, useState} from 'react';
import {
    SliderWrapperStyled,
    SliderContainerStyled,
    GradientContainerStyled, GradientStyled, ImageContainerStyled, ImageStyled, SlideStyled,
} from './FollowBlock.styled';

import useWindowSize from '../../hooks/useWindowSize/useWindowSize.ts';
import {SlideType} from './FollowBlock';

type SliderPropsType = {
    data: Array<SlideType>,
    isMobile: boolean,
    maxDuration: number,
    delay: number,
};

type ClonesType = {
    head: number,
    tail: number,
};

export const Slider = memo(({data, isMobile, maxDuration, delay}: SliderPropsType) => {
    const [slides, setSlides] = useState<Array<SlideType>>([]);
    const [offSet, setOffSet] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [gradientWidth, setGradientWidth] = useState<number>(0);
    const [clonesCount, setClonesCount] = useState<ClonesType>({head: 0, tail: 0});

    const windowSize = useWindowSize();

    const refSlide = useRef<HTMLDivElement>(null);
    const windowElRef = useRef<HTMLDivElement>(null);

    const gap = 20;

    const moveSlider = () => {
        setDuration(maxDuration);
        if (refSlide.current && windowSize.width) {
            setOffSet((currenOffSet) => {
                const newOffset = currenOffSet + width;
                return Math.min(newOffset, 115)
            })
        }
    }

    useEffect(() => {
        const newSlides: Array<SlideType> = isMobile
            ? [{...data[data.length - 1], id: data[0].id - 1}, ...data, {...data[0], id: data[data.length - 1].id + 1}]
            : [{...data[data.length - 1], id: data[0].id - 1}, ...data, {
                ...data[0],
                id: data[data.length - 1].id + 1
            }, {...data[1], id: data[data.length - 1].id + 2}];
        setSlides(newSlides);
        setClonesCount({head: 1, tail: 2});
    }, [])

    useEffect(() => {
        if (refSlide.current && windowSize.width) {
            const maxWidth = windowSize.width > 1920 ? 1920 : windowSize.width;
            const centeredDistance = (maxWidth - refSlide.current.offsetWidth) / 2 - gap;
            const value = centeredDistance - refSlide.current.offsetWidth;
            if (offSet >= value) {
                setTimeout(() => {
                    setDuration(0);
                    setOffSet(centeredDistance - (width * (slides.length - clonesCount.tail)) + gap);
                }, maxDuration)
            }
        }
    }, [windowSize.width, refSlide, offSet])

    useEffect(() => {
        const resizeHandler = () => {
            if (refSlide.current) {
                setWidth(refSlide.current.offsetWidth + gap);
                if (windowSize.width) {
                    const maxWidth = windowSize.width > 1920 ? 1920 : windowSize.width;
                    const centeredDistance = (maxWidth - refSlide.current.offsetWidth) / 2 - gap;
                    setGradientWidth(centeredDistance);
                    setOffSet(-(clonesCount.head) * (refSlide.current.offsetWidth - centeredDistance) - refSlide.current.offsetWidth - gap);
                }
            }
        };

        resizeHandler();
        window.addEventListener('resize', resizeHandler)

        return () => window.removeEventListener('resize', resizeHandler)
    }, [windowSize.width, refSlide, clonesCount, slides])

    useEffect(() => {
        setInterval(() => {
            moveSlider()
        }, maxDuration + delay);
    }, [width])

    return (
        <SliderWrapperStyled ref={windowElRef}>
            <GradientContainerStyled gradientWidth={gradientWidth} left>
                <GradientStyled left/>
            </GradientContainerStyled>
            <SliderContainerStyled offSet={offSet} gap={gap} duration={duration}>
                {slides.map(slide => <SlideStyled key={slide.id} ref={refSlide}>
                    {isMobile
                        ? <ImageContainerStyled>
                            <ImageStyled src={slide.images[0]}/>
                        </ImageContainerStyled>
                        : slide.images.map(image => <ImageContainerStyled key={image}>
                            <ImageStyled src={image}/>
                        </ImageContainerStyled>)
                    }
                </SlideStyled>)}
            </SliderContainerStyled>
            <GradientContainerStyled gradientWidth={gradientWidth}>
                <GradientStyled/>
            </GradientContainerStyled>
        </SliderWrapperStyled>
    )
})
