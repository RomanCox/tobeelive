import {useState} from 'react';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize';
import {
    ButtonContainerStyled,
    ImageStyled,
    IconContainerStyled,
} from './ButtonJoin.styled';
import join from '../../assets/images/buttonJoin/join.webp';
import joinColored from '../../assets/images/buttonJoin/joinColored.webp';
import {TgPlaneIcon} from '../../assets/icons/tgPlane.Icon';

export const ButtonJoinMobile = () => {
    const [isClick, setIsClick] = useState<boolean>(false);
    const [isFlight, setIsFlight] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(true);

    const windowSize = useWindowSize();
    const onClockHandler = () => {
        setIsClick(true);
        setIsFlight(true);
        setTimeout(() => {
            setIsShow(false);
            setIsClick(false);
        }, 500)
        setTimeout(() => {
            setIsFlight(false);
            setIsShow(true);
        }, 750)
        setTimeout(() => {
            window.open(
                'https://t.me/tobeeliveapp', '_blank'
            );
        }, 1000)
    }

    return (
        <ButtonContainerStyled onClick={onClockHandler}>
            <ImageStyled src={isClick ? joinColored : join} alt={'Join Community'}/>
            <IconContainerStyled isShow={isShow} isFlight={isFlight}
                                 distance={windowSize.width ? (windowSize.width / 2 + 167) : 0}>
                <TgPlaneIcon fill={isClick ? 'white' : '#782FED'}/>
            </IconContainerStyled>
        </ButtonContainerStyled>
    );
}
