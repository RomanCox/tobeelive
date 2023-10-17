import {useCallback, useEffect, useRef} from 'react';
import {
    ParallaxImageContainerStyled,
    ParallaxImageStyled,
} from './FollowBlock.styled';
import {CursorLocationType} from '../../App';

export type ContainerType = {
    side: number,
    top: number,
    left: number,
}

type CoefficientType = {
    x: number,
    y: number,
}

type ParallaxImagePropsType = {
    cursorLocation: CursorLocationType,
    data: {
        id: number,
        icon: string,
        alt: string,
        coefficient: CoefficientType,
        container: {
            d1920: ContainerType,
            d1440: ContainerType,
            d1280: ContainerType,
            t1024: ContainerType,
            t768: ContainerType,
            m480: ContainerType,
            m360: ContainerType,
        }
    },
}

export const ParallaxImage = ({cursorLocation, data}: ParallaxImagePropsType) => {
    const ref = useRef<HTMLImageElement>(null);

    const parallax = useCallback((cursorLocation: CursorLocationType) => {
        if (ref.current) {
            ref.current.style.left = -1 * (cursorLocation.x / data.coefficient.x) + 'px';
            ref.current.style.top = -1 * (cursorLocation.y / data.coefficient.y) + 'px';
        }
    }, [data])

    useEffect(() => {
        ref && parallax(cursorLocation)
    }, [cursorLocation, parallax])

    return (
        <ParallaxImageContainerStyled container={data.container} imageId={data.id}>
            <ParallaxImageStyled src={data.icon} alt={data.alt} ref={ref} imageId={data.id}/>
        </ParallaxImageContainerStyled>
    )
}
