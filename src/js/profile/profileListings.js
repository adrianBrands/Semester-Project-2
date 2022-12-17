import { listingsAPI } from "../api/listings/listings.js";
import { endDate } from "../listings/listingsEndDate.js";
import { userInfo } from "../localStorage/storage.js";


function displayUserListings(listingData, container) {
  function hasListings(listing) {
    return listing.seller.name === userInfo().userName;
  }
  
  const listing = listingData.map((media) => media);
  
  listing.forEach(function (element, index) {
    
    
    if(element.seller.name === userInfo().userName){
      const col = document.createElement("div");
      col.className = "col";

      const listingIDLink = document.createElement("a");
      listingIDLink.setAttribute("href", `listing.html?id=${element.id}`);
      listingIDLink.style.textDecoration = "none";
      col.append(listingIDLink);

      const listingsCard = document.createElement("div");
      listingsCard.classList.add("card", "h-100");
      listingIDLink.append(listingsCard);

      const listingImage = document.createElement("img");
      listingImage.setAttribute("src", element.media[0]);

      if(!element.media.length){
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
      cardBodyTitle.innerText = element.title;
    
      const cardBodyText = document.createElement("p");
      cardBodyText.className = "card-text";
      cardBodyText.innerText = element.description;
      cardBody.append(cardBodyTitle, cardBodyText);
    
      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.classList.add("d-flex", "flex-wrap", "justify-content-between");
      cardBody.append(cardBodyDiv);
    
      const cardBodyDivContent = document.createElement("p");
      cardBodyDivContent.className = "fw-bold";
      cardBodyDivContent.innerText = `bids: ${element._count.bids}`;
      cardBodyDiv.append(cardBodyDivContent);
    
    
      const cardFooter = document.createElement("div");
      cardFooter.className = "card-footer";
      listingsCard.appendChild(cardFooter);
    


    
      const cardFooterContent = document.createElement("small");
      cardFooterContent.className = "text-muted"; 
      cardFooterContent.innerText = "Ends at " +  endDate(element) ;
      cardFooter.append(cardFooterContent);
      container.append(col)
    } else if(!listingData.find(hasListings)){
      const alert = document.querySelector(".alert-warning")
      alert.style.display = "block";
    }
  })
}


    

  
  



export async function testListings() {
  const listings = await listingsAPI();
  const container = document.querySelector(".userListings");
  displayUserListings(listings, container);
  

  
}

