import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopTracks from './TopTracks';
import { SpotifyAuth } from './Spotify';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/toptracks" element= {<TopTracks/>} />
          <Route index element= {<button className="LoginButton" onClick={SpotifyAuth}>
  Log In with Spotify
</button>} />
          {/* Log out button */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;