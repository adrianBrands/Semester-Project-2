import { bidOnListing } from "../../api/listings/bid.js";
import { credits } from "../../profile/credits.js";

export function bidListener() {
  setTimeout(() => {
    const bidButton = document.querySelector(".bidButton");
    bidButton.addEventListener("click", (event) => {
      event.preventDefault();
      const bidInput = document.querySelector(".inputBid");

      const credit = {
        amount: Number(bidInput.value),
      };

      bidOnListing(credit);

      setTimeout(() => {
        credits()
      }, 2000);

      setTimeout(() => {
        window.location.reload(true);
      }, 3000);
    });
  }, 2000);
}


