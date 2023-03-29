// Remplacez les valeurs suivantes par vos propres identifiants de client Spotify
const clientId = '95f1dd85c4664ffabab59158fd0ff7e3';
const clientSecret = '';

// Définissez l'URL de l'API de Spotify
const spotifyApiUrl = 'https://api.spotify.com/v1';

// Définissez l'artiste dont vous souhaitez récupérer le top 10
const artistName = 'NOM_DE_L_ARTISTE';

// Récupérez un token d'authentification auprès de Spotify
async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
}

// Récupérez le top 10 de l'artiste en question
async function getTop10() {
  const token = await getToken();
  const response = await fetch(`${spotifyApiUrl}/search?q=${artistName}&type=artist`, {
    headers: { 'Authorization': 'Bearer ' + token },
  });
  const data = await response.json();
  const artistId = data.artists.items[0].id;
  const top10Response = await fetch(`${spotifyApiUrl}/artists/${artistId}/top-tracks?country=FR`, {
    headers: { 'Authorization': 'Bearer ' + token },
  });
  const top10Data = await top10Response.json();
  return top10Data.tracks;
}

// Affichez les titres des 10 premières chansons
getTop10().then((tracks) => {
  for (let i = 0; i < 10; i++) {
    console.log(tracks[i].name);
  }
});