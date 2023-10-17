import {memo, useCallback, useEffect, useRef, useState} from 'react';
import {
    AvatarComponentContainerStyled, AppNameStyled, LocationNameStyled, CheckInContainerStyled,
    CheckBoxContainerStyled, CheckBoxStyled, CheckStyled, CancelStyled, AvatarContainerStyled,
    AvatarStyled, CheckinsCounter, NumberStyled, NumberContainerStyled, LocationsContainerStyled,
    LocationNameContainerStyled, LocationsWrapperStyled,
} from './CheckInsBlock.styled';
import ellipse from '../../assets/images/checkInsBlock/ellipse.webp';
import body from '../../assets/images/checkInsBlock/body.webp';
import startHair from '../../assets/images/checkInsBlock/startHair.webp';
import startWear from '../../assets/images/checkInsBlock/startWear.webp';
import startPants from '../../assets/images/checkInsBlock/startPants.webp';
import startShoes from '../../assets/images/checkInsBlock/startShoes.webp';
import finalHair from '../../assets/images/checkInsBlock/finalHair.webp';
import finalWear from '../../assets/images/checkInsBlock/finalWear.webp';
import finalPants from '../../assets/images/checkInsBlock/finalPants.webp';
import finalShoes from '../../assets/images/checkInsBlock/finalShoes.webp';
import {StepPropsType} from './CheckInsBlock';

export type AvatarType = {
    id: number,
    img: string,
    alt: string,
    zIndex: number,
};

type LocationType = 'Kentucky Fried Chicken' | 'Starbucks Downtown' | 'A-Gym' | 'Metallica World Tour';

export const AvatarComponent = memo(({step}: StepPropsType) => {
    const [avatarContainerWidth, setAvatarContainerWidth] = useState<number>(0);
    const [checkinsCount, setCheckinsCount] = useState<number>(0);
    const [locationIndex, setLocationIndex] = useState<number>(0);
    const [isTranslate, setIsTranslate] = useState<boolean>(true);
    const [isShowCheckIn, setIsShowCheckIn] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const [changeHair, setChangeHair] = useState<boolean>(false);
    const [changeWear, setChangeWear] = useState<boolean>(false);
    const [changePants, setChangePants] = useState<boolean>(false);
    const [changeShoes, setChangeShoes] = useState<boolean>(false);

    const avatarContainer = useRef<HTMLDivElement>(null);

    const locations: Array<LocationType> = ['Kentucky Fried Chicken', 'Starbucks Downtown', 'A-Gym', 'Metallica World Tour'];
    const avatar: Array<AvatarType> = [
        {
            id: 0,
            img: ellipse,
            alt: 'aura',
            zIndex: 1,
        },
        {
            id: 1,
            img: body,
            alt: 'avatar`s body',
            zIndex: 2,
        },
        {
            id: 2,
            img: startHair,
            alt: 'avatar`s hair',
            zIndex: 5,
        },
        {
            id: 3,
            img: finalHair,
            alt: 'avatar`s hair',
            zIndex: 5,
        },
        {
            id: 4,
            img: startWear,
            alt: 'avatar`s outerwear',
            zIndex: 4,
        },
        {
            id: 5,
            img: finalWear,
            alt: 'avatar`s outerwear',
            zIndex: 4,
        },
        {
            id: 6,
            img: startPants,
            alt: 'avatar`s pants',
            zIndex: 3,
        },
        {
            id: 7,
            img: finalPants,
            alt: 'avatar`s pants',
            zIndex: 3,
        },
        {
            id: 8,
            img: startShoes,
            alt: 'avatar`s shoes',
            zIndex: 2,
        },
        {
            id: 9,
            img: finalShoes,
            alt: 'avatar`s shoes',
            zIndex: 2,
        },
    ];
    const checkIns: Array<number> = [0, 1, 2, 3, 4];

    const setIsAnimation = (id: number) => {
        if (id === 3) {
            return !changeHair
        }
        if (id === 4) {
            return changeHair
        }
        if (id === 5) {
            return !changeWear
        }
        if (id === 6) {
            return changeWear
        }
        if (id === 7) {
            return !changePants
        }
        if (id === 8) {
            return changePants
        }
        if (id === 9) {
            return !changeShoes
        }
        if (id === 10) {
            return changeShoes
        }
        return true
    }

    const locationShow = useCallback(() => {
        setLocationIndex(locationIndex + 1);

        setTimeout(() => {
            setIsShowCheckIn(true)
        }, 500)
        setTimeout(() => {
            setIsDone(true)
        }, 1000)
        setTimeout(() => {
            setCheckinsCount(checkinsCount + 1)
            if (step >= 7) {
                setChangeShoes(true);
            } else if (step >= 6) {
                setChangePants(true);
            } else if (step >= 4) {
                setChangeWear(true);
            } else if (step >= 2) {
                setChangeHair(true);
            }
        }, 1250)
        setTimeout(() => {
            setIsShowCheckIn(false);
        }, 2000)
        setTimeout(() => {
            setLocationIndex(locationIndex + 2);
            setTimeout(() => {
                setIsShowCheckIn(false);
                setIsDone(false);
            }, 500)
            if (locationIndex === 8) {
                setTimeout(() => {
                    setIsTranslate(false);
                    setLocationIndex(0);
                    setTimeout(() => {
                        setIsTranslate(true);
                    }, 50)
                }, 500)
            }
        }, 2250)
    }, [locationIndex, checkinsCount, step])

    useEffect(() => {
        if (avatarContainer.current) {
            setAvatarContainerWidth(avatarContainer.current.offsetWidth)
        }
    }, [avatarContainer.current])

    useEffect(() => {
        if (step === 2) {
            locationShow()
        }
        if (step === 4) {
            locationShow()
        }
        if (step === 6) {
            locationShow()
        }
        if (step === 7 ) {
            locationShow()
        }
    }, [step])

    return (
        <AvatarComponentContainerStyled ref={avatarContainer}>
            <AppNameStyled>tobee.live</AppNameStyled>
            <LocationsContainerStyled>
                <LocationsWrapperStyled size={avatarContainerWidth} index={locationIndex} isTranslate={isTranslate}>
                    {locations.map(location =>
                        <LocationNameContainerStyled key={location} size={avatarContainerWidth}>
                            <LocationNameStyled>
                                {location}
                                <CheckInContainerStyled isShow={isShowCheckIn}>
                                    <CheckBoxContainerStyled>
                                        <CheckBoxStyled isDone={isDone}>
                                            <CheckStyled isDone={isDone}/>
                                        </CheckBoxStyled>
                                        Check in
                                    </CheckBoxContainerStyled>
                                    <CancelStyled/>
                                </CheckInContainerStyled>
                            </LocationNameStyled>
                        </LocationNameContainerStyled>)}
                </LocationsWrapperStyled>
            </LocationsContainerStyled>
            <AvatarContainerStyled>
                {avatar.map(item => <AvatarStyled key={item.id} src={item.img} alt={item.alt} item={item} isAnimation={setIsAnimation(item.id)}/>)}
            </AvatarContainerStyled>
            <CheckinsCounter>
                <NumberContainerStyled>
                    {checkIns.map(checkIn =>
                        <NumberStyled key={checkIn} index={checkinsCount}>
                            {checkIn}
                        </NumberStyled>)}
                </NumberContainerStyled>
                Check-ins
            </CheckinsCounter>
        </AvatarComponentContainerStyled>
    )
})
