//application’s client ID and redirect URI.

//to store users access token 
let accessToken;

//checking condition of the access token and expires time to excute different task
export let Spotify = {
    getAccessToken() {
        //if access token is set, return the value saved of the access token variable
        if (accessToken) {
            return accessToken;
        }
        //if token are not set,check the THE URL to see if it's already obtained
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresMatch = window.location.href.match(/expires_in=([^&]*)/);
        //if it's obtained, set the access token to the value of accessTokenMatch(the value we just retrieve)
        if (accessTokenMatch && expiresMatch) {
            accessToken = accessTokenMatch[1];
            let expires = Number(expiresMatch[1]);
            //this clear the parameter and let us grab a new access token when it's expired
            window.setTimeout(() => accessToken = '', expires * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessTokenMatch;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
            window.loaction = accessUrl;
        }

        
    },

    SearchBar(searchTerm){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, 
        {headers:{ Authorization: `Bearer ${accessToken}`}}
        ).then(respose => {
            return respose.json();
        }).then(jsonRespose => {
            if (!jsonRespose.tracks){
                return [];
            }
            return jsonRespose.tracks.items.map( ele => ({
                id: ele.id,
                name: ele.name,
                artist: ele.artist,
                album: ele.album.name,
                uri: ele.uri 
            }))
        })
    },

    savePlaylist(name, trackUris){
        if(!name || !trackUris.length){
            return;
        }         
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}}`};
        let userId;

        return fetch('https://api.spotify.com/v1/me', {headers: headers}
        ).then(response => response.json()
        ).then(jsonRespose => {
            userId = jsonRespose.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, 
            {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name})
            }).then(response => response.json()
            ).then(jsonRespose => {
                const playlistId = jsonRespose.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, 
                {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: trackUris})
                })
            })
        })
    }
}