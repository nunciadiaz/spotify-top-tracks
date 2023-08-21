import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();
const clientId = '3e1ea45a74e44d0c8aba2b4ac7feeb08';
const redirectUri = 'http://localhost:3000/toptracks';


const loginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user-top-read&response_type=token&show_dialog=true`;

const SpotifyAuth = () => {
  window.location.href = loginUrl;
};

const setAccessToken = (token) => {
  spotifyApi.setAccessToken(token);
};
// Token obtention
const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};


export { SpotifyAuth, setAccessToken, getTokenFromUrl, spotifyApi };