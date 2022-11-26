import { baseURL } from "../url.js"

const loginPath = "auth/login";
const method = "post";

export async function loginUser(user){
  const loginUrl = baseURL + loginPath;
  const body = JSON.stringify(user);
  
  const response = await fetch(loginUrl ,{
    headers: {
      "content-Type": "application/json"
    },
    method,
    body
  })

  const result = await response.json();
  console.log(result);

}