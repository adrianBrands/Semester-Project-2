import { baseURL } from "../url.js";
import { fetchWithToken } from "../token/fetchWithToken.js";

const path = "listings";
const method = "post";

export async function postListing(listingData) {
  const createListingURL = baseURL + path;

  const response = await fetchWithToken(createListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  if (response.ok) {
    const result = response.json();
    console.log(result);
  } else {
    const result = response.json();
    console.log(result.error);
  }
}
