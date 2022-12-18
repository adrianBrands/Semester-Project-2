import { baseURL } from "../url.js"
import { signInUser } from "./signIn.js";

const registerPath = "auth/register";
const method = "post";
const errorMessage = document.querySelector(".error-message-signUp");

/**
 * registers a new user
 * @param {object} user 
 * 
 */
export async function registerUser(user){
  const registerUrl = baseURL + registerPath;
  const body = JSON.stringify(user);
  
  const response = await fetch(registerUrl ,{
    headers: {
      "content-Type": "application/json"
    },
    method,
    body
  })

  if(response.ok){
    
    await response.json();
     user = {
      email: user.email,
      password: user.password
    }

    setTimeout(() => {
      signInUser(user);
    }, 2000)
    
    
  } else {
    errorMessage.innerHTML = "Ups.. Profile already exists, please try again";
    document.getElementById("signUp-form").reset();
  }
  

}