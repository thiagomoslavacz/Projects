// Var's Like
const likeIcon = document.getElementById("like");
const likedIcon = document.getElementById("liked");

// Var's Favorite
const favoriteIcon = document.querySelectorAll(".favorite");
const favoritedIcon = document.querySelectorAll(".favorited");

// Var's Menu
const servings = document.getElementById("servings-op");
const steak = document.getElementById("steaks-op");
const chickens = document.getElementById("chickens-op");
const doughs = document.getElementById("doughs-op");
const salads = document.getElementById("salads-op");

// Function's Like

function liked() {
  likeIcon.style.display = "none";
  likedIcon.style.display = "block";
  likedIcon.style.color = "yellow";
}

function noLiked() {
  likedIcon.style.display = "none";
  likeIcon.style.display = "block";
}

likeIcon.addEventListener("click", liked);
likedIcon.addEventListener("click", noLiked);

// Function's Favorite

document.querySelectorAll(".favorite").forEach((icon) => {
  icon.addEventListener("click", function () {
    this.style.display = "none";
    this.nextElementSibling.style.display = "block";
  });
});

document.querySelectorAll(".favorited").forEach((icon) => {
  icon.addEventListener("click", function () {
    this.style.display = "none";
    this.previousElementSibling.style.display = "block";
  });
});

// Function's Menu
