import React from "react";
import './Playlist.css';
import { Tracklist } from "../Tracklist/Tracklist";

export function Playlist(props) {

    //event handler for changing the name of a playlist 
    const handleNameChange = (event) =>{
        props.onNameChange(event.target.value)
    }

    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
            <Tracklist tracks={props.playListTracks} onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>)

}