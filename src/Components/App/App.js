import React, { useState } from "react"
import './App.css';
import { SearchBar } from "../SearchBar/SearchBar"
import { SearchResult } from "../SearchResult/SearchResult";
import { Playlist } from "../Playlist/Playlist";

export function App() {
  const [searchResult, setSearchResult] = useState([{ name: 'song name', id: 1, album: 'album name', artist: 'artist name' }]);
  const [playListName, setPlayListName] = useState('listname');
  const [playListTracks, setPlayListTracks] = useState([{ name: '111', id: 2, album: '222', artist: '333' }]);

  const addTrack = (track) => {
    if (playListTracks.find((ele) => ele.id === track.id)) { return } else {
      setPlayListTracks(playListTracks.push(track))
    }
  }

  const removeTrack = (track) => {
    setPlayListTracks(playListTracks.filter((ele) => ele.id !== track.id))
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResult searchResult={searchResult} onAdd={addTrack} />
          <Playlist playListName={playListName} playListTracks={playListTracks} onRemove={removeTrack} />
        </div>
      </div>
    </div>
  );
}

export default App;
