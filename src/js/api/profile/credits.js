import { baseURL } from "../url.js";
import { fetchWithToken } from "../token/fetchWithToken.js";
import { userInfo } from "../../localStorage/storage.js";

const listingPath = `profiles/${userInfo().userName}/credits`;


export async function getCredits() {
  const listingsURL = `${baseURL}${listingPath}`;

  const response = await fetchWithToken(listingsURL);
  
  if(response.ok){
   const result = response.json();
   return result
    
  } else {
    console.log(response)
  }
}

getCredits()