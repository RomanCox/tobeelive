import {useCallback, useEffect, useRef} from 'react';
import {
    ImageContainerStyled,
    ImageStyled,
} from './ParallaxBlock.styled';
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

type ParallaxBlockPropsType = {
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
    height: number,
}

export const ParallaxImage = ({cursorLocation, data, height}: ParallaxBlockPropsType) => {
    const imageElement = useRef<HTMLImageElement>(null);

    const parallax = useCallback((cursorLocation: CursorLocationType) => {
        if (imageElement.current) {
            imageElement.current.style.left = -1 * (cursorLocation.x / data.coefficient.x) + 'px';
            imageElement.current.style.top = -1 * (cursorLocation.y / data.coefficient.y) + 'px';
        }
    }, [data])

    useEffect(() => {
        imageElement.current && parallax(cursorLocation)
    }, [cursorLocation, parallax])

    return (
        <ImageContainerStyled container={data.container} imageId={data.id} height={height}>
            <ImageStyled src={data.icon} alt={data.alt} ref={imageElement} imageId={data.id} />
        </ImageContainerStyled>
    )
}
