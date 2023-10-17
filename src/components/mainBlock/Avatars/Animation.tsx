import leftVideoWEBM from '../../../assets/animations/with_dog_560p-vp9-chrome.webm';
import centralVideoWEBM from '../../../assets/animations/with_laptop_560p-vp9-chrome.webm';
import rightVideoWEBM from '../../../assets/animations/with_ball_560p-vp9-chrome.webm';
import leftVideoMP4 from '../../../assets/animations/withdog_560p_130fr.mp4';
import centralVideoMP4 from '../../../assets/animations/work_560p_130fr.mp4';
import rightVideoMP4 from '../../../assets/animations/basketball_560p_130fr.mp4';
import {PositionPropsType} from './Avatars.types';

const Animation = ({position}: PositionPropsType) => <video
    height={'100%'}
    width={'100%'}
    muted={true}
    playsInline={true}
    autoPlay={true}
    loop={true}
>
    <source src={position === 'left' ? leftVideoMP4 : position === 'central' ? centralVideoMP4 : rightVideoMP4}
            type='video/mp4;codecs=hvc1'/>
    <source src={position === 'left' ? leftVideoWEBM : position === 'central' ? centralVideoWEBM : rightVideoWEBM}
            type='video/webm'/>
</video>

export default Animation;
