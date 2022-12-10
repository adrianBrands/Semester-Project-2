export function date(listingData) {
  const date = new Date (listingData.endsAt);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString("en-GB", options)

}


const countDown = setInterval(function(listingData) {
  const enDate = listingData.endsAt.getTime();
  console.log(enDate)

}, 1000000);

