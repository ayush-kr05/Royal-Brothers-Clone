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





// Code For Login Signup
function login(){
  window.open("../RoyalBrothersa-Login/signIn.html", "_self");
}
function signup(){
  window.open("../RoyalBrothersa-Login/signUp.html", "_self");
}

let log_btn_section=document.getElementById("loginSignup");
  if(localStorage.getItem("login")=="true"){
    log_btn_section.style.display="none";
  }else{
    log_btn_section.style.display="block";
  }
