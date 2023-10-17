import {memo} from 'react';
import {BackgroundContainerStyled, CircleStyled} from './Background.styled.ts';


export type CircleType = {
    id: number,
    title: string,
    width: number,
    height: number,
    top: number,
    left: number,
    color: string,
};

export const Background = memo(() => {
    const circles: Array<CircleType> = [
        {
            id: 0,
            title: 'topLeftBlueCircle',
            width: 512,
            height: 512,
            top: -7,
            left: 0.5,
            color: 'blue',
        },
        {
            id: 1,
            title: 'topRightBlueCircle',
            width: 507,
            height: 507,
            top: -15,
            left: 75,
            color: 'blue',
        },
        {
            id: 2,
            title: 'bottomCentralBlueCircle',
            width: 594,
            height: 594,
            top: 50,
            left: 50,
            color: 'blue',
        },
        {
            id: 3,
            title: 'centralTopYellowCircle',
            width: 388,
            height: 388,
            top: 16,
            left: 34,
            color: 'yellow',
        },
        {
            id: 4,
            title: 'leftBottomYellowCircle',
            width: 420,
            height: 420,
            top: 65,
            left: -3.5,
            color: 'yellow',
        },
        {
            id: 5,
            title: 'rightCentralYellowCircle',
            width: 380,
            height: 380,
            top: 50,
            left: 75,
            color: 'yellow',
        },

    ];

    return (
        <BackgroundContainerStyled>
            {circles.map(circle => <CircleStyled key={circle.id} circle={circle}/>)}
        </BackgroundContainerStyled>
    )
})
