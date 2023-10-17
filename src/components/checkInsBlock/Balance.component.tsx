import {useEffect, useState} from 'react';
import {
    BalanceBlockStyled,
    BalanceTitleStyled,
    ValueStyled,
} from './CheckInsBlock.styled';

type BalancesComponentPropsType = {
    title: string,
    value: number,
}

export const BalanceComponent = ({title, value}: BalancesComponentPropsType) => {

    const [tens, setTens] = useState<number>(0);
    const [units, setUnits] = useState<number>(0);
    const [tenths, setTenths] = useState<number>(0);



    useEffect(() => {
        const valueTens = value / 100 === 1 ? 0 : Math.trunc(value / 10);
        const valueUnits =  value / 100 === 1 ? 0 : Math.trunc(value - valueTens * 10);
        const valueTenths =  value / 100 === 1 ? 0 : Math.trunc((value - valueTens * 10 - valueUnits) * 10);

        if (tens < valueTens) {
            setTimeout(() => {
                setTens(tens + 1)
            }, 50)
        }

        if (tens > valueTens) {
            setTimeout(() => {
                setTens(tens - 1)
            }, 50)
        }

        if (units < valueUnits) {
            setTimeout(() => {
                setUnits(units + 1)
            }, 50)
        }

        if (units > valueUnits) {
            setTimeout(() => {
                setUnits(units - 1)
            }, 50)
        }

        if (tenths < valueTenths) {
            setTimeout(() => {
                setTenths(tenths + 1)
            }, 50)
        }

        if (tenths > valueTenths) {
            setTimeout(() => {
                setTenths(tenths - 1)
            }, 50)
        }
    }, [tens, units, tenths, value])

    return (
        <BalanceBlockStyled>
            <BalanceTitleStyled>{title}</BalanceTitleStyled>
            <ValueStyled>{tens > 0 ? tens : null}{units}{tenths > 0 ? `.${tenths}` : null}%</ValueStyled>
        </BalanceBlockStyled>

    )
}
