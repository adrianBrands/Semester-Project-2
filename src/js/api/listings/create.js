import { baseURL } from "../url.js";
import { fetchWithToken } from "../token/fetchWithToken.js";

const path = "listings";
const method = "post";

/**
 * creates new listing and reloads the page if the response is ok
 * @param {object} listingData 
 */
export async function postListing(listingData) {
  const createListingURL = baseURL + path;

  const response = await fetchWithToken(createListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  if (response.ok) {
    const result = response.json();
    console.log(result);
    setTimeout(() => {
      window.location.reload(true);
    }, 1500);
  } else {
    const result = response.json();
    console.log(result.error);//make a warning message here
  }
}
