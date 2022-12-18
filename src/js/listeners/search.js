/**
 *
 * @param {Array} listingsData array of listings
 * @param {HTMLDivElement} container div element
 * @param {HTMLDivElement} card div element
 */
export const searchFunction = (listingsData, container, card) => {
  const searchInput = document.querySelector(".search");

  searchInput.addEventListener("keyup", (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredPosts = listingsData.filter((listings) => {
      return (
        listings.seller.name.toLowerCase().startsWith(searchValue) ||
        listings.title.toLowerCase().startsWith(searchValue)
      );
    });

    const cards = filteredPosts.map(card);
    container.innerHTML = "";
    container.append(...cards);
  });
};
