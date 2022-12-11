export function endDate(listingData) {
  const date = new Date (listingData.endsAt);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString("en-GB", options)

}



