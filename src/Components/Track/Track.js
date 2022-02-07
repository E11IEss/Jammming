import React from "react"

export function Track(props) {

    //passed from **app** / onClick to add tracks to playlist from search result
    const addTrack = () => {
        props.onAdd(props.track)
    }
    
    //passed from **app** /for event listener onClick to remove tracks from playlist
    const removeTrack = () => {
        // props.onRemove(props.track)
        console.log(props)
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className="Track-action" onClick={addTrack}>+{/* <-- + or - will go here --> */}</button>
            <button className="Track-action" onClick={removeTrack}>-{/* <-- + or - will go here --> */}</button>
            
        </div>
    )
}