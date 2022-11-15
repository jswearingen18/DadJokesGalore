const newJokeForm = async (event) => {
  event.preventDefault();

  const jokes = document.querySelector('#jokes').value.trim();

  if (jokes) {
    const response = await fetch(`/api/jokes`, {
      method: 'POST',
      body: JSON.stringify({ jokes }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Error with Joke');
    }
  }
};

const deleteJoke = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/jokes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Error with deleting the Joke');
    }
  }
};

document.querySelector('#submitJoke');
document.addEventListener('submit', newJokeForm);

document.querySelector('.jokesList');
document.addEventListener('click', deleteJoke);
