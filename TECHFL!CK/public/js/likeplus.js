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

async function dislikeClick(id, dislikes) {
  const url = `api/jokes/${id}`;
  const body = {
    dislikes,
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

const dislikeButton = () => {
  count++;
};

document.addEventListener('click', async function (event) {
  const target = event.target;
  const attributeValue = target.getAttribute('class');

  if (attributeValue === 'like-button') {
    const jokeLikes = target.getAttribute('data-joke-like');
    const jokeId = target.getAttribute('data-joke-id');
    likeButton();
    const newLike= await likeClick(jokeId, jokeLikes);
    window.location.replace('http://localhost:5544/');
    console.log(newLike);
  } else if (attributeValue === 'dislike-button') {
    const jokedisLikes = target.getAttribute('data-joke-dislike');
    const jokeId = target.getAttribute('data-joke-id');
    dislikeButton();
    const newDislike = await dislikeClick(jokeId, jokedisLikes);
    window.location.replace('http://localhost:5544/');
  }
});