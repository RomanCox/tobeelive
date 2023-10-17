import {memo} from 'react';
import {
    MainBlockContainerStyled,
    AvatarsContainerStyled
} from './MainBlock.styled';
import {DesktopAvatars} from './Avatars/Desktop.component';
import {Title} from './Title/Title.component';

export const MainBlock = memo(() =>
    <MainBlockContainerStyled>
        <Title/>
        <AvatarsContainerStyled>
            <DesktopAvatars/>
        </AvatarsContainerStyled>
    </MainBlockContainerStyled>
)
