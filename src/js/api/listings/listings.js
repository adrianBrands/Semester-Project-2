import { baseURL } from "../url.js";
import { fetchWithToken } from "../token/fetchWithToken.js";

const listingPath = `listings/?_seller=true&_bids=true&_active=true`;

export async function listingsAPI() {
  const listingsURL = `${baseURL}${listingPath}`;

  const response = await fetchWithToken(listingsURL);
  
  if(response.ok){
   const result = response.json();
   return result;
    
  } else {
    console.log(response)
  }
}



