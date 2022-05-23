const api = "729bb2f771bb0d7b1578127952f4c446";
const base_url = "https://api.themoviedb.org/3";
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
const img_url ="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";

const requests = {
    fetchPopular:`${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&$${api}`,
    fetchTrending:`${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals:`${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies:`${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies:`${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies:`${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies:`${base_url}/discover/movie?${api}&with_genres=35`,
    fetchDocumentaries:`${base_url}/discover/movie?${api}&with_genres=27`,
};
//Used to truncate the string
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

//Banner
fetch(requests.fetchNetflixOriginals)
.then((res => res.json()))
.then((data) => {
    console.log(data.results);
    //every refresh the movie will be charge
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie);
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");
    banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ");";
    banner_desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
})
fetch(requests.fetchNetflixOriginals)
.then((res => res.json()))
.then((data) => {
    const headrow = document.getElementById('headrow');
    const row = document.createElement('div');
    row.className = "row";
    row.classList.add("nteflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "NETFLIX ORIGINALS";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s = movie.name.replace(/\s+/g, "");
        poster.id = s;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    });
});

//trending

fetch(requests.fetchPopular)
.then((res => res.json()))
.then((data) => {
    const headrow = document.getElementById('headrow');
    const row = document.createElement('div');
    row.className = "row";
    row.classList.add("popularrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Trending now";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_posterLarge1";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    });
});

//Top rated

fetch(requests.fetchActionMovies)
.then((res => res.json()))
.then((data) => {
    const headrow = document.getElementById('headrow');
    const row = document.createElement('div');
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Action movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});


//Comedy

fetch(requests.fetchComedyMovies)
.then((res => res.json()))
.then((data) => {
    const headrow = document.getElementById('headrow');
    const row = document.createElement('div');
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Comedy movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});
