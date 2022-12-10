import { listingIdAPI } from "../api/listings/listing_id.js";
import { userInfo } from "../localStorage/storage.js"
//import { countDown } from "./listingsEndDate.js";

function listingImage(listingData, container){
  const listing = listingData.media.map((media) => media);
  
  listing.forEach(function(element, index) {
    const carouselItem = document.createElement("div");
    
    if(index === 0){
      carouselItem.classList.add("carousel-item", "active")
    } else if (index !== 0 ){
      carouselItem.classList.add("carousel-item")
    }
    
    const carouselImage = document.createElement("img");
    carouselImage.setAttribute("src", element);
    carouselImage.classList.add("d-block", "w-100");
    
    carouselItem.append(carouselImage);
    container.append(carouselItem)
  });
}

function listingTitle(listingData, container){
  const title = document.createElement("h1");
  title.innerText = listingData.title;
  container.prepend(title);
 

}

function listingContent(listingData, container){
  const listingOwnerContent = document.createElement("div");
  listingOwnerContent.classList.add("d-flex", "justify-content-between", "listingOwner");

  const listingOwnerName = document.createElement("h2");
  listingOwnerName.innerText = listingData.seller.name;

  const listingOwnerImage = document.createElement("img");
  listingOwnerImage.className = "rounded-circle";

  if(!listingData.seller.avatar.length){
    listingOwnerImage.setAttribute("src", "/images/man-g39c34cdac_640.jpg");
  } else if(listingData.seller.avatar.length) {
    listingOwnerImage.setAttribute("src", listingData.seller.avatar);
  }
  
  listingOwnerImage.setAttribute("width", "50");
  listingOwnerImage.setAttribute("height", "50");
  listingOwnerImage.setAttribute("alt", "user avatar image");

  listingOwnerContent.append(listingOwnerName, listingOwnerImage);
  

  const listingContent = document.createElement("div");
  listingContent.className = "mt-3";

  const listingDescription = document.createElement("p");
  listingDescription.innerText = listingData.description;

  const bids = listingData.bids;
  function getHighestBid(bid){
    return bid.amount - 1;
  }
  const highestBid = bids.findLast(getHighestBid);

  
  const listingBid = document.createElement("p");
  listingBid.classList.add("mb-1", "mt-5");

  if(highestBid){
    listingBid.innerText = `Current bid: $${highestBid.amount}`
  }
  

  const totalBids = document.createElement("p");
  totalBids.className = "border-bottom";

  if(listingData._count.bids === 1){
    totalBids.innerText = `${listingData._count.bids} bid`;
  } else if(listingData._count.bids > 1){
    totalBids.innerText = `${listingData._count.bids} bids`;
  } else if(listingData._count.bids === 0){
    totalBids.innerText = `${listingData._count.bids} bids`;
  }
  

  const bidForm = document.createElement("form");
  bidForm.className = "mt-5";
  
  const label = document.createElement("label");
  label.className = "form-label";
  label.innerText = `Your Current Credit: $${userInfo().userCredits}`;
  
  const inputGroup = document.createElement("div");
  inputGroup.className = "input-group";
  const inputGroupText = document.createElement("span");
  inputGroupText.className = "input-group-text";
  inputGroupText.innerText = "$";
  
  const input = document.createElement("input");
  input.className = "form-control";
  input.setAttribute("type", "text");
  const button = document.createElement("button");
  button.classList.add("btn", "btn-outline-primary");
  button.setAttribute("type", "button");
  button.id = "button-addon2";
  button.innerText = "button";

  inputGroup.append(inputGroupText, input, button);

  bidForm.append(label, inputGroup)

  listingContent.append(listingDescription, listingBid, totalBids, bidForm)

  container.append(listingOwnerContent, listingContent);



}


async function testListing() {
  const listing = await listingIdAPI();
  console.log(listing);
  
  
  
  const container = document.querySelector(".carousel-inner");
  const titleContainer = document.querySelector(".col-lg-8");
  const contentContainer = document.querySelector(".listingOwner");
  listingImage(listing, container);
  listingTitle(listing, titleContainer);
  listingContent(listing, contentContainer);

  const countDown = setInterval(function() {
    const enDate = listing.endsAt;
    console.log(enDate)
  
  }, 1000);
  
  
}

testListing()


