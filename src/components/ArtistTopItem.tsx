import React from 'react';
import {Track} from "../types/entities";

import {DEFAULT_ARTIST_IMG, LENGTH_OF_ARTIST_TOP} from "../constants";
import Avatar from "./Avatar";

import '../assets/artist-top-item.css';


type ArtistTopItemProps = {
    track: Track,
    index: number
}

const ArtistTopItem: React.FC<ArtistTopItemProps> = ({track, index}) => {
    return (
        <li>
            <div className='artist-top-item-info'>
                <h3><a href={track.link}>{track.name}</a></h3>
                <Avatar src={track.album?.link_on_img || DEFAULT_ARTIST_IMG}/>
            </div>

            {index !== LENGTH_OF_ARTIST_TOP - 1 ? <hr/> : null}
        </li>
    );
};

export default ArtistTopItem;