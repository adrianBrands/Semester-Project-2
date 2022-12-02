import { baseURL } from "../url.js"
import * as storage from "../../localStorage/storage.js"

const signInPath = "auth/login";
const method = "post";
const errorMessage = document.querySelector(".error-message-signIn")

export async function signInUser(user){
  const signInUrl = baseURL + signInPath;
  const body = JSON.stringify(user);
  
  const response = await fetch(signInUrl ,{
    headers: {
      "content-Type": "application/json"
    },
    method,
    body
  });
  
  if (response.ok){
    const { accessToken, ...userData } = await response.json();
    storage.store("token", accessToken);
    storage.store("userStorage", userData);

    setTimeout(() => {
      window.location.reload(true);
    }, 1000);

  } else {
    errorMessage.innerHTML = "Wrong email or password, please try again";
    document.getElementById("signIn-form").reset();
  }
  
}