import React from "react";
const InfoArtist = ({ artist_info }) => {
  if (Object.keys(artist_info).length === 0) return null;
  const { strArtistThumb, strGenre, strBiographyEN } = artist_info;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Artist Info
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Artist Logo"></img>
        <p className="card-text">Genre: {strGenre}</p>
        <h2 className="card-text">Biography:</h2>
        <p className="card-text">{strBiographyEN}</p>
        <a
          href={`https://${artist_info.strFacebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href={`https://${artist_info.strTwitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href={`${artist_info.strLastFMChart}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-lastfm"></i>
        </a>
      </div>
    </div>
  );
};

export default InfoArtist;
