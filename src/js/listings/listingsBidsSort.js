/**
 * sorts the bids on a listing from highest to lowest
 * @param {Object} listingData object of a single listing by id
 * @returns {number}
 */
export function sortFromHighestBid(listingData) {
  return listingData.bids.sort((a, b) => b.amount - a.amount);
}
