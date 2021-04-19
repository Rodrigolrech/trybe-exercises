// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const jokeContainer = document.querySelector('#jokeContainer');
      jokeContainer.innerHTML = data.joke;
    });
    
};



window.onload = () => fetchJoke();