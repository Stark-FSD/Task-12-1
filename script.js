console.log("File Linked")


// Chuck Norris Joke API
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        const jokeContainer = document.getElementById('jokeContainer');
        jokeContainer.innerHTML = `<p>${data.value}</p>`;
    })
    .catch(error => console.error(error));




