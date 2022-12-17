import { baseURL } from "../url.js";
import { fetchWithToken } from "../token/fetchWithToken.js";
import { listingIdAPI } from "./listing_id.js";




const method = "post";

export async function bidOnListing(creditData) {
  const listing = await listingIdAPI();
  const id = listing.id;
  const path = `listings/${id}/bids`;
  const bidURL = baseURL + path;

  const response = await fetchWithToken(bidURL, {
    method,
    body: JSON.stringify(creditData),
  });

  if (response.ok) {
    const result = response.json();
    return result;
  } else {
    const result = response.json();
    console.log(result.error);
  }
}
