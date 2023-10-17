import {memo, Dispatch, SetStateAction, useEffect, useRef} from 'react';
import {FakeStickyWrapperStyled,} from './CheckInsBlock.styled';

export type FakeStickyBlockPropsType = {
    setIsFixed: Dispatch<SetStateAction<boolean>>,
    additionalHeight: number,
    step: number,
    scrollIsDown: boolean,
    scrollStep: number,
}


export const FakeBlock = memo((
    {additionalHeight, step, scrollIsDown, setIsFixed}: FakeStickyBlockPropsType
) => {
    const stickyBlock = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (step === 8) {
            stickyBlock.current?.scrollIntoView({behavior: "auto", block: "start", inline: "start"});
        }
    }, [step])

    useEffect(() => {
        if (!scrollIsDown) {
            stickyBlock.current?.scrollIntoView({behavior: "auto", block: "start", inline: "start"});
            setIsFixed(false);
        }
    }, [scrollIsDown])

    return (
        <FakeStickyWrapperStyled ref={stickyBlock} additionalHeight={additionalHeight}/>
    )
})
