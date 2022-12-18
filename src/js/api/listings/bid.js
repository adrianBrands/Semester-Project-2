import { baseURL } from "../url.js";
import { fetchWithToken } from "../token/fetchWithToken.js";
import { listingIdAPI } from "./listing_id.js";
import { credits } from "../../profile/credits.js";

const method = "post";

/**
 * bids on a listing and gives alert messages if the response fails
 * @param {object} creditData 
 */
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
    const result = Promise.resolve(response.json());
    result.then((value) => {
      console.log(value);
      setTimeout(() => {
        credits();
      }, 2000);

      setTimeout(() => {
        window.location.reload(true);
      }, 2500);
    });
  } else {
    const result = Promise.resolve(response.json());
    result.then((value) => {
      document.querySelector(".inputBid").value = "";
      const warning = document.querySelector(".endDateWarning");
      warning.innerHTML = value.errors[0].message;
      warning.style.color = "red";
    });
  }
}
