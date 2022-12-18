/**
 * checks if the image is a url string
 * @param {URL} url of an image
 * @param {Function} callback function true or false
 */
export function checkIfImageExists(url, callback) {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };

    img.onerror = () => {
      callback(false);
    };
  }
}
