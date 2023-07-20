const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "9459931345f6431f88e68000cc6342c7";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = '${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true';