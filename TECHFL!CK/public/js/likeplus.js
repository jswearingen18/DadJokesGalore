async function likeClick(id, likes) {
  const url = `api/jokes/${id}`;
  const body = {
    likes,
    id,
  };
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
  const json = await response.json();
  return json;
}

var count = 0;

const likeButton = () => {
  count++;
};

document.addEventListener('click', async function (event) {
  const target = event.target;
  const attributeValue = target.getAttribute('class');

  if (attributeValue === 'like-button') {
    const jokeLikes = target.getAttribute('data-joke-like');
    const jokeId = target.getAttribute('data-joke-id');
    likeButton();
    const newJoke = await likeClick(jokeId, jokeLikes);
    window.location.replace('http://localhost:5544/');
    console.log(newJoke);
  }
});