import React from "react";
import './Playlist.css';
import { Tracklist } from "../Tracklist/Tracklist";

export function Playlist(props) {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} />
            {/* <Tracklist trackss={props.playListTracks} onRemove={props.onRemove} isRemoval={true}/> */}
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>)

}