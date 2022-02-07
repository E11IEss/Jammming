import React from "react"

export function Track(props) {

    //passed from **app** / onClick to add tracks to playlist from search result
    const addTrackToPlaylist = () => {
        props.onAdd(props.track)
    }

    //passed from **app** /for event listener onClick to remove tracks from playlist
    const removeTrack = () => {
        props.onRemove(props.track)
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {/* toggle between + add tracks sign and - remove track sign */}
            {props.removeToggle ? 
            <button className="Track-action" onClick={removeTrack}>-</button> 
            : <button className="Track-action" onClick={addTrackToPlaylist}>+</button>
            }
        </div>
    )
}