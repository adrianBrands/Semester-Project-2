import { baseURL } from "../url.js"

const registerPath = "auth/register";
const method = "post";
const errorMessage = document.querySelector(".error-message-signUp");

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
    
    
  } else {
    errorMessage.innerHTML = "Ups.. Profile already exists, please try again";
    document.getElementById("signUp-form").reset();
  }
  

}