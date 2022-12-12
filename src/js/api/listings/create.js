import { baseURL } from "../url.js";
import { fetchWithToken } from "../token/fetchWithToken.js";

const path = "listings";
const method = "post";

async function postListing(listingData){
  const createListingURL = baseURL + path;

  const response = await fetchWithToken(createListingURL,{
    method,
    body: JSON.stringify(listingData)
  });

  if(response.ok){
    const result = response.json()
    console.log(result);
  } else {
    const result = response.json()
    console.log(result.error);
  }

}

function createFormListener() {
  const form = document.querySelector("#create-listing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);

      const title = formData.get("title");
      const description = formData.get("description");
      const tags = formData.get("tags").split(", ");
      const media = formData.get("media").split(", ");
      const endsAt = formData.get("endsAt");

      const listing = {title, description, tags, media, endsAt};
      console.log(listing)
      /*if (post.media === "") {
        delete post.media;
      }*/

      postListing(listing);
    });
  }
}
createFormListener();