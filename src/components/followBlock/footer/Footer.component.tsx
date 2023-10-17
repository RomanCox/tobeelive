import {memo} from 'react';
import {
    FooterContainerStyled,
    ButtonsContainerStyled,
    ButtonStyled
} from './Footer.styled';
import {LinkedinIcon} from '../../../assets/icons/linkedin.Icon';
import {MailIcon} from '../../../assets/icons/mail.Icon';
import {TgIcon} from '../../../assets/icons/tg.Icon';
import {TwitterIcon} from '../../../assets/icons/twitter.Icon';
import {InstagramIcon} from '../../../assets/icons/instagram.Icon';

export const Footer = memo(() => {
    const buttons = [
        {
            id: 'in',
            href: 'https://www.linkedin.com/company/tobeelive/mycompany/?viewAsMember=true',
        },
        {
            id: 'ig',
            href: 'https://www.instagram.com/tobee.live/',
        },
        {
            id: 'tg',
            href: 'https://t.me/tobeeliveapp',
        },
        {
            id: 'tw',
            href: 'https://twitter.com/tobee_live',
        },
        {
            id: 'mail',
            href: 'mailto:my.tobeelive@gmail.com',
        },
    ];

    return (
        <FooterContainerStyled>
            <ButtonsContainerStyled>
                {buttons.map(button =>
                    <ButtonStyled key={button.id} tg={button.id === 'tg'} href={button.href} target={'_blanc'}
                                  rel={'nofollow noreferrer'}>
                        {button.id === 'in' ? <LinkedinIcon/>
                            : button.id === 'ig' ? <InstagramIcon/>
                                : button.id === 'tg' ? <TgIcon/>
                                    : button.id === 'tw' ? <TwitterIcon/>
                                        : <MailIcon/>
                        }
                    </ButtonStyled>
                )}
            </ButtonsContainerStyled>
        </FooterContainerStyled>
    );
})
