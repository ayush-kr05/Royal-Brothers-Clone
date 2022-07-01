const showMenuBtn = document.getElementById("showMenuBtn");
const drawer = document.getElementById("sliding-menu");
const overlay = document.getElementById("overlay");

showMenuBtn.addEventListener("click", function () {
  drawer.style.left = 0;
  overlay.style.display = "block";
  drawer.style.display = "block";
});

overlay.addEventListener("click", function () {
  drawer.style.left = "-20rem";
  overlay.style.display = "none";
});