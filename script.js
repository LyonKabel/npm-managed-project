// import faker from 'faker'

// const randomName = faker.person.firstName();
// const randomEmail = faker.internet.email();

// console.log('Name:', randomName);
// console.log('Email:', randomEmail);

document.addEventListener('DOMContentLoaded', () => {
    const movieTitleInput = document.getElementById('movieTitle');
    const searchButton = document.getElementById('searchButton');
    const movieInfo = document.getElementById('movieInfo');
    
    searchButton.addEventListener('click', () => {
        const movieTitle = movieTitleInput.value.trim();
        
        if (movieTitle) {
            
            const apiKey = '9bae4942';
            const apiUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;
            
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === 'True') {
                        const title = data.Title;
                        const year = data.Year;
                        const director = data.Director;
                        const plot = data.Plot;
                        
                        const movieHtml = `
                            <h3>${title} (${year})</h3>
                            <p>Directed by: ${director}</p>
                            <p>${plot}</p>
                        `;
                        
                        movieInfo.innerHTML = movieHtml;
                    } else {
                        movieInfo.innerHTML = 'Movie not found!';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    movieInfo.innerHTML = 'An error occurred while fetching data.';
                });
        }
    });
});