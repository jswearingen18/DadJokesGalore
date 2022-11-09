const newJokeForm = async (event) => {
  event.preventDefault();

  const joke = document.querySelector('#joke').value.trim();

  if (joke) {
    const response = await fetch(`/api/jokes`, {
      method: 'POST',
      body: JSON.stringify({ jokes }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/joke');
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

document.querySelector('.newJokeForm');
document.addEventListener('submit', newJokeForm);

document.querySelector('.jokesList');
document.addEventListener('click', deleteJoke);
