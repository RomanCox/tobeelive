import {memo, useEffect, useState} from 'react';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize.ts';

import {
    FollowBlockStyled, FollowSquareContainerStyled,
    TitleStyled,
} from './FollowBlock.styled';

import {ParallaxImage} from './ParallaxImage';
import {Slider} from './Slider';
import {Footer} from './footer/Footer.component';
import {Portal} from './Portal';

import fashionista from '../../assets/images/followBlock/fashionista.webp';
import february from '../../assets/images/followBlock/february.webp';
import manager from '../../assets/images/followBlock/manager.webp';
import avatarDesignBeginning from '../../assets/images/followBlock/avatarDesignBeginning.webp';
import lifeBalance from '../../assets/images/followBlock/lifeBalance.webp';
import celebrity from '../../assets/images/followBlock/celebrity.webp';
import activities from '../../assets/images/followBlock/activities.webp';
import avatarDesign from '../../assets/images/followBlock/avatarDesign.webp';
import testing from '../../assets/images/followBlock/testing.webp';
import image from '../../assets/images/followBlock/image.webp';
import {CursorLocationType} from '../../App';

type FollowBlockPropsType = {
    cursorLocation: CursorLocationType,
}

export type SlideType = {
    id: number,
    images: Array<string>
}

export const FollowBlock = memo(({cursorLocation}: FollowBlockPropsType) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [data, setData] = useState<Array<SlideType>>([
        {
            id: 0,
            images: [fashionista, february, celebrity],
        },
        {
            id: 1,
            images: [avatarDesignBeginning, lifeBalance, manager],
        },
        {
            id: 2,
            images: [activities, avatarDesign, testing],
        },
    ]);
    const windowSize = useWindowSize();

    const parallaxIcons = [
        {
            id: 0,
            icon: image,
            alt: 'image',
            coefficient: {
                x: 25,
                y: 12,
            },
            container: {
                d1920: {
                    side: 12.5,
                    top: 125,
                    left: 75,
                },
                d1440: {
                    side: 12.5,
                    top: 125,
                    left: 75,
                },
                d1280: {
                    side: 12.5,
                    top: 75,
                    left: 75,
                },
                t1024: {
                    side: 12.5,
                    top: 150,
                    left: 75,
                },
                t768: {
                    side: 18,
                    top: 75,
                    left: 0,
                },
                m480: {
                    side: 31,
                    top: 75,
                    left: -25,
                },
                m360: {
                    side: 42,
                    top: 50,
                    left: -35,
                },
            },
        },
        {
            id: 1,
            icon: image,
            alt: 'image',
            coefficient: {
                x: -40,
                y: -18,
            },
            container: {
                d1920: {
                    side: 15.5,
                    top: 200,
                    left: 1375,
                },
                d1440: {
                    side: 15.5,
                    top: 200,
                    left: 1050,
                },
                d1280: {
                    side: 15.5,
                    top: 150,
                    left: 850,
                },
                t1024: {
                    side: 15.5,
                    top: 175,
                    left: 725,
                },
                t768: {
                    side: 20,
                    top: 100,
                    left: 525,
                },
                m480: {
                    side: 31,
                    top: 125,
                    left: 350,
                },
                m360: {
                    side: 41,
                    top: 100,
                    left: 250,
                },
            },
        },
    ];

    useEffect(() => {
        if (windowSize.width && windowSize.width <= 480) {
            setIsMobile(true);
            setData([
                {
                    id: 0,
                    images: [fashionista],
                },
                {
                    id: 1,
                    images: [february],
                },
                {
                    id: 2,
                    images: [celebrity],
                },
                {
                    id: 3,
                    images: [avatarDesignBeginning],
                },
                {
                    id: 4,
                    images: [lifeBalance],
                },
                {
                    id: 5,
                    images: [manager],
                },
                {
                    id: 6,
                    images: [activities],
                },
                {
                    id: 7,
                    images: [avatarDesign],
                },
                {
                    id: 8,
                    images: [testing],
                },
            ]);
        }
        if (windowSize.width && windowSize.width > 480) {
            setIsMobile(false);
            setData([
                {
                    id: 0,
                    images: [fashionista, february, celebrity],
                },
                {
                    id: 1,
                    images: [avatarDesignBeginning, lifeBalance, manager],
                },
                {
                    id: 2,
                    images: [activities, avatarDesign, testing],
                },
            ]);
        }
    }, [windowSize.width])

    return (
        <FollowBlockStyled>
            {windowSize.width && windowSize.width > 1940 && <Portal/>}
            <FollowSquareContainerStyled/>
            {windowSize.width && windowSize.width > 1940 && <Portal right/>}
            {parallaxIcons.map(icon =>
                <ParallaxImage key={icon.id} data={icon} cursorLocation={cursorLocation}/>
            )}
            <TitleStyled>Follow our development</TitleStyled>
            <Slider data={data} isMobile={isMobile} maxDuration={1000} delay={isMobile ? 1500 : 5000}/>
            <Footer/>
        </FollowBlockStyled>
    )
})
