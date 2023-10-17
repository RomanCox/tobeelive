import {MouseEvent, useEffect, useState} from 'react';
import useWindowSize from './hooks/useWindowSize/useWindowSize.ts';
import {MainBlock} from './components/mainBlock/MainBlock';
import {AppWrapperStyled} from './App.styled';
import {Background} from './components/background/Background.tsx';
import {ParallaxBlock} from './components/parallaxBlock/ParallaxBlock';
import {SliderBlock} from './components/sliderBlock/SliderBlock';
import {ElementsBlock} from './components/elementsBlock/ElementsBlock';
import {BenefitsBlock} from './components/benefitsBlock/BenefitsBlock';
import {CheckInsBlock} from './components/checkInsBlock/CheckInsBlock.tsx';
import {FakeBlock} from './components/checkInsBlock/FakeBlock';
import {FollowBlock} from './components/followBlock/FollowBlock';
import {DefaultAvatarsBlock} from './components/defaultAvatarsBlock/DefaultAvatarsBlock';

export type CursorLocationType = {
    x: number,
    y: number,
};

export const App = () => {
    const [cursorLocation, setCursorLocation] = useState<CursorLocationType>({x: 0, y: 0});
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const [additionalHeight, setAdditionalHeight] = useState<number>(500);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);
    const [scrollStep, setScrollStep] = useState<number>(0);
    const [scrollIsDown, setScrollIsDown] = useState<boolean>(true);
    const [step, setStep] = useState<number>(0);

    const windowSize = useWindowSize();
    const onMouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
        if (windowSize.width && windowSize.width >= 1280) {
            if (windowSize.width && windowSize.height) {
                let obj = {x: e.clientX, y: e.clientY};
                obj.x = e.clientX - windowSize.width / 2;
                obj.y = e.clientY - windowSize.height / 2;
                setCursorLocation(obj)
            }
        }
    }

    useEffect(() => {
        const changeHeight = (value: number) => {
            if (value < prevScrollY) {
                setScrollIsDown(false);
            } else if (value > prevScrollY) {
                setPrevScrollY(value);
                setScrollIsDown(true);
                if (isFixed) {
                    setAdditionalHeight(value);
                    if (value >= scrollStep + 100) {
                        setScrollStep(value);
                    }
                }
            }
        }

        window.addEventListener('scroll', () => changeHeight(window.scrollY))
        window.removeEventListener('scroll', () => changeHeight(window.scrollY))
    }, [window.scrollY])

    return (
        <AppWrapperStyled onMouseMove={onMouseMoveHandler}>
            <Background/>
            <MainBlock/>
            <ParallaxBlock cursorLocation={cursorLocation}/>
            <CheckInsBlock
                isFixed={isFixed}
                setIsFixed={setIsFixed}
                additionalHeight={additionalHeight}
                setAdditionalHeight={setAdditionalHeight}
                scrollStep={scrollStep}
                scrollIsDown={scrollIsDown}
                step={step}
                setStep={setStep}
            />
            {isFixed && <FakeBlock
                setIsFixed={setIsFixed}
                additionalHeight={additionalHeight}
                step={step}
                scrollIsDown={scrollIsDown}
                scrollStep={scrollStep}
            />}
            <BenefitsBlock/>
            <SliderBlock/>
            <ElementsBlock/>
            <DefaultAvatarsBlock/>
            <FollowBlock cursorLocation={cursorLocation}/>
        </AppWrapperStyled>
    )
}
