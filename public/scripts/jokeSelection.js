const jokeSelect = document.querySelector('#joke-select');
const jokeContainer = document.querySelector('#joke-container');
const jokeText = document.querySelector('#joke-text');

jokeSelect.addEventListener('change', event => {
  selectedJoke = event.target.value

  fetch(`/joke/${selectedJoke}`)
  .then(response => response.json())
  .then((data) => {
    jokeContainer.style.display = 'block';
    jokeText.textContent = data.joke;
  });
});
