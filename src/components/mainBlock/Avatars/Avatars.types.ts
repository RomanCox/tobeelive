type PositionType = 'left' | 'central' | 'right';

export type PositionPropsType = {
    position: PositionType,
}

export type ImagePropsType = PositionPropsType & {
    src: string,
}

export type AvatarType = PositionPropsType & {
    image: string,
}
