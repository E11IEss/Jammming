import React from "react";
import './Playlist.css';
import { Tracklist } from "../Tracklist/Tracklist";

export function Playlist(props) {

    const handleNameChange = (event) =>{
        props.onNameChange(event.target.value)
    }

    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
            {/* <Tracklist trackss={props.playListTracks} onRemove={props.onRemove} isRemoval={true}/> */}
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>)

}