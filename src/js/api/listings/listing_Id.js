import { baseURL } from "../url.js";
import { fetchWithToken } from "../token/fetchWithToken.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const listingPath = `listings/${id}/?_seller=true&_bids=true&_active=true`;

/**
 * Gets a single listing by id
 * @returns {object} of a single listing by id
 */
export async function listingIdAPI() {
  const listingURLId = `${baseURL}${listingPath}`;

  const response = await fetchWithToken(listingURLId);

  if (response.ok) {
    const result = response.json();
    return result;
  } else {
    console.log(response);
  }
}
