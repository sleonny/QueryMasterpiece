document.getElementById("search-button").addEventListener("click", function () {
  const searchTerm = document.getElementById("searchInput").value;

  const apiEndpoint = `https://api.artsy.net/api/artists?search=${encodeURIComponent(
    searchTerm
  )}`;

  fetch(apiEndpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
