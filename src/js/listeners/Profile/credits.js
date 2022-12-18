import { bidOnListing } from "../../api/listings/bid.js";

/**
 * bids on a listing
 */
export function bidListener() {
  setTimeout(() => {
    const bidButton = document.querySelector(".bidButton");
    bidButton.addEventListener("click", (event) => {
      event.preventDefault();
      const bidInput = document.querySelector(".inputBid");

      const credit = {
        amount: Number(bidInput.value),
      };
      const key = localStorage.getItem("token");
      
      if (key) {
        bidOnListing(credit);
      } else {
        document.querySelector(".inputBid").value = "";
        const warning = document.querySelector(".endDateWarning");
        warning.innerHTML = `You need to be logged in to bid on this item`;
        warning.style.color = "red";
      }
    });
  }, 2000);
}
