import React, { useState } from "react"
import './App.css';
import { SearchBar } from "../SearchBar/SearchBar"
import { SearchResult } from "../SearchResult/SearchResult";
import { Playlist } from "../Playlist/Playlist";
import { Spotify } from "../../util/Spotify";

export function App() {

  //state for searchresult. will be passed to **search result** then **tracklist** then **track** component for mapping individual songs
  const [searchResult, setSearchResult] = useState([{ name: 'song name', id: 1, album: 'album name', artist: 'artist name' }, { name: 'song name', id: 2, album: 'album name', artist: 'artist name' }]);

  //state for playlist. setting the name of the list 
  const [playListName, setPlayListName] = useState('listname');
  //state for playlist. setting the state of all the tracks in a playlist (addition and removal)
  const [playListTracks, setPlayListTracks] = useState([{ name: '111', id: 2, album: '222', artist: '333' }]);

  //method for adding tracks from search result to playlist 
  const addTrack = (track) => {
    if (playListTracks.find((ele) => ele.id === track.id)) { return } else {
      setPlayListTracks(playListTracks.push(track))
    }
  }

    //method for removing added tracks from playlist 
  const removeTrack = (track) => {
    setPlayListTracks(playListTracks.filter((ele) => ele.id !== track.id))
  }

  //method for updating the name of a playist
  const updatePlaylistName = (name) => {
    setPlayListName(name)
  }

  //method for saving playlist to account
  const savePlaylist = () => {
    let trackURIs = playListTracks.map(ele => ele.uri);
    Spotify.savePlaylist(setPlayListName, trackURIs).then(() => {
      setPlayListName('New Playlist');
      setPlayListTracks([]);
    })

  }

  //method that cononect to SpotifyWeb API and let user do searches
  const search = (term) => {
    Spotify.search(term).then(searchResult => setSearchResult(searchResult))
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResult searchResult={searchResult} onAdd={addTrack} />
          <Playlist 
            playListName={playListName} 
            playListTracks={playListTracks} 
            onRemove={removeTrack} 
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
