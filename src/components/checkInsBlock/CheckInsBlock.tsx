import {memo, useState, useEffect, useRef, Dispatch, SetStateAction} from 'react';
import useOnScreen, {range} from '../../hooks/useOnScreen/useOnScreen.ts';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize.ts';
import {SmallDeskTopContainer} from './SmallDeskTop.container';
import {BigDeskTopContainer} from './BigDeskTop.container';
import {TabletAndMobileContainer} from './TabletAndMobile.container';
import {StickyWrapperStyled} from './CheckInsBlock.styled';

export type StepPropsType = {
    step: number,
}

export type StickyBlockPropsType = {
    isFixed: boolean,
    setIsFixed: Dispatch<SetStateAction<boolean>>,
    additionalHeight: number,
    setAdditionalHeight: Dispatch<SetStateAction<number>>,
    scrollStep: number,
    scrollIsDown: boolean,
    step: number,
    setStep: Dispatch<SetStateAction<number>>,
};

export const CheckInsBlock = memo(({
                                           isFixed,
                                           setIsFixed,
                                           additionalHeight,
                                           setAdditionalHeight,
                                           scrollStep,
                                           scrollIsDown,
                                           step,
                                           setStep,
                                       }: StickyBlockPropsType) => {
    const [isDisable, setIsDisable] = useState<boolean>(false);

    const windowSize = useWindowSize();
    const stickyBlock = useRef<HTMLDivElement>(null);
    const {ratio} = useOnScreen(
        stickyBlock, {threshold: range(0, 1, 0.01, 2)}
    );

    useEffect(() => {
        if (ratio >= 90 && scrollIsDown && step !== 8) {
            setIsFixed(true);
        }
    }, [ratio, scrollIsDown, step])

    useEffect(() => {
        if (isFixed && !isDisable && step <= 7) {
            let duration = step === 0 || step === 2 || step === 4 ? 500 : 2750;
            setIsDisable(true);

            setStep((prev) => prev + 1);

            setTimeout(() => {
                setIsDisable(false);
            }, duration)
        }
    }, [isFixed, scrollStep, step])

    useEffect(() => {
        if (step === 8) {
            setIsFixed(false);
            setAdditionalHeight(0);
        }
    }, [step])

    useEffect(() => {
        if (!scrollIsDown && additionalHeight === 500 && isFixed) {
            setIsFixed(false);
            stickyBlock.current?.scrollIntoView(true);
        }
    }, [additionalHeight, scrollIsDown, isFixed])

    return (
        <StickyWrapperStyled ref={stickyBlock} isFixed={isFixed}>
            {windowSize && windowSize.width > 1024
                ? windowSize && windowSize.width >= 1440 ? <BigDeskTopContainer step={step} />
                    : <SmallDeskTopContainer step={step} />
                : <TabletAndMobileContainer step={step} />
            }
        </StickyWrapperStyled>
    )
})
