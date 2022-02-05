import React from "react";
import './Tracklist.css';
import { Track } from "../Track/Track";

export function Tracklist(props) {
    return (
        <div className="TrackList">
            {/* <!-- You will add a map method that renders a set of Track components  --> */}
            {props.tracks.map((ele) => {
                return(
                <Track track={ele} key={ele.id} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval}/> 
                )
            })}
        </div>
    )
}