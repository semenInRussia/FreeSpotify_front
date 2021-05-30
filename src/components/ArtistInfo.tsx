import React from 'react';
import {Artist} from "../types/entities";

import '../assets/artist-info.css';

import BigImage from "./BigImage";
import {getMessageForArtist} from "../entities";
import ArtistTop from "./ArtistTop";


type ArtistInfoProps = {
    artist: Artist
}

const ArtistInfo: React.FC<ArtistInfoProps> = ({artist}) => {
    return (
        <div className='artist-info'>
            <div className="artist-main-info">
                <div className="artist-header">
                    <h1>{artist.name}</h1>

                    <hr/>

                    <div className='message-for-artist'>
                        {getMessageForArtist(artist)}
                    </div>
                </div>

                <hr/>

                <div className='image'>
                    <BigImage src={artist.link_on_img || ''} alt="This is image of cool band..."/>
                </div>

            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <hr/>

            <div className='artist-top'>
                <ArtistTop top={artist.top}/>
            </div>
        </div>
    );
};

export default ArtistInfo;