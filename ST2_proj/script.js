const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const movieDetails = document.getElementById('movieDetails');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=b85aff4b`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    const movieTitle = data.Title;
                    const movieYear = data.Year;
                    const moviePlot = data.Plot;
                    const moviePoster = data.Poster;
                    movieDetails.innerHTML = `
                        <h2>${movieTitle} (${movieYear})</h2>
                        <p>${moviePlot}</p>
                        <img src="${moviePoster}" alt="${movieTitle}" width="200">
                    `;
                } else {
                    movieDetails.innerHTML = `<p>No movie found with that title.</p>`;
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                movieDetails.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
            });
    } else {
        movieDetails.innerHTML = `<p>Please enter a movie title.</p>`;
    }
});
