import React from 'react';

import '../assets/big-image.css';


type BigImageProps = {
    src: string,
    alt?: string
}

const BigImage: React.FC<BigImageProps> = ({src, alt}) => {
    return (
        <img className='big-image' src={src} alt={alt || "This is image..."}/>
    );
};

export default BigImage;