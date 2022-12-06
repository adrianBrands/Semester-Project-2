import { baseURL } from "../url.js";
import { fetchWithToken } from "../token/fetchWithToken.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const listingPath = "listings/"


export async function listingIdAPI() {
  const listingURLId = `${baseURL}${listingPath}${id}`;
  console.log(listingURLId)

  const response = await fetchWithToken(listingURLId);
  
  if(response.ok){
   const result = response.json();
   return result
    
  } else {
    console.log(response)
  }
}

