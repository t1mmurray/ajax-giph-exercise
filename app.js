const container = document.querySelector(".container");
const input = document.querySelector("#search");
const button = document.querySelector("#searchBtn");
const removeBtn = document.querySelector("#remove");

// Makes the API call for 1 giph using Giphy key and user input
async function searchGIFs(string) {
  const key = "EWYAWy2Y4BgXCGxxD33uq8KleR71ADBI";

  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { api_key: key, q: string, limit: 1 },
  });
  let giphUrl = res.data.data[0].url;
  createGiph(giphUrl);
}

// Takes the url from the API call and creates an image element and appends it to a container
const createGiph = (url) => {
  let giph = document.createElement("img");
  giph.src = url;
  container.append(giph);
};

// calls the search function when the search button is clicked
button.addEventListener("click", function (e) {
  e.preventDefault();
  searchGIFs(input.value);
});

removeBtn.addEventListener("click", function () {
  container.innerHTML = "";
});
