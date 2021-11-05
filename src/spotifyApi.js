// login through spotify
export const auth = "https://accounts.spotify.com/authorize";

const redirectUri = 'http://localhost:3000/';
const clientId = "f2d671c229d341b7bc2993a44d13cb67";

// scope
const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${auth}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;