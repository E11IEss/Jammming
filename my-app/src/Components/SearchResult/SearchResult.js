import React from "react";
import './SearchResult.css';
import { Tracklist } from "../Tracklist/Tracklist";

export function SearchResult() {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist />
        </div>)
}