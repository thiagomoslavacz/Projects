// Var's Like
const likeIcon = document.getElementById("like");
const likedIcon = document.getElementById("liked");

// Var's Favorite
const favoriteIcon = document.querySelectorAll(".favorite");
const favoritedIcon = document.querySelectorAll(".favorited");

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

function showMenu(category, element) {
  // Oculta todas as seções de menu
  var menuSections = document.querySelectorAll(".container");
  menuSections.forEach((section) => {
    section.style.display = "none";
  });

  // Remove a classe "selected" de todos os elementos de opção
  var options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.classList.remove("selected");
  });

  // Exibe a seção do menu correspondente à categoria clicada
  var selectedSection = document.getElementById(category);
  selectedSection.style.display = "grid";

  // Adiciona a classe "selected" ao elemento de opção clicado
  element.classList.add("selected");
}
