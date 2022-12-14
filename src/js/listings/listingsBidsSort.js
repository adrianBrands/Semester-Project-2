export function sortFromHighestBid(listingData){
   return listingData.bids.sort((a, b) => b.amount - a.amount);
   
}