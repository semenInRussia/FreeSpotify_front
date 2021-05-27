import React, {Fragment, useState} from "react";
import {connect} from "react-redux";

import TextInput from "../components/TextInput";
import Button from "../components/Button";
import {fetchArtist} from "../redux/actions";

import "../assets/artists.css";


interface ArtistsProps {
    fetchArtist: any
}

const Artists: React.FC<ArtistsProps> = ({fetchArtist}) => {
    const [artistName, setArtistName] = useState<string>('')

    const sendData = (e: any) => {
        e.preventDefault()

        fetchArtist(artistName)
    }

    const createHandlerTextInput = (stateSetter: any) => (event: any) => {
        stateSetter(event.target.valueOf().value.toUpperCase())
    }

    return (
        <Fragment>
            <h1>Search Artists!</h1>

            <form onSubmit={sendData} className='artists-form'>
                <TextInput value={artistName} onChange={createHandlerTextInput(setArtistName)}/>

                <Button>GO!</Button>
            </form>
        </Fragment>
    )
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchArtist: (artistName: string) => dispatch(fetchArtist(artistName))
})

export default connect(null, mapDispatchToProps)(Artists);