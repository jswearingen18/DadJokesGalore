async function dislikesClick(id, dislikes) {
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
  
  const dislikeButton = () => {
    count++;
  };
  
  document.addEventListener('click', async function (event) {
    const target = event.target;
    const attributeValue = target.getAttribute('class');
  
    if (attributeValue === 'dislike-button') {
      const jokedislikes = target.getAttribute('data-joke-dislikes');
      const jokeId = target.getAttribute('data-joke-id');
      likeButton();
      const newJoke = await likeClick(jokeId, jokedislikes);
      window.location.replace('http://localhost:5544/');
      console.log(newJoke);
    }
  });
  