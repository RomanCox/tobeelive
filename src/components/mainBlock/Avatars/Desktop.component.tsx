import {lazy, Suspense} from 'react';
import {AvatarStyled} from './Avatars.styled';
import leftAvatarImage from '../../../assets/images/mainBlock/withDog.webp';
import centralAvatarImage from '../../../assets/images/mainBlock/withNotebook.webp';
import rightAvatarImage from '../../../assets/images/mainBlock/withBasketball.webp';
import { Image } from './Image.component';
import {AvatarType} from './Avatars.types';

export const DesktopAvatars = () => {
    let animations: Array<AvatarType> = [
        {
            position: 'left',
            image: leftAvatarImage,
        },
        {
            position: 'central',
            image: centralAvatarImage,
        },
        {
            position: 'right',
            image: rightAvatarImage,
        },
    ];

    const Animation = lazy(() => import('./Animation'));

    return (
        <>
            {animations.map(avatar => {
                return (
                    <AvatarStyled key={avatar.position} position={avatar.position}>
                        <Suspense fallback={<Image position={avatar.position} src={avatar.image} />}>
                            <Animation position={avatar.position} />
                        </Suspense>
                    </AvatarStyled>
                )
            })}
        </>
    )
}
