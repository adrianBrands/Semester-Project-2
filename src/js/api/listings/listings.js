import { baseURL } from "../url.js";
import { fetchWithToken } from "../token/fetchWithToken.js";

const listingPath = `listings`;
const method = "get";

export async function listings() {
  const listingsURL = `${baseURL}${listingPath}`;

  const response = await fetchWithToken(listingsURL, { method });

if(response.ok){
    const test = Promise.resolve(response.json());
    test.then(promiseResult => {
      return console.log(promiseResult[6].media[0]); 
    }).catch(err => {
      console.log(err);
    });
    
  } else {
    console.log(response)
  }
}


listings()
