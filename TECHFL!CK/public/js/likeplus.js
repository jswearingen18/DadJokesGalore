const likeButton = document.getElementsByClassName("like");
const likeCount = document.getElementById("likes");

var count = 0;

likeButton.addEventListener("click", () => {
    count++;
    likeCount.innerHTML = count;
});
