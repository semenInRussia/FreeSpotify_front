import React, {Fragment, SyntheticEvent} from "react";
import Button from "../components/Button";
import {useHistory} from "react-router-dom";

import TextInput from "../components/TextInput";
import {useTextInputToUpperCase} from "../hooks/formHooks";

import {getPathToArtist} from "../entities";

import "../assets/artists.css";


const Artists: React.FC = () => {
    const [artistName, onChangeArtistName] = useTextInputToUpperCase('')

    const routerHistory = useHistory()

    const sendData = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (artistName) {
            const artist = {
                name: artistName
            }

            routerHistory.push(getPathToArtist(artist))
        }
    }

    return (
        <Fragment>
            <h1>Search Artists!</h1>

            <form onSubmit={sendData} className='artists-form'>
                <TextInput value={artistName} onChange={onChangeArtistName}/>

                <Button>GO!</Button>
            </form>
        </Fragment>
    )
};

export default Artists;