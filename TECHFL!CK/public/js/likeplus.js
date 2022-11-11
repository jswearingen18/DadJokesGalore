const likeButton = document.getElementsByClassName("like");
const likeCount = document.getElementById("likes");
debugger
var count = 0;

likeButton.addEventListener("click", () => {
    count++;
    likeCount.innerHTML = count;
    console.log("working");
});
