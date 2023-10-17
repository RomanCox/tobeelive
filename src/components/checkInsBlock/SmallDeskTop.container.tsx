import {memo} from 'react';
import {ContainerStyled, SmallDeskTopContainerStyled} from './CheckInsBlock.styled';
import {AvatarComponent} from './Avatar.component';
import {DescriptionComponent} from './Description.component';
import {LifeBalanceComponent} from './LifeBalance.component';
import {StepPropsType} from './CheckInsBlock';

export const SmallDeskTopContainer = memo(({step}: StepPropsType) =>
    <ContainerStyled>
        <SmallDeskTopContainerStyled>
            <DescriptionComponent step={step} />
            <LifeBalanceComponent step={step} />
        </SmallDeskTopContainerStyled>
        <AvatarComponent step={step} />
    </ContainerStyled>
)
