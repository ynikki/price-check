
/**
 * Sends a request to the server to get Uber products based on passed in
 * latitude and longitude positions.
 * @param  {number} lat The location's latitude value
 * @param  {number} lng The location's longitude value
 * @return {[Products]]} The Uber products available at the queried location
 */
function getProductsByLocation (lat, lng) {
  var location = {
    latitude: lat,
    longitude: lng
  };
  var products = getProducts(location);
  return products;
}

var productPrices = getProductsByLocation(21.3069,-157.8583);
console.log(productPrices);
console.log(productPrices.responseJSON);

var content = productPrices.responseJSON.products;
for(var i=0; i<content.length; i++){
  console.log(content[i]);
  console.log(content[i].display_name);
  console.log(content[i].description);
  console.log(content[i].capacity);

  var headerElement=document.createElement('h2');
  headerElement.className='headerTwo';
  document.body.appendChild(headerElement);

  var displayNameElement=document.createElement('div');
  displayNameElement.className='displayName';
  displayNameElement.innerHTML=content[i].display_name;
  headerElement.appendChild(displayNameElement);

  var paragraphElement=document.createElement('p');
  paragraphElement.className='paragraph';
  paragraphElement.innerHTML=content[i].description;
  document.body.appendChild(paragraphElement);
  headerElement.appendChild(paragraphElement);

  var capacityElement=document.createElement('div');
  capacityElement.className='image';
  capacityElement.innerHTML=content[i].capacity;
  headerElement.appendChild(capacityElement);

}

/**
 * Gets the products from a certain location.
 * @param  {object} The location object to query
 * @return {[Product]]} An array of products
 */
function getProducts (location) {
  return $.ajax({
    type: "GET",
    data: location,
    url: '/prices',
    async: false
  });
}

// Stretch Goal
/**
 * Returns the device's current location.
 * @return {object} The device's current location
 */
function requestProductsByCurrentPosition () {
  /* The `getCurrentPosition` takes a function as it's first argument.
   * This function is referred to as a "callback" function, because it is
   * called when the result (current location) is found.
   */
  navigator.geolocation.getCurrentPosition(/* your function name goes here */);
}
