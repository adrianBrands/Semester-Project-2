
/**
 * creates end date 
 * @param {Object} listingData object of a single listing by id
 * @param {Array} listingData array of listings 
 * @returns the end date of a listing in a chosen date format
 */
export function endDate(listingData) {
  const date = new Date (listingData.endsAt);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString("en-GB", options)

}



