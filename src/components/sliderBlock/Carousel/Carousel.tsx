import {
    memo,
    useEffect,
    useState,
    useMemo, useCallback,
} from 'react';
import {
    CarouselContainerStyled,
    WindowStyled,
    SlidesContainerStyled, SlideContainerStyled, TextStyled,
} from './Carousel.styled';
import {SlideType} from '../SliderBlock';
import useWindowSize from '../../../hooks/useWindowSize/useWindowSize.ts';

type CarouselPropsType = {
    index: number,
    initialSlides: Array<SlideType>,
    moveSlide: () => void,
    duration: number,
};

export const Carousel = memo(({
                                        index,
                                        initialSlides,
                                        moveSlide,
                                        duration,
                                    }: CarouselPropsType) => {

    const windowSize = useWindowSize();

    // defaultOffset - its gap between slides + height of slide
    let defaultOffset = windowSize.width && windowSize.width > 783 ? 92 : 50;

    const [offset, setOffset] = useState<number>(0);
    const [transitionDuration, setTransitionDuration] = useState<number>(duration);
    const [isAnimation, setIsAnimation] = useState<boolean>(false);

    const animation = useMemo(() => {
        return (slideIndex: number) => {
            if (isAnimation) {
                if (slideIndex === index) {
                    return 'decrease'
                }
                if (slideIndex === index+1) {
                    return 'increase'
                }
            }
            return 'none'
        }
    }, [isAnimation]);

    const moveSlideHandler = useCallback(() => {
        moveSlide();
        setIsAnimation(true);
        setTimeout(() => {
            setIsAnimation(false);
        }, duration)
        setOffset(-(defaultOffset) * (index));
        if (index === 1) {
            setTransitionDuration(duration);
        }
    }, [index, defaultOffset]);

    useEffect(() => {
        if (index === 1) {
            setTimeout(() => {
                setTransitionDuration(0);
                setOffset(0);
            }, duration/2)
        }
    }, [index, duration])

    useEffect(() => {
        setTimeout(moveSlideHandler, 3000)
    }, [index])

    return (
        <CarouselContainerStyled>
            <WindowStyled>
                <SlidesContainerStyled offset={offset} transitionDuration={transitionDuration}>
                    {initialSlides.map((item, slideIndex) =>
                        <SlideContainerStyled key={item.id} size={52}>
                            <TextStyled isDedicated={slideIndex === index} animation={animation(slideIndex)}>{item.text}</TextStyled>
                        </SlideContainerStyled>
                    )}
                </SlidesContainerStyled>
            </WindowStyled>
        </CarouselContainerStyled>
    )
})
