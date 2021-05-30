import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import {Artist} from "../types/entities";
import {fetchArtist} from "../store/action-creators/artist";
import {ErrorState, RootState} from "../types/redux/states";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ArtistInfo from "../components/ArtistInfo";


type ArtistDetailParams = {
    name: string
}

type ArtistDetailProps = {
    artist?: Artist,
    fetchArtist: (artist: Artist) => void,
    loading: boolean,
    error: ErrorState
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

    if (props.error.isCaught) {
        return (
            <ErrorMessage name={props.error.name} message={props.error.message}/>
        )
    }

    if (props.artist) {
        return (
            <ArtistInfo artist={props.artist}/>
        )
    }

    return <h1>WTF????</h1>
}

const mapDispatchToProps = (dispatch: any) => ({
    fetchArtist: (artist: Artist) => dispatch(fetchArtist(artist))
})

const mapStateToProps = (state: RootState) => ({
    artist: state.artist?.object,
    loading: state.loading,
    error: state.artist.error
})


export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);