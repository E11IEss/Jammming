import React from "react";
import './SearchResult.css';
import { Tracklist } from "../Tracklist/Tracklist";

export function SearchResult(props) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={props.searchResult} onAdd={props.onAdd} isRemoval={false}/>
        </div>)
}