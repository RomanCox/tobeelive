import {ImagePropsType} from "./Avatars.types";

export const Image = ({position, src}: ImagePropsType) => <img
    src={src}
    width='100%'
    height='100%'
    alt={position === 'left' ? 'avatar with dog' : position === 'central' ? 'avatar with notebook' : 'avatar with basketball'}
/>