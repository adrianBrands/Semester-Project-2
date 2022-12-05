import { listingsAPI } from "../api/listings/listings.js";

function testest(listingData) {
  const date = new Date (listingData.endsAt);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString("en-GB", options)

}

function listings(listingData) {
  const col = document.createElement("div");
  col.className = "col";

  const listingIDLink = document.createElement("a");
  listingIDLink.setAttribute("href", `listing.html?=${listingData.id}`);
  listingIDLink.style.textDecoration = "none";
  col.append(listingIDLink);
  
  const listingsCard = document.createElement("div");
  listingsCard.classList.add("card", "h-100");
  listingIDLink.append(listingsCard);

  const listingImage = document.createElement("img");
  listingImage.setAttribute("src", listingData.media[0]);
  listingImage.setAttribute("alt", "listing image");
  listingImage.className = "card-img-top";
  listingImage.style.width = "100%";
  listingImage.style.height = "40vh";
  listingImage.style.objectFit = "cover"
  
  console.log(listingData);
  if(listingData.media.length !== 0){
    //console.log(listingData.media);
    listingsCard.append(listingImage);
  }
  //listingsCard.append(listingImage);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  //cardBody.style.backgroundColor = "#911e1e";
  cardBody.style.color = "#000"
  listingsCard.append(cardBody);

  const cardBodyTitle = document.createElement("h5");
  cardBodyTitle.className = "card-title";
  cardBodyTitle.innerText = listingData.title;

  const cardBodyText = document.createElement("p");
  cardBodyText.className = "card-text";
  cardBodyText.innerText = listingData.description;
  cardBody.append(cardBodyTitle, cardBodyText);

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("d-flex", "flex-wrap", "justify-content-between");
  cardBody.append(cardBodyDiv);

  const cardBodyDivContent = document.createElement("p");
  cardBodyDivContent.className = "fw-bold";
  cardBodyDivContent.innerText = `bids: ${listingData._count.bids}`;
  cardBodyDiv.append(cardBodyDivContent);


  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";
  listingsCard.appendChild(cardFooter);

  
  

  const cardFooterContent = document.createElement("small");
  cardFooterContent.className = "text-muted"; 
  cardFooterContent.innerText = "Ends at " +  testest(listingData) ;
  cardFooter.append(cardFooterContent);

  

  
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

