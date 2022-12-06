import { listingIdAPI } from "../api/listings/listing_Id";

function listing(listingData){
  const row = document.createElement("div");
  row.className = "row";
  
  const listingTitleImg = document.createElement("div");
  listingTitleImg.className = "col-lg-8";

  const listingImage = document.createElement("img");
  listingImage.setAttribute("src", listingData.media[0]);
  listingImage.setAttribute("alt", "listing image");
  
}