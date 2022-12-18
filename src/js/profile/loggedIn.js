const profileDropDown = document.querySelector("#profile-dropDown");
const signInButton = document.getElementById("signInButton");
const signUpButton = document.getElementById("signUpButton");
const path = location.pathname;

/**
 * checks if the user is logged
 */
export function isLoggedIn() {
  const key = localStorage.getItem("token");
  if (!key) {
    profileDropDown.style.display = "none";
    //window.location.replace("/index.html");
  }
  if (path !== "/index.html" && !key && path !== "/listing.html") {
    window.location.replace("/index.html");
  }
  if (key) {
    signInButton.style.display = "none";
    signUpButton.style.display = "none";
    profileDropDown.style.display = "block";
  }
  if (key && path === "/listing.html") {
    const alert = document.querySelector(".alert");
    alert.style.display = "none";
  }
}
