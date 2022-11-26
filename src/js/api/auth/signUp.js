import { baseURL } from "../url.js"

const registerPath = "auth/register";
const method = "post";

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

  const result = await response.json();
  console.log(result);

}