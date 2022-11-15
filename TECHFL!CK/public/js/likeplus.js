async function likeClick(id, likes) {
  const url = `api/jokes/${id}`;
  const body = {
    likes,
    id,
    action: 'likes'
  };
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
  const likesData = await response.json();
  return likesData;
}

async function dislikeClick(id, dislikes) {
  const url = `api/jokes/${id}`;
  const body = {
    dislikes,
    id,
    action: 'dislikes'
  };
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
  const dislikesData = await response.json();
  console.log(dislikesData)
  return dislikesData;
}

var count = 0;
var discount = 0;

const likeButton = () => {
count++;
};

const dislikeButton = () => {
  discount++;
};

document.addEventListener('click', async function (event) {
  const target = event.target;
  const attributeValue = target.getAttribute('class');

  if (attributeValue === 'like-button') {
    const jokeLikes = target.getAttribute('data-joke-like');
    const jokeId = target.getAttribute('data-joke-id');
    likeButton();
    const newLike= await likeClick(jokeId, jokeLikes);
    //window.location.replace('http://localhost:5544/');
    console.log(newLike);
  } else if (attributeValue === 'dislike-button') {
    const jokedisLikes = target.getAttribute('data-joke-dislikes');
    const jokeId = target.getAttribute('data-joke-id');
    dislikeButton();
    const newDislike = await dislikeClick(jokeId, jokedisLikes);
    console.log(newDislike);
    //window.location.replace('http://localhost:5544/');
  }
});
