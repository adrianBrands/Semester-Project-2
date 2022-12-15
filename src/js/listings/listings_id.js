import { listingIdAPI } from "../api/listings/listing_id.js";
import { userInfo } from "../localStorage/storage.js";
import { endDate } from "./listingsEndDate.js";
import { sortFromHighestBid } from "./listingsBidsSort.js";

// CHECK IF IMAGE EXISTS
function checkIfImageExists(url, callback) {
  const img = new Image();
  img.src = url;
  
  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };
    
    img.onerror = () => {
      callback(false);
    };
  }
}





function listingImage(listingData, container) {
  const listing = listingData.media.map((media) => media);
 

  checkIfImageExists(listing[0], (exists) => {
  if (exists) {
    console.log('Image exists. ')
    listing.forEach(function (element, index) {
      const carouselItem = document.createElement("div");
      
      if (index === 0) {
        carouselItem.classList.add("carousel-item", "active");
      } else if (index !== 0) {
        carouselItem.classList.add("carousel-item");
      }
      const carouselImage = document.createElement("img");
      carouselImage.setAttribute("src", element);
      carouselImage.classList.add("d-block", "w-100");
      
      carouselItem.append(carouselImage);
      container.append(carouselItem);
    });
  } else {
    console.error('Image does not exists.')
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item", "active");
    
    const carouselImage = document.createElement("img");
    carouselImage.classList.add("d-block", "w-100");
    carouselImage.setAttribute(
      "src",
      "images/pexels-dima-valkov-3266703.jpg"
    );
    
    carouselItem.append(carouselImage);
    container.append(carouselItem);
  }
});
  
 
}

function listingTitle(listingData, container) {
  const title = document.createElement("h1");
  title.innerText = listingData.title;
  container.prepend(title);
}

function listingContent(listingData, container) {
  const listingOwnerContent = document.createElement("div");
  listingOwnerContent.classList.add(
    "d-flex",
    "justify-content-between",
    "listingOwner"
  );

  const listingOwnerName = document.createElement("h2");
  listingOwnerName.innerText = listingData.seller.name;

  const listingOwnerImage = document.createElement("img");
  listingOwnerImage.className = "rounded-circle";

  if (!listingData.seller.avatar) {
    listingOwnerImage.setAttribute("src", "/images/man-g39c34cdac_640.jpg");
  } else if (listingData.seller.avatar.length) {
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

  const listingBid = document.createElement("p");
  listingBid.classList.add("mb-1", "mt-5");

  if (listingData.bids.length) {
    listingBid.innerText = `Current highest bid: $${
      sortFromHighestBid(listingData)[0].amount
    }`;
  } else if (!listingData.bids.length) {
    listingBid.innerText = `No bids on this listing`;
  }

  const totalBids = document.createElement("p");
  totalBids.className = "border-bottom";

  if (listingData._count.bids === 1) {
    totalBids.innerText = `${listingData._count.bids} bid`;
  } else if (listingData._count.bids > 1) {
    totalBids.innerText = `${listingData._count.bids} bids`;
  } else if (listingData._count.bids === 0) {
    totalBids.innerText = `${listingData._count.bids} bids`;
  }

  const bidForm = document.createElement("form");
  bidForm.className = "mt-5";

  const label = document.createElement("label");
  label.className = "form-label";
  label.innerText = `Your Credits: $${userInfo().userCredits}`;

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

  const date = document.createElement("p");
  date.innerText = `Ends at ${endDate(listingData)}`;
  date.classList.add("mt-2", "border-bottom");

  inputGroup.append(inputGroupText, input, button);

  bidForm.append(label, inputGroup);

  listingContent.append(
    listingDescription,
    listingBid,
    totalBids,
    bidForm,
    date
  );

  container.append(listingOwnerContent, listingContent);
}

async function displayListing() {
  const listing = await listingIdAPI();
  const container = document.querySelector(".carousel-inner");
  const titleContainer = document.querySelector(".col-lg-8");
  const contentContainer = document.querySelector(".listingOwner");
  listingImage(listing, container);
  listingTitle(listing, titleContainer);
  listingContent(listing, contentContainer);
}

displayListing();
