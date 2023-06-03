export default function getSubTotal(parsedCart: any) {
  if (parsedCart.length === 0) {
    return 0;
  }
  
  return parsedCart.reduce((acc: number, item: any) => {
    return acc + item.price * item.amount;
  }, 0);
}