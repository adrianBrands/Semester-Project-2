import { listingsAPI } from "../api/listings/listings.js";
import { endDate } from "../listings/listingsEndDate.js";
import { userInfo } from "../localStorage/storage.js";


function displayUserListings(listingData) {
  const col = document.createElement("div");
  col.className = "col";

  const listingIDLink = document.createElement("a");
  listingIDLink.setAttribute("href", `listing.html?id=${listingData.id}`);
  listingIDLink.style.textDecoration = "none";
  col.append(listingIDLink);
  
  const listingsCard = document.createElement("div");
  listingsCard.classList.add("card", "h-100");
  listingIDLink.append(listingsCard);

  const listingImage = document.createElement("img");
  listingImage.setAttribute("src", listingData.media[0]);
  
  if(!listingData.media.length){
    listingImage.setAttribute("src", "images/pexels-dima-valkov-3266703.jpg");
  }

  listingImage.setAttribute("alt", "listing image");
  listingImage.setAttribute("onerror", "this.onerror=null;this.src='/images/pexels-andrew-neel-2123337.jpg'");
  listingImage.className = "card-img-top";
  listingImage.style.width = "100%";
  listingImage.style.height = "40vh";
  listingImage.style.objectFit = "cover"
  listingsCard.append(listingImage);
 
  
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
  cardFooterContent.innerText = "Ends at " +  endDate(listingData) ;
  cardFooter.append(cardFooterContent);

  

    //if(listingData.seller.name === userInfo().userName){
      return col
    //}
    
  

}

function allListings(listingData, parent){
  
    
    
    const listingElements = listingData.map(displayUserListings);
    parent.append(...listingElements);
    
    
  
}
    

  
  



async function testListings() {
  const listings = await listingsAPI();
  const container = document.querySelector(".userListings");
  //allListings(listings, container);
  const listingElements = listings.map(displayUserListings);
  

  
}

testListings();