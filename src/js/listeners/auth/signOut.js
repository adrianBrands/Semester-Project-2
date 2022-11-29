import { signOut } from "../../api/auth/signOut.js";

export const signOutButton = document.querySelector("#sign-out");

export function signOutUser () {
  signOutButton.addEventListener("click", (event) => {
    event.preventDefault();
    signOut();
    //location.replace("/index.html");
    window.location.replace("/index.html");
  });
}

