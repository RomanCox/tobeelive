import {memo, useEffect, useState} from 'react';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize';

import {
    DefaultAvatarsBlockStyled, SlidersContainerStyled,
    TitleStyled,
} from './DefaultAvatarsBlock.styled';

import {Portal} from './Portal';

import {Slider} from './Slider';
import {ButtonJoinDeskTop} from '../buttonJoin/ButtonJoinDesktop.component';
import {ButtonJoinMobile} from '../buttonJoin/ButtonJoinMobile.component';
import image000 from '../../assets/images/defaultAvatarsBlock/0000.webp';
import image001 from '../../assets/images/defaultAvatarsBlock/0001.webp';
import image002 from '../../assets/images/defaultAvatarsBlock/0002.webp';
import image003 from '../../assets/images/defaultAvatarsBlock/0003.webp';
import image004 from '../../assets/images/defaultAvatarsBlock/0004.webp';
import image005 from '../../assets/images/defaultAvatarsBlock/0005.webp';
import image006 from '../../assets/images/defaultAvatarsBlock/0006.webp';
import image007 from '../../assets/images/defaultAvatarsBlock/0007.webp';
import image008 from '../../assets/images/defaultAvatarsBlock/0008.webp';
import image009 from '../../assets/images/defaultAvatarsBlock/0009.webp';
import image010 from '../../assets/images/defaultAvatarsBlock/0010.webp';
import image011 from '../../assets/images/defaultAvatarsBlock/0011.webp';

export type SlideType = {
    id: number,
    nickname: string,
    image: any,
    checkins: string,
    connections: string,
    level: string,
};

export const DefaultAvatarsBlock = memo(() => {
    const [isDesktop, setIsDesktop] = useState<boolean>(true);
    const [isMove, setIsMove] = useState<boolean>(false);

    const windowSize = useWindowSize();

    const initialSlides: Array<SlideType> = [
        {
            id: 0,
            nickname: '@Zin_15',
            image: image000,
            checkins: '61',
            connections: '1238',
            level: '57',
        },
        {
            id: 1,
            nickname: '@IvanCi',
            image: image001,
            checkins: '77',
            connections: '674',
            level: '34',
        },
        {
            id: 2,
            nickname: '@Din_11a',
            image: image002,
            checkins: '23',
            connections: '1534',
            level: '35',
        },
        {
            id: 3,
            nickname: '@IlyaP',
            image: image003,
            checkins: '89',
            connections: '1538',
            level: '37',
        },
        {
            id: 4,
            nickname: '@Efida',
            image: image004,
            checkins: '76',
            connections: '1659',
            level: '73',
        },
        {
            id: 5,
            nickname: '@Alibek',
            image: image005,
            checkins: '38',
            connections: '1230',
            level: '53',
        },
        {
            id: 6,
            nickname: '@Leonid',
            image: image006,
            checkins: '147',
            connections: '2247',
            level: '78',
        },
        {
            id: 7,
            nickname: '@Kasia',
            image: image007,
            checkins: '88',
            connections: '1637',
            level: '69',
        },
        {
            id: 8,
            nickname: '@Mark1403',
            image: image008,
            checkins: '102',
            connections: '800',
            level: '45',
        },
        {
            id: 9,
            nickname: '@Den15_06',
            image: image009,
            checkins: '18',
            connections: '1378',
            level: '35',
        },
        {
            id: 10,
            nickname: '@Leo815',
            image: image010,
            checkins: '99',
            connections: '1873',
            level: '60',
        },
        {
            id: 11,
            nickname: '@Dusha_2.0',
            image: image011,
            checkins: '64',
            connections: '1720',
            level: '72',
        },
    ];

    useEffect(() => {
        if (windowSize.width && windowSize.width >= 1280) {
            setIsDesktop(true);
        }
        if (windowSize.width && windowSize.width < 1280) {
            setIsDesktop(false);
        }
    }, [windowSize.width])

    return (
        <DefaultAvatarsBlockStyled>
            {windowSize.width && windowSize.width > 1940 && <Portal/>}
            {windowSize.width && windowSize.width > 1940 && <Portal right/>}
            <TitleStyled>Avatars of first followers</TitleStyled>
            <SlidersContainerStyled>
                <Slider data={initialSlides} isMove={isMove} setIsMove={setIsMove}/>
                <Slider data={initialSlides} isMove={isMove} setIsMove={setIsMove} reverse/>
            </SlidersContainerStyled>
            {isDesktop ? <ButtonJoinDeskTop /> : <ButtonJoinMobile/>}
        </DefaultAvatarsBlockStyled>
    )
})