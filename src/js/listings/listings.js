




function listings() {
  const listingsDiv = document.querySelector(".listings");

  const col = document.createElement("div");
  col.className = "col";
  listingsDiv.appendChild(col);


  const listingsCard = document.createElement("div");
  listingsCard.classList.add("card", "h-100");
  col.append(listingsCard);

  const listingImage = document.createElement("img");
  listingImage.setAttribute("src", "");
  listingImage.setAttribute("alt", "....");
  listingImage.className = "card-img-top";

  listingsCard.appendChild(listingImage)

}

listings();