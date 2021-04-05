import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import axios from "axios";
import SongLyrics from "./components/SongLyrics";
import InfoArtist from "./components/InfoArtist";

function App() {
  //main useState hook of the app, state the form search terms on lyrics_search object
  const [lyrics_search, handleLyricsSearch] = useState({});

  //hook to state the lyrics  response from API
  const [lyrics_artist, handleLyricsArtist] = useState({
    artist_info: "",
    lyrics: "",
  });

  //destructuring lyrics_artist state to use their values independently
  const { lyrics, artist_info } = lyrics_artist;

  //useEffect hook to request the APIs use lyrics_search State as dependency
  useEffect(() => {
    //request the API only if lyrics_search object is NOT empty
    if (
      Object.keys(lyrics_search).length === 0 ||
      Object.keys(lyrics_artist).length === 0
    )
      return;
    //function to request 2 different APis
    const requestLyricsAPI = async () => {
      //destructuring lyrics_search to seek the song lyrics and artist info
      const { artist, song } = lyrics_search;
      //API to request lyrics
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      //API to request artist info
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      //promise to start both request API at the same time
      const [lyrics, info] = await Promise.all([axios(url), axios(url2)]);
      //append the lyrics and artist info in State
      handleLyricsArtist({
        ...lyrics_artist,
        lyrics: lyrics.data.lyrics,
        artist_info: info.data.artists[0], //copy of th
      });
    };
    requestLyricsAPI();
  }, [lyrics_search, lyrics_artist]); //useEffects dependencys

  return (
    <Fragment>
      <Form handleLyricsSearch={handleLyricsSearch} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <InfoArtist artist_info={artist_info} />
          </div>
          <div className="col-md-6">
            <SongLyrics lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
