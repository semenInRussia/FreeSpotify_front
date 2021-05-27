import React, {Fragment, useState} from "react";
import {connect} from "react-redux";

import TextInput from "../components/TextInput";
import Button from "../components/Button";
import {fetchArtist} from "../redux/actions";

import "../assets/artists.css";


const Artists = ({fetchArtist}) => {
    const [artistName, setArtistName] = useState('')

    const sendData = (e) => {
        e.preventDefault()

        fetchArtist(artistName)
    }

    const createHandlerTextInput = (stateSetter) => event => {
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

const mapDispatchToProps = dispatch => ({
    fetchArtist: (artistName) => dispatch(fetchArtist(artistName))
})

export default connect(null, mapDispatchToProps)(Artists);