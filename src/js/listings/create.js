import { postListing } from "../api/listings/create.js";

/**
 * Creates a listing with a submit event targeting the create listing form 
 */
export function createFormListener() {
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

      const listing = { title, description, tags, media, endsAt };
      console.log(listing);

      postListing(listing);

      
    });
  }
}
