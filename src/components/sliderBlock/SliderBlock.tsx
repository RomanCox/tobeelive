import {memo, useCallback, useMemo, useState} from 'react';
import {
    SliderBlockContainerStyled,
    CarouselWrapperStyled,
    SliderPictureContainerStyled,
    PictureContainerStyled,
    PictureStyled,
} from './SliderBlock.styled';
import influenceYourFriends from '../../assets/images/sliderBlock/influenceYourFriends.webp';
import meetYourFriends from '../../assets/images/sliderBlock/meetYourFriends.webp';
import playWithYourFriends from '../../assets/images/sliderBlock/playWithYourFriends.webp';
import {Carousel} from './Carousel/Carousel';

export type SlideType = {
    id: number,
    text: string,
    image: string,
    alt: string,
}

export const SliderBlock = memo(() => {
    const [index, setIndex] = useState<number>(1);
    const [isOpacity, setIsOpacity] = useState<boolean>(false);

    const duration = useMemo(() => 500, []);

    const initialSlides: Array<SlideType> = useMemo(() => [
        {id: 0, text: 'Influence your friends', image: influenceYourFriends, alt: 'Influence your friends'},
        {id: 1, text: 'Meet your friends', image: meetYourFriends, alt: 'Meet your friends'},
        {id: 2, text: 'Play with your friends', image: playWithYourFriends, alt: 'Play with your friends'},
        {id: 3, text: 'Influence your friends', image: influenceYourFriends, alt: 'Influence your friends'},
        {id: 4, text: 'Meet your friends', image: meetYourFriends, alt: 'Meet your friends'},
        {id: 5, text: 'Play with your friends', image: playWithYourFriends, alt: 'Play with your friends'},
    ], []);

    const moveSlide = useCallback(() => {
        setIsOpacity(true);
        if (index === 3) {
            setTimeout(() => {
                setIndex(1)
                setIsOpacity(false);
            }, duration/2)
        } else {
            setTimeout(() => {
                setIndex(index + 1);
                setIsOpacity(false);
            }, duration / 2)
        }
    }, [index]);

    return (
        <SliderBlockContainerStyled>
            <CarouselWrapperStyled>
                <Carousel initialSlides={initialSlides} moveSlide={moveSlide} duration={duration} index={index}/>
            </CarouselWrapperStyled>
            <SliderPictureContainerStyled>
                <PictureContainerStyled isOpacity={isOpacity}>
                    <PictureStyled src={initialSlides[index].image} alt={initialSlides[index].alt}/>
                </PictureContainerStyled>
            </SliderPictureContainerStyled>
        </SliderBlockContainerStyled>
    )
})
