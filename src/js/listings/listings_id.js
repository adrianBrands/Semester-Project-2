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


async function testListing() {
  const listing = await listingIdAPI();
  const container = document.querySelector(".carousel-inner");
  listingImage(listing, container)
}

testListing()


