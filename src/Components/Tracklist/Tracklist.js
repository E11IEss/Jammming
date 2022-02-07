import React from "react";
import './Tracklist.css';
import { Track } from "../Track/Track";

export function Tracklist(props) {
    return (
        <div className="TrackList">
            {/* <!-- map method - renders a set of Track components by mapping all the tracks passed by search result --> */}
            {props.tracks?.map((ele) => {
                return(
                <Track track={ele} key={ele.id} onAdd={props.onAdd} onRemove={props.onRemove} removeToggle={props.isRemoval}/> 
                )
            })}
        </div>
    )
}