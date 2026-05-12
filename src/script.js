/** fetch funtion: async data fetching and sending/retrieving
 * data asynchronously over the internet with provided APIs.
 */

/**
 * fetch(url, options) method
 * 1: fetch(url, {method: "GET, POST, PUT, DELETE"});
 */
fetch("https://pokeapi.co/api/v2/pokemon/ditto") // the url, a promise
    .then(response => {
	if(!response.ok) { // standard response property to check if response succeed
	    throw new Error ("Fetch failed");
	}
	return response.json(); // .json is also a promise
    })
    .then(data => console.log(data.name))// if resolve
    .catch(error => console.error(error));  // if reject, catches Error("...")

/**
 * Async method
 */
// fetchData();

async function fetchData() {
    try {
	// get name from html
	const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

	// wait for fetch() to return a promise (the response object)
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

	if(!response.ok) { // need to check if response is not ok
	    throw new Error("Fetch failed");
	}
	// if response is ok, rmb .json is a promise, hence the await
	const data = await response.json();
	const pokemonSprite = data.sprites.front_default;
	const imgElement = document.getElementById("pokemonSprite");

	imgElement.src = pokemonSprite;
	imgElement.style.display = "block";
    }
    catch(error) { // catch has one parameters
	console.error(error);
    }
}
