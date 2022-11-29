const profileDropDown = document.querySelector("#profile-dropDown");
const signInButton = document.getElementById("signInButton");
const signUpButton = document.getElementById("signUpButton");
const path = location.pathname;

export function isLoggedIn() {
  const key = localStorage.getItem("token");
  if (!key) {
    profileDropDown.style.display = "none";
    //window.location.replace("/index.html");
    
  }
  if (path !== "/index.html" && !key) {
    window.location.replace("/index.html");
  }
  if (key) {
    signInButton.style.display = "none";
    signUpButton.style.display = "none";
    profileDropDown.style.display = "block";
  } else {
    return false;
  }
}
