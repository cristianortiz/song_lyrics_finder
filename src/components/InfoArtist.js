import React from "react";
const InfoArtist = ({ artist_info }) => {
  if (Object.keys(artist_info).length === 0) return null;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Artist Info
      </div>
      <div className="card-body">
        <img src={artist_info.strArtistThumb} alt="Artist Logo"></img>
      </div>
    </div>
  );
};

export default InfoArtist;
