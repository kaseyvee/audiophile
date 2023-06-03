export default function getSubTotal(parsedCart: any) {
  return parsedCart.reduce((acc: number, item: any) => {
    return acc + item.price * item.amount;
  }, 0);
}