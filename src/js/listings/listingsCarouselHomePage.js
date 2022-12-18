/**
 * creates a carousel of 10 images with each image representing one of the 10 latest listings
 * @param {Array} listingData array of listings
 * @param {HTMLDivElement} container div element
 */
export function carousel(listingData, container) {
  const tenLatestListings = listingData.slice(0, 10);

  const test = tenLatestListings.map((data) => {
    return data;
  });

  for (let i = 0; i < test.length; i++) {
    const carouselItem = document.createElement("div");

    if (i === 0) {
      carouselItem.classList.add("carousel-item", "active");
    } else if (i !== 0) {
      carouselItem.classList.add("carousel-item");
    }

    const carouselImage = document.createElement("img");

    if (!test[i].media.length) {
      carouselImage.setAttribute(
        "src",
        "images/pexels-dima-valkov-3266703.jpg"
      );
    } else if (test[i].media.length) {
      carouselImage.setAttribute("src", test[i].media[0]);
      carouselImage.setAttribute(
        "onerror",
        "this.onerror=null;this.src='/images/pexels-dima-valkov-3266703.jpg'"
      );
    }

    carouselImage.classList.add("d-block", "w-100");

    const carouselCaption = document.createElement("div");
    carouselCaption.classList.add("carousel-caption", "d-none", "d-md-block");

    const carouselCaptionTitle = document.createElement("h5");
    carouselCaptionTitle.className = "fs-1";
    carouselCaptionTitle.innerText = test[i].title;

    const carouselBids = document.createElement("p");
    carouselBids.className = "fs-5";

    if (test[i]._count.bids === 1) {
      carouselBids.innerText = `${test[i]._count.bids} bid`;
    } else if (test[i]._count.bids > 1) {
      carouselBids.innerText = `${test[i]._count.bids} bids`;
    } else if (test[i]._count.bids === 0) {
      carouselBids.innerText = `${test[i]._count.bids} bids`;
    }

    const carouselButton = document.createElement("a");
    carouselButton.classList.add(
      "mb-2",
      "btn",
      "btn-lg",
      "rounded-3",
      "btn-primary"
    );
    carouselButton.setAttribute("href", `listing.html?id=${test[i].id}`);
    carouselButton.innerText = "Make a bid";

    carouselCaption.append(carouselCaptionTitle, carouselBids, carouselButton);

    carouselItem.append(carouselImage, carouselCaption);

    container.append(carouselItem);
  }
}
