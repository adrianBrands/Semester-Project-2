import { listingsAPI } from "../api/listings/listings.js";


function listings(listingData) {
  const col = document.createElement("div");
  col.className = "col";
  
  const listingsCard = document.createElement("div");
  listingsCard.classList.add("card", "h-100");
  col.appendChild(listingsCard);

  const listingImage = document.createElement("img");
  listingImage.setAttribute("src", listingData.media);
  listingImage.setAttribute("alt", "listing image");
  listingImage.className = "card-img-top";

  if(listingData.media.length !== 0){
    console.log(listingData.media);
    listingsCard.append(listingImage);
  }
  //listingsCard.append(listingImage);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  listingsCard.append(cardBody);

  const cardBodyTitle = document.createElement("h5");
  cardBodyTitle.className = "card-title";
  cardBodyTitle.innerText = listingData.title;

  const cardBodyText = document.createElement("p");
  cardBodyText.className = "card-text";
  cardBodyText.innerText = listingData.description;
  cardBody.append(cardBodyTitle, cardBodyText);

  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";
  listingsCard.appendChild(cardFooter);

  const cardFooterContent = document.createElement("small");
  cardFooterContent.className = "text-muted"; 
  cardFooterContent.innerText = listingData.endsAt;
  cardFooter.append(cardFooterContent)

  
    return col
  

}

function allListings(listingData, parent){
  const listingElements = listingData.map(listings);
  parent.append(...listingElements);

}

async function testListings() {
  const listings = await listingsAPI();
  const container = document.querySelector(".listings");
  allListings(listings, container);
  console.log(listings)
}

testListings()

