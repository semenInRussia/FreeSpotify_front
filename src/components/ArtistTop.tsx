import React from 'react';

import {Track} from "../types/entities";
import ArtistTopItem from "./ArtistTopItem";

import '../assets/artist-top.css';


type ArtistTopProps = {
    top?: Track[]
}

const ArtistTop: React.FC<ArtistTopProps> = ({top}) => {
    if (!top) {
        return <h6>What happened with top...</h6>
    }

    return (
        <ol className='artist-top'>
            {top.map((track, index) => (
                <ArtistTopItem key={index.toString()} track={track} index={index}/>
            ))}
        </ol>
    )
}

export default ArtistTop;