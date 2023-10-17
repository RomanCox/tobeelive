import {memo, useEffect, useState} from 'react';
import {
    DescriptionsContainerStyled, DescriptionBlockStyled, TextStyled, TitleStyled
} from './CheckInsBlock.styled';
import {StepPropsType} from './CheckInsBlock';

type DescriptionType = {
    id: number,
    title: string,
    description: string,
    bold: string
};

export const DescriptionComponent = memo(({step}: StepPropsType) => {
    const [upperBlockShow, setUpperBlockShow] = useState<boolean>(false);
    const [lowerBlockShow, setLowerBlockShow] = useState<boolean>(false);

    const descriptions: Array<DescriptionType> = [
        {
            id: 1,
            title: 'Meet your avatar',
            description: 'As soon as you sign up, you get a blank avatar. It is the same for everyone.',
            bold: 'blank avatar'
        },
        {
            id: 2,
            title: 'Make check-ins',
            description: 'Its appearance is going to change depending on the places you visit and actions made inside the app.',
            bold: 'places you visit'
        },
    ]

    useEffect(() => {
        if (step >= 3) {
            setLowerBlockShow(true);
        } else if (step >= 1) {
            setUpperBlockShow(true);
        }
    }, [step])

    return (
        <DescriptionsContainerStyled>
            {descriptions.map(description => {
                const index = description.description.indexOf(description.bold);
                const length = description.bold.length;
                const firstString = description.description.split('').slice(0, index).join('');
                const secondString = description.description.split('').slice(index + length, description.description.length).join('');

                return (
                    <DescriptionBlockStyled key={description.id}
                                            isShow={description.id === 1 ? upperBlockShow : lowerBlockShow}>
                        <TitleStyled>{description.title}</TitleStyled>
                        <TextStyled index={description.id}>
                            <span>{firstString}<b>{description.bold}</b>{secondString}</span>
                        </TextStyled>
                    </DescriptionBlockStyled>
                )
            })}
        </DescriptionsContainerStyled>
    )
})
