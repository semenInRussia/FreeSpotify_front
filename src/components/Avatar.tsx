import React from 'react';

import '../assets/avatar.css';


type AvatarProps = {
    src: string,
    alt?: string
}

const Avatar: React.FC<AvatarProps> = ({src, alt}) => {
    const DEFAULT_ALT = 'This something avatar...'

    return (
        <img src={src} alt={alt || DEFAULT_ALT} className='avatar'/>
    );
};

export default Avatar;