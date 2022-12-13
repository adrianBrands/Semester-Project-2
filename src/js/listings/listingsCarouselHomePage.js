export function carousel (listingData, container){
  const tenFirstListings = listingData.slice(0, 10);

  const carouselItem = document.createElement("div");
  const carouselImage = document.createElement("img");
  carouselImage.setAttribute("src", element);
  carouselImage.classList.add("d-block", "w-100");
  
  carouselItem.append(carouselImage);
  //container.append(listingData);
  
}