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

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

//Banner
fetch(requests.fetchNetflixOriginals)
.then((res => res.json()))
.then((data) => {
    console.log(data.results);
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie);
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");
    banner.style.background = "url(" + img_url + setMovie.backdrop_path + ");";
    banner_desc.innerText = setMovie.truncate(setMovie.overview, 150);
})//TODO continuar o código
