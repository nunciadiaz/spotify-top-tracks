import React, { useEffect, useState } from 'react';
import { spotifyApi, getTokenFromUrl, setAccessToken } from './Spotify';
import './TopTracks.css';

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const tokenData = getTokenFromUrl();
    window.location.access_token = '';
    const accessToken = tokenData.access_token;

    if (accessToken) {
      setAccessToken(accessToken);
      spotifyApi
      .getMyTopTracks({ time_range: 'short_term', limit: 10 })
      .then((response) => {
        setTopTracks(response.items);
      });
    } else {
    // If access token isn't available/user not authenticated
    alert('User is not authenticated or account not found.')
  }

  }, []);

  return (
    <div className="Container">
      <h1 className="Title">My Top 10 tracks</h1>
      <ul className="TrackList">
      {topTracks.map((track, index) => (
        <li className="TrackItem" key={track.id}>
          {index + 1}. {track.name}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTracks;
