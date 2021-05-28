import React, {useEffect} from "react";
import {connect} from "react-redux";

import {useParams} from "react-router-dom";
import {Artist} from "../types/entities";
import {fetchArtist} from "../store/actions-creators";
import {RootState} from "../types/redux/states";
import Loader from "../components/Loader";


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
    }, [])

    if (props.loading) {
        return (
            <Loader/>
        )
    }

    else {
        return (
            <h1>{props.artist?.name}</h1>
        )
    }
}


const mapDispatchToProps = (dispatch: any) => ({
    fetchArtist: (artist: Artist) => dispatch(fetchArtist(artist))
})

const mapStateToProps = (state: RootState) => ({
    artist: state.artist,
    loading: state.loading,
})


export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);