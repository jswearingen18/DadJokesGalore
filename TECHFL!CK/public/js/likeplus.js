var count = 0;

const likeButton = () => {
  count++;
  console.log(count);
};

document.querySelectors('like-button').addEventListener('click', likeButton);
