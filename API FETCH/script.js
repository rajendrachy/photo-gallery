// Function to handle search functionality
function search() {
    // Get the input value
    const input = document.querySelector('input').value;
    const rating = parseFloat(input);

    if (!isNaN(rating)) {
        // Filter the movies by rating
        const filteredMovies = movies.filter(movie => movie.rating === rating);
        displayMovies(filteredMovies);
    } else {
        alert('Not Found');
    }
}


let movies = [];

fetch('https://feecq.github.io/api/movies.json')
    .then(response => response.json())
    .then(data => {
        movies = data;
        displayMovies(movies);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to display movies
function displayMovies(movieListArray) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = ''; // Clear movie list container
    movieListArray.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const title = document.createElement('h3');
        title.textContent = movie.movie;

        const img = document.createElement('img');
        img.src = movie.image;
        img.alt = movie.movie;
        

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${movie.rating}`;

        const link = document.createElement('a');
        link.href = movie.imdb_url;
        link.textContent = "View on IMDb";
        link.target = "_blank";

        movieDiv.appendChild(title);
        movieDiv.appendChild(img);
        movieDiv.appendChild(rating);
        movieDiv.appendChild(link);

        movieList.appendChild(movieDiv);
    });
}

// Event listener for search button
document.querySelector('button').addEventListener('click', search);
