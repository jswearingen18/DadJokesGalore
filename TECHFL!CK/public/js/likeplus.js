
const likeButton = document.getElementsByClassName("like");
const likeCount = document.getElementById("likes");
debugger
var count = 0;

likeButton.addEventListener("click", () => {
    count++;
    likeCount.innerHTML = count;
    console.log("working");
});

document.querySelector('.like-button').addEventListener('click', likeButton);

var count = 0;

const likeButton = () => {
  console.log('Hello');
};

