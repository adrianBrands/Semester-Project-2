import { listingIdAPI } from "../api/listings/listing_id.js";


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
  //const listing = listingData.map((title) => title);
  //listing.forEach(function(element) {
    const title = document.createElement("h1");
    title.innerText = listingData.title;
    container.prepend(title);
 // })

}

function listingContent(listingData, container){
  const listingOwnerContent = document.createElement("div");
  listingOwnerContent.classList.add("d-flex", "justify-content-between", "listingOwner");

  const listingOwnerName = document.createElement("h2");
  listingOwnerName.innerText = listingData.seller.name;

  const listingOwnerImage = document.createElement("img");
  listingOwnerImage.className = "rounded-circle";
  listingOwnerImage.setAttribute("src", listingData.seller.avatar);
  listingOwnerImage.setAttribute("width", "45");
  listingOwnerImage.setAttribute("height", "45");
  listingOwnerImage.setAttribute("alt", "user avatar image");

  listingOwnerContent.append(listingOwnerName, listingOwnerImage);

  //const after = document.querySelector(".col-lg-8");

  //listingOwnerContent.after(after)
  
  container.prepend(listingOwnerContent)


}


async function testListing() {
  const listing = await listingIdAPI();
  console.log(listing)
  const container = document.querySelector(".carousel-inner");
  const titleContainer = document.querySelector(".col-lg-8");
  const contentContainer = document.querySelector(".listingOwner");
  listingImage(listing, container);
  listingTitle(listing, titleContainer);
  listingContent(listing, contentContainer);
}

testListing()


