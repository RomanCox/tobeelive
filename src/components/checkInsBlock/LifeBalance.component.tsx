import {memo, useEffect, useState} from 'react';
import {
    LifeBalanceContainerStyled,
    TitleStyled,
    EnergyStyled,
    EnergyStripeStyled,
    FilledEnergyStripeStyled,
    BalanceBlocksStyled,
} from './CheckInsBlock.styled';
import {EnergyIcon} from '../../assets/icons/energy.Icon';
import {StepPropsType} from './CheckInsBlock';
import {BalanceComponent} from './Balance.component';

type BalanceIdType = 'Student' | 'PartyMaker' | 'Sportsman' | 'Homebody';

export const LifeBalanceComponent = memo(({step}: StepPropsType) => {
    const [energyCount, setEnergyCount] = useState<number>(2);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [studentValue, setStudentValue] = useState<number>(33.3);
    const [partyMakerValue, setPartyMakerValue] = useState<number>(33.3);
    const [sportsmanValue, setSportsmanValue] = useState<number>(33.3);
    const [homebodyValue, setHomebodyValue] = useState<number>(33.4);

    const titles: Array<BalanceIdType> = ['Student', 'PartyMaker', 'Sportsman', 'Homebody'];

    useEffect(() => {
        if (energyCount === 1) {
            setStudentValue(25)
            setPartyMakerValue(25)
            setSportsmanValue(25)
            setHomebodyValue(25)
        }
        if (energyCount === 0) {
            setStudentValue(20)
            setPartyMakerValue(40)
            setSportsmanValue(20)
            setHomebodyValue(20)
        }
    }, [energyCount])

    useEffect(() => {

        if (step >= 7) {
            setTimeout(() => {
                setEnergyCount(0);
            }, 1250)
        } else if (step >= 6) {
            setTimeout(() => {
                setEnergyCount(1);
            }, 1250)
        } else if (step >= 5) {
            setIsShow(true);
        }
    }, [step])

    return (
        <LifeBalanceContainerStyled isShow={isShow}>
            <TitleStyled>Organize your life balance</TitleStyled>
            <EnergyStyled>
                <EnergyIcon/>
                <EnergyStripeStyled>
                    <FilledEnergyStripeStyled energyCount={energyCount}/>
                </EnergyStripeStyled>
            </EnergyStyled>
            <BalanceBlocksStyled>
                {isShow && titles.map(title => {
                    let value =
                        title === 'Student' ? studentValue :
                            title === 'PartyMaker' ? partyMakerValue :
                                title === 'Sportsman' ? sportsmanValue :
                                    homebodyValue;
                    return (
                        <BalanceComponent key={title} title={title} value={value}/>
                    )
                })}
            </BalanceBlocksStyled>
        </LifeBalanceContainerStyled>
    )
})
