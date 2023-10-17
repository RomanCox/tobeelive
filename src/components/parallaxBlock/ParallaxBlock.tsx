import {memo, useEffect, useState} from 'react';
import {
    ParallaxBlockContainerStyled,
    ParallaxSquareContainerStyled,
    ContentStyled,
    TextContainerStyled,
} from './ParallaxBlock.styled';
import {CursorLocationType} from '../../App';
import {ParallaxImage} from './ParallaxImage';
import joystick from '../../assets/images/parallaxBlock/joystick.webp';
import wallet from '../../assets/images/parallaxBlock/wallet.webp';
import planet from '../../assets/images/parallaxBlock/planet.webp';
import iridescentSphere from '../../assets/images/parallaxBlock/iridescentSphere.webp';
import coffee from '../../assets/images/parallaxBlock/coffee.webp';
import luminousSphere from '../../assets/images/parallaxBlock/luminousSphere.webp';
import stone from '../../assets/images/parallaxBlock/stone.webp';
import headphones from '../../assets/images/parallaxBlock/headphones.webp';
import butterfly from '../../assets/images/parallaxBlock/butterfly.webp';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize.ts';
import {Portal} from './Portal';

type ParallaxBlockPropType = {
    cursorLocation: CursorLocationType,
}

export const ParallaxBlock = memo(({cursorLocation}: ParallaxBlockPropType) => {
    const windowSize = useWindowSize();
    const [height, setHeight] = useState<number>(0);

    const parallaxIcons = [
        {
            id: 0,
            icon: joystick,
            alt: 'joystick',
            coefficient: {
                x: 25,
                y: 12,
            },
            container: {
                d1920: {
                    side: 11,
                    top: 17.4,
                    left: 326,
                },
                d1440: {
                    side: 11,
                    top: 25,
                    left: 235,
                },
                d1280: {
                    side: 11,
                    top: 14.6,
                    left: 205,
                },
                t1024: {
                    side: 11,
                    top: 23.5,
                    left: 165,
                },
                t768: {
                    side: 11,
                    top: 24,
                    left: 115,
                },
                m480: {
                    side: 13,
                    top: 26,
                    left: 55,
                },
                m360: {
                    side: 13,
                    top: 28,
                    left: 32,
                },
            },
        },
        {
            id: 1,
            icon: wallet,
            alt: 'wallet',
            coefficient: {
                x: -50,
                y: 25,
            },
            container: {
                d1920: {
                    side: 13,
                    top: 48.6,
                    left: 350,
                },
                d1440: {
                    side: 13,
                    top: 49.1,
                    left: 260,
                },
                d1280: {
                    side: 13,
                    top: 47.8,
                    left: 225,
                },
                t1024: {
                    side: 13,
                    top: 49,
                    left: 185,
                },
                t768: {
                    side: 13,
                    top: 49.5,
                    left: 130,
                },
                m480: {
                    side: 14,
                    top: 50,
                    left: 60,
                },
                m360: {
                    side: 15,
                    top: 49,
                    left: 40,
                },
            },
        },
        {
            id: 2,
            icon: planet,
            alt: 'planet',
            coefficient: {
                x: 75,
                y: -37,
            },
            container: {
                d1920: {
                    side: 12.5,
                    top: 31.2,
                    left: 880,
                },
                d1440: {
                    side: 12.5,
                    top: 35.8,
                    left: 660,
                },
                d1280: {
                    side: 12.5,
                    top: 29.2,
                    left: 585,
                },
                t1024: {
                    side: 12.5,
                    top: 34.5,
                    left: 475,
                },
                t768: {
                    side: 13.5,
                    top: 34.5,
                    left: 355,
                },
                m480: {
                    side: 14,
                    top: 36.5,
                    left: 225,
                },
                m360: {
                    side: 14,
                    top: 37.5,
                    left: 168,
                },
            },
        },
        {
            id: 3,
            icon: iridescentSphere,
            alt: 'iridescent sphere',
            coefficient: {
                x: -100,
                y: -50,
            },
            container: {
                d1920: {
                    side: 8.5,
                    top: 49.6,
                    left: 1200,
                },
                d1440: {
                    side: 8.5,
                    top: 50.1,
                    left: 910,
                },
                d1280: {
                    side: 8.5,
                    top: 50.2,
                    left: 800,
                },
                t1024: {
                    side: 8.5,
                    top: 50.2,
                    left: 650,
                },
                t768: {
                    side: 8.5,
                    top: 50.2,
                    left: 490,
                },
                m480: {
                    side: 10,
                    top: 50.2,
                    left: 320,
                },
                m360: {
                    side: 10,
                    top: 49.5,
                    left: 242,
                },
            },
        },
        {
            id: 4,
            icon: coffee,
            alt: 'coffee',
            coefficient: {
                x: 75,
                y: 37,
            },
            container: {
                d1920: {
                    side: 10,
                    top: 31.7,
                    left: 1565,
                },
                d1440: {
                    side: 10,
                    top: 36.3,
                    left: 1180,
                },
                d1280: {
                    side: 10,
                    top: 30,
                    left: 1040,
                },
                t1024: {
                    side: 10,
                    top: 36,
                    left: 845,
                },
                t768: {
                    side: 10,
                    top: 36,
                    left: 645,
                },
                m480: {
                    side: 10,
                    top: 37,
                    left: 430,
                },
                m360: {
                    side: 10,
                    top: 39.5,
                    left: 328,
                },
            },
        },
        {
            id: 5,
            icon: luminousSphere,
            alt: 'luminous sphere',
            coefficient: {
                x: 200,
                y: 100,
            },
            container: {
                d1920: {
                    side: 13,
                    top: 34.8,
                    left: 180,
                },
                d1440: {
                    side: 13,
                    top: 38.4,
                    left: 130,
                },
                d1280: {
                    side: 13,
                    top: 33.2,
                    left: 110,
                },
                t1024: {
                    side: 13,
                    top: 38,
                    left: 90,
                },
                t768: {
                    side: 13,
                    top: 39,
                    left: 55,
                },
                m480: {
                    side: 16,
                    top: 40.5,
                    left: 10,
                },
                m360: {
                    side: 16,
                    top: 40,
                    left: 0,
                },
            },
        },
        {
            id: 6,
            icon: stone,
            alt: 'stone',
            coefficient: {
                x: -200,
                y: 100,
            },
            container: {
                d1920: {
                    side: 6.5,
                    top: 23,
                    left: 787,
                },
                d1440: {
                    side: 6.5,
                    top: 29.2,
                    left: 590,
                },
                d1280: {
                    side: 6.5,
                    top: 20.2,
                    left: 525,
                },
                t1024: {
                    side: 6.5,
                    top: 27,
                    left: 420,
                },
                t768: {
                    side: 6.5,
                    top: 27.5,
                    left: 315,
                },
                m480: {
                    side: 8,
                    top: 29,
                    left: 190,
                },
                m360: {
                    side: 8,
                    top: 31,
                    left: 140,
                },
            },
        },
        {
            id: 7,
            icon: headphones,
            alt: 'headphones',
            coefficient: {
                x: 200,
                y: -100,
            },
            container: {
                d1920: {
                    side: 13.5,
                    top: 16.4,
                    left: 1285,
                },
                d1440: {
                    side: 13.5,
                    top: 25.1,
                    left: 970,
                },
                d1280: {
                    side: 14,
                    top: 13.8,
                    left: 860,
                },
                t1024: {
                    side: 14,
                    top: 23,
                    left: 700,
                },
                t768: {
                    side: 14,
                    top: 24.5,
                    left: 530,
                },
                m480: {
                    side: 14,
                    top: 27,
                    left: 350,
                },
                m360: {
                    side: 14,
                    top: 30,
                    left: 270,
                },
            },
        },
        {
            id: 8,
            icon: butterfly,
            alt: 'butterfly',
            coefficient: {
                x: -200,
                y: -100,
            },
            container: {
                d1920: {
                    side: 14,
                    top: 50.1,
                    left: 910,
                },
                d1440: {
                    side: 14,
                    top: 50.1,
                    left: 665,
                },
                d1280: {
                    side: 14,
                    top: 50.2,
                    left: 590,
                },
                t1024: {
                    side: 14,
                    top: 51,
                    left: 480,
                },
                t768: {
                    side: 14,
                    top: 51,
                    left: 360,
                },
                m480: {
                    side: 16,
                    top: 51,
                    left: 220,
                },
                m360: {
                    side: 16,
                    top: 50.5,
                    left: 168,
                },
            },
        },
    ]

    useEffect(() => {
        if (windowSize.width && windowSize.height) {
            const value = windowSize.width > 1280 ? windowSize.height :
                windowSize.width > 480 ? 650 :
                    windowSize.width > 360 ? 360 : 320;
            setHeight(value);
        }
    }, [windowSize])

    return (
        <ParallaxBlockContainerStyled onMouseMove={(e) => e.preventDefault()} height={height}>
            {windowSize.width && windowSize.width > 1940 && <Portal/>}
            <ParallaxSquareContainerStyled/>
            {windowSize.width && windowSize.width > 1940 && <Portal right/>}
            <ContentStyled>
                {parallaxIcons.map(icon => <ParallaxImage key={icon.id} data={icon} cursorLocation={cursorLocation} height={height}/>)}
                <TextContainerStyled>
                    <span>Play game and</span>
                    <span>monetize your daily</span>
                    <span>activities</span>
                </TextContainerStyled>
            </ContentStyled>
        </ParallaxBlockContainerStyled>
    )
});
