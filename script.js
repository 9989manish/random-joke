// Function to generate a random joke using async/await
async function generateJoke() {
    const jokeElement = document.getElementById('joke');
    const apiUrl = 'https://icanhazdadjoke.com/'; //api link

    const response = await fetch(apiUrl, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    jokeElement.textContent = data.joke; 
}
