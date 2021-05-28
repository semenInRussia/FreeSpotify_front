import React from 'react';

import '../assets/animated-dot.css'

type AnimatedDotProps = {
    delay?: number
}

const AnimatedDot: React.FC<AnimatedDotProps> = () =>
    (
        <span className='twinkling-dot'>
           .
        </span>
    )

export default AnimatedDot