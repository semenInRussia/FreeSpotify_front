import React from 'react';

import AnimatedDot from './AnimatedDot';

const Loader: React.FC = () => {
    return (
        <div>
            <h1>
                <AnimatedDot/>
                <AnimatedDot/>
                <AnimatedDot/>
                .
                <AnimatedDot/>
                <AnimatedDot/>
                <AnimatedDot/>
            </h1>
        </div>
    )
}

export default Loader