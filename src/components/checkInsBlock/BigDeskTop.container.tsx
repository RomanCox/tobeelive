import {memo} from 'react';
import {ContainerStyled} from './CheckInsBlock.styled';
import {AvatarComponent} from './Avatar.component';
import {DescriptionComponent} from './Description.component';
import {LifeBalanceComponent} from './LifeBalance.component';
import {StepPropsType} from './CheckInsBlock';

export const BigDeskTopContainer = memo(({step}: StepPropsType) =>
    <ContainerStyled>
        <DescriptionComponent step={step} />
        <AvatarComponent step={step} />
        <LifeBalanceComponent step={step} />
    </ContainerStyled>
)
