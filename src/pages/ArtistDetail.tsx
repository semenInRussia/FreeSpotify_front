import React, {useEffect} from "react";
import {connect} from "react-redux";

import {useParams} from "react-router-dom";
import {Artist} from "../types/entities";
import {fetchArtist} from "../store/actions-creators";
import {RootState} from "../types/redux/states";


type ArtistDetailParams = {
    name: string
}

type ArtistDetailProps = {
    artist?: Artist,
    fetchArtist: (artist: Artist) => void,
    loading: boolean,
}

const ArtistDetail: React.FC<ArtistDetailProps> = (props) => {
    const params = useParams<ArtistDetailParams>()
    const artistName = params.name

    useEffect(() => {
        const newArtist = {
            name: artistName
        }

        props.fetchArtist(newArtist)
    }, [artistName, props])

    return (
        <h1>{props.artist?.name || 'Loading...'}</h1>
    )
}


const mapDispatchToProps = (dispatch: any) => ({
    fetchArtist: (artist: Artist) => dispatch(fetchArtist(artist))
})

const mapStateToProps = (state: RootState) => ({
    artist: state.artist,
    loading: state.loading,
})


export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);