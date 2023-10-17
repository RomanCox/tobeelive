import {useEffect, useState} from 'react';
import useWindowSize from '../../../hooks/useWindowSize/useWindowSize.ts';
import {
    TitleContainerStyled,
    TitleStyled,
    DescriptionStyled,
    ButtonContainerStyled,
} from './Title.styled';
import {ButtonJoinDeskTop} from '../../buttonJoin/ButtonJoinDesktop.component';
import {ButtonJoinMobile} from '../../buttonJoin/ButtonJoinMobile.component';

export const Title = () => {
    const [isDesktop, setIsDesktop] = useState<boolean>(true);

    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width && windowSize.width >= 1280) {
            setIsDesktop(true);
        }
        if (windowSize.width && windowSize.width < 1280) {
            setIsDesktop(false);
        }
    }, [windowSize.width])

    return (
        <TitleContainerStyled>
            <TitleStyled>tobee.live</TitleStyled>
            <DescriptionStyled>App that connects lifestyle activities with online gaming</DescriptionStyled>
            <ButtonContainerStyled>
                {isDesktop ? <ButtonJoinDeskTop/> : <ButtonJoinMobile/>}
            </ButtonContainerStyled>
        </TitleContainerStyled>
    );
}