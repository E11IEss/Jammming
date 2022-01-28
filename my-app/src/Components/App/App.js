import React from "react"
import './App.css';
import { SearchBar } from "../SearchBar/SearchBar"
import { SearchResult } from "../SearchResult/SearchResult";
import { Playlist } from "../Playlist/Playlist";

export function App() {
  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResult />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
