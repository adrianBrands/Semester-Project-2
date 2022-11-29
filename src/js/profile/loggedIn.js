const profileDropDown = document.querySelector("#profile-dropDown");
const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById("signUp")

export function isLoggedIn () {
  const key = localStorage.getItem("token")
  if (!key) {
    profileDropDown.style.display = "none";
    
  } if (key) {
    signInButton.style.display = "none";
    signUpButton.style.display = "none";
  } else {
    return false;
  }

}