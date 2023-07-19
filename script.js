
const API = "oA5sRjvQIPFW5wApv92f_FZtXpNFL8ghXUnQ5fhz9co";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("search-but");
const searchResult = document.getElementById("search-result");
const searchMore = document.getElementById("show-more");


let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${API}&per_page=28`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    })
    searchMore.style.display = "block";
}
        

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        page = 1;
        searchImage();
    })

    searchMore.addEventListener("click", () => {
        page++;
        searchImage();
    })
