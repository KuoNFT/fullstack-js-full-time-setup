// Remplacez les valeurs ci-dessous par votre Client ID et Client Secret de l'API Spotify
const clientId = "95f1dd85c4664ffabab59158fd0ff7e3";
const clientSecret = "4d43e5624e42484bac93d8379368a479";

// Récupérer les éléments du DOM
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchBar");
const artistsList = document.getElementById("artistsList");

// Ajouter un gestionnaire d'événement pour le clic sur le bouton de recherche
searchButton.addEventListener("click", () => {
  const artistName = searchInput.value;

  // Récupérer le jeton d'accès à l'API Spotify en utilisant les informations d'identification de l'application
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: "grant_type=client_credentials",
  })
    .then((response) => response.json())
    .then((data) => {
      const accessToken = data.access_token;

      // Utiliser le jeton d'accès pour récupérer les informations de l'artiste en fonction de son nom
      fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const artist = data.artists.items[0];
          const artistId = artist.id;
           // Récupérer les top tracks de l'artiste
           fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=FR`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              const top10 = data.tracks.slice(0, 10);

              // Effacer le contenu précédent de la liste des artistes
              artistsList.innerHTML = "";

              // Afficher la photo de l'artiste si elle est disponible
              if (artist.images.length > 0) {
                const image = document.createElement("img");
                image.src = artist.images[0].url;
                artistsList.appendChild(image);
              }

              // Afficher le nom de l'artiste
              const name = document.createElement("h2");
              name.textContent = artist.name;
              artistsList.appendChild(name);

              // Afficher la liste des top tracks de l'artiste
              const top10List = document.createElement("ul");
              top10List.classList.add("top10");
              for (let i = 0; i < top10.length; i++) {
                const track = top10[i];
                const trackItem = document.createElement("li");
                trackItem.textContent = `${track.name} - ${track.album.name}`;
                top10List.appendChild(trackItem);
              }
              const top10Title = document.createElement("h3");
              top10Title.textContent = "Top 10 Tracks";
              artistsList.appendChild(top10Title);
              artistsList.appendChild(top10List);
            })
            .catch((error) => {
              console.error("Erreur : impossible de récupérer le top 10 de l'artiste", error);
            });
        })
        .catch((error) => {
          console.error("Erreur : impossible de récupérer les informations de l'artiste", error);
        });
    })
    .catch((error) => {
      console.error("Erreur : impossible de récupérer le jeton d'accès à l'API Spotify", error);
    });
});





