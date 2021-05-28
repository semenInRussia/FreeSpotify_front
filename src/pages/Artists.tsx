import React, {Fragment, SyntheticEvent} from "react";
import {connect} from "react-redux";

import TextInput from "../components/TextInput";
import Button from "../components/Button";
import {useTextInputToUpperCase} from "../hooks/formHooks";
import {fetchArtist} from "../store/actions-creators";

import "../assets/artists.css";



type ArtistsProps = {
    fetchArtist: (artistName: string) => void
}

const Artists: React.FC<ArtistsProps> = ({fetchArtist}) => {
    const [artistName, onChangeArtistName] = useTextInputToUpperCase('')

    const sendData = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetchArtist(artistName)
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


const mapDispatchToProps = (dispatch: any) => ({
    fetchArtist: (artistName: string) => dispatch(fetchArtist(artistName))
})

export default connect(null, mapDispatchToProps)(Artists);