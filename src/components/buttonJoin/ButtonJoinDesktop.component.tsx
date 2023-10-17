import {useState} from 'react';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize';
import {
    ButtonContainerStyled,
    ImageStyled,
    IconContainerStyled,
} from './ButtonJoin.styled';
import joinDesktop from '../../assets/images/buttonJoin/joinDeskTop.webp';
import joinColoredDeskTop from '../../assets/images/buttonJoin/joinColoredDeskTop.webp';
import {TgPlaneIcon} from '../../assets/icons/tgPlaneDeskTop.Icon';

export const ButtonJoinDeskTop = () => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const [isFlight, setIsFlight] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(true);

    const windowSize = useWindowSize();
    const onMouseEnterHandler = () => {
        setIsHover(true);
    }

    const onMouseLeaveHandler = () => {
        setIsHover(false);
    }

    const onClickHandler = () => {
        setIsFlight(true);
        setTimeout(() => {
            setIsShow(false);
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
        <ButtonContainerStyled onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}
                               onClick={onClickHandler}>
            <ImageStyled src={isHover ? joinColoredDeskTop : joinDesktop} alt={'Join Community'}/>
            <IconContainerStyled isShow={isShow} isFlight={isFlight}
                                 distance={windowSize.width ? (windowSize.width / 2 + 167) : 0}>
                <TgPlaneIcon fill={isHover ? 'white' : '#782FED'}/>
            </IconContainerStyled>
        </ButtonContainerStyled>
    );
}
