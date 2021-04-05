import React, { useState } from "react";

const Form = ({ handleLyricsSearch }) => {
  //search useState hook to keep track the state of input form fields
  const [search, handleSearch] = useState({
    artist: "",
    song: "",
  });

  //useSTate hook to keetp track form validations error
  const [error, handleError] = useState(false);

  //destructuring search state values to use them independently
  const { artist, song } = search;

  //function to read form inputs values and update the above state hook
  const updateState = (e) => {
    handleSearch({
      ...search, //copy of the state object
      [e.target.name]: e.target.value, //append form inputs value to search state hook
    });
  };

  //when user submit the form
  const searchArtistSong = (e) => {
    e.preventDefault();

    //simple form validation
    if (artist.trim() === "" || song.trim() === "") {
      handleError(true);
      return;
    }
    handleError(false);

    //if form is validated pass search terms to app component useState to requestAPI
    handleLyricsSearch(search);
  };

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          both fields are mandatory
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={searchArtistSong}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Song Lyrics Finder</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input
                      onChange={updateState}
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="type artist name"
                      value={artist}
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input
                      onChange={updateState}
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="type a song"
                      value={song}
                    ></input>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
