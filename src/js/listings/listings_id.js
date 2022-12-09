import { listingIdAPI } from "../api/listings/listing_id.js";


function listingImage(listingData){
    
  
  
  
  
    
    

    
    
  
  
  

 
  
}


async function testListing() {
  const listings = await listingIdAPI();
  const container = document.querySelector(".carousel-inner");
  //container.append(listingImage(listings))
  //listingId(listings, container)
  //listingId(listings)
  
 
  
    
  
    const test = listings.media.map((media) => media);
    
    
  
  
    test.forEach(function(element, index) {
      
      
    const carouselItem = document.createElement("div");
    if(index === 0){
      carouselItem.classList.add("carousel-item", "active")
    } else if (index !== 0 ){
      carouselItem.classList.add("carousel-item")
    }
    const carouselImage = document.createElement("img");
    carouselImage.setAttribute("src", element);
    //console.log(carouselImage)
    carouselImage.classList.add("d-block", "w-100");
    carouselItem.append(carouselImage);
    container.append(carouselItem)
    /*container.innerHTML += `<div class="carousel-item">
    <img src=${hello} class="d-block w-100" alt="...">
  </div>`*/
      
    });
    

    

    
  
  
}

testListing()


