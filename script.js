document.getElementById("search-button").addEventListener(
  click,
  fetch("https://api.artsy.net/api")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
);
