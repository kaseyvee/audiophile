export default function parseCart(cartItemsJSON: any) {
  let parsedCartItems = [];

  for (let cartItem in cartItemsJSON) {
    if (cartItem.includes("audiophile")) {
      parsedCartItems.push(JSON.parse(cartItemsJSON[cartItem]));
    }
  }

  return parsedCartItems;
}