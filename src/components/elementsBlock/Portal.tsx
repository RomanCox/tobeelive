import {PortalStyledPropsType, PortalContainerStyled} from './ElementsBlock.styled';

export const Portal = ({right}: PortalStyledPropsType) => <PortalContainerStyled right={right}>
    <svg width="36" height="786" viewBox="0 0 36 786" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_5656_56877)">
            <path d="M18 18L18 768" stroke="white" strokeWidth="6" strokeLinecap="round"/>
        </g>
        <g filter="url(#filter1_f_5656_56877)">
            <path d="M18 18L18 768" stroke="url(#paint0_linear_5656_56877)" strokeWidth="6" strokeLinecap="round"/>
        </g>
        <g filter="url(#filter2_f_5656_56877)">
            <path d="M18 18L18 768" stroke="url(#paint1_linear_5656_56877)" strokeWidth="6" strokeLinecap="round"/>
        </g>
        <path d="M18 768L18 18" stroke="url(#paint2_linear_5656_56877)" strokeWidth="6" strokeLinecap="round"/>
        <defs>
            <filter id="filter0_f_5656_56877" x="0" y="0" width="36" height="786" filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_5656_56877"/>
            </filter>
            <filter id="filter1_f_5656_56877" x="11" y="11" width="14" height="764" filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_5656_56877"/>
            </filter>
            <filter id="filter2_f_5656_56877" x="5" y="5" width="26" height="776" filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_5656_56877"/>
            </filter>
            <linearGradient id="paint0_linear_5656_56877" x1="18.5" y1="18" x2="18.5" y2="768"
                            gradientUnits="userSpaceOnUse">
                <stop stopColor="#EC5AF7"/>
                <stop offset="0.4375" stopColor="#782FED"/>
                <stop offset="1" stopColor="#F2B60A"/>
            </linearGradient>
            <linearGradient id="paint1_linear_5656_56877" x1="18.5" y1="18" x2="18.5" y2="768"
                            gradientUnits="userSpaceOnUse">
                <stop stopColor="#EC5AF7"/>
                <stop offset="0.4375" stopColor="#782FED"/>
                <stop offset="1" stopColor="#F2B60A"/>
            </linearGradient>
            <linearGradient id="paint2_linear_5656_56877" x1="17.5" y1="768" x2="17.5" y2="18"
                            gradientUnits="userSpaceOnUse">
                <stop stopColor="#EC5AF7"/>
                <stop offset="0.4375" stopColor="#782FED"/>
                <stop offset="1" stopColor="#F2B60A"/>
            </linearGradient>
        </defs>
    </svg>
</PortalContainerStyled>
