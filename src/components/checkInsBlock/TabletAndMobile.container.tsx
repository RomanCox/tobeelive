import {memo, useEffect, useMemo, useState} from 'react';
import {
    ContainerStyled,
    ContentContainerStyled,
    DescriptionBlockStyled,
    TextStyled,
    TitleStyled
} from './CheckInsBlock.styled';
import {AvatarComponent} from './Avatar.component';
import {LifeBalanceComponent} from './LifeBalance.component';
import {StepPropsType} from './CheckInsBlock';

type DescriptionType = {
    id: number,
    title: string,
    description: string,
    bold: string
};

export const TabletAndMobileContainer = memo(({step}: StepPropsType) => {
    const [textBlockShow, setTextBlockShow] = useState<boolean>(false);
    const [textShow, setTextShow] = useState<boolean>(false);
    const [balanceBlockShow, setBalanceBlockShow] = useState<boolean>(false);

    const [description, setDescription] = useState<DescriptionType>({
        id: 0,
        title: '',
        description: '',
        bold: ''
    })

    const {firstString, secondString} = useMemo(() => {
        const index = description.description.indexOf(description.bold);
        const length = description.bold.length;
        const firstString = description.description.split('').slice(0, index).join('');
        const secondString = description.description.split('').slice(index + length, description.description.length).join('');

        return {firstString, secondString}
    }, [description])

    useEffect(() => {
        if (step === 1) {
            setTextBlockShow(true);
            setTextShow(true);
            setDescription({
                id: 1,
                title: 'Meet your avatar',
                description: 'As soon as you sign up, you get a blank avatar. It is the same for everyone.',
                bold: 'blank avatar'
            })
        }
        if (step === 3) {
            setTextShow(false);
            setTimeout(() => {
                setTextShow(true);
                setDescription({
                    id: 2,
                    title: 'Make check-ins',
                    description: 'Its appearance is going to change depending on the places you visit and actions made inside the app.',
                    bold: 'places you visit'
                })
            }, 500)
        }
        if (step === 5) {
            setTextShow(false);
            setTimeout(() => {
                setTextBlockShow(false);
                setBalanceBlockShow(true);
            }, 500)
        }
    }, [step])

    return (
        <ContainerStyled>
            <ContentContainerStyled>
                {textBlockShow && <DescriptionBlockStyled isShow={textShow}>
                    <TitleStyled>{description.title}</TitleStyled>
                    <TextStyled index={description.id}>
                        <span>{firstString}<b>{description.bold}</b>{secondString}</span>
                    </TextStyled>
                </DescriptionBlockStyled>}
                {balanceBlockShow && <LifeBalanceComponent step={step}/>}
            </ContentContainerStyled>
            <AvatarComponent step={step}/>
        </ContainerStyled>
    )
})
