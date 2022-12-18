export const searchFunction = (listingsData, container, card) => {
  const searchInput = document.querySelector(".search");

  searchInput.addEventListener("keyup", (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredPosts = listingsData.filter((listings) => {
      return (
        listings.seller.name.toLowerCase().startsWith(searchValue) ||
        //listings.description.toLowerCase().startsWith(searchValue) ||
        listings.title.toLowerCase().startsWith(searchValue)
      );
    });
    
    const cards = filteredPosts.map(card);
    container.innerHTML = "";
    container.append(...cards);
  });
};