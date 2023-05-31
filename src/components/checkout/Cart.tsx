/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import Button from "../subcomponents/Button";
import QuantityButton from "../subcomponents/QuantityButton";

function Cart() {
  const router = useRouter();

  const cartItems = { ...localStorage };
  let parsedCartItems = [];

  for (let cartItem in cartItems) {
    if (cartItem.includes("audiophile")) {
      parsedCartItems.push(JSON.parse(cartItems[cartItem]));
    }
  }

  const total = parsedCartItems.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);

  function handleChangeAmount(action: "increase" | "decrease", cartItem: any) {
    const localStorageKey = cartItem.codeName + "audiophile";

    const itemInfo = {
      codeName: cartItem.codeName,
      price: cartItem.price,
      image: cartItem.image,
      amount:
        action === "increase"
          ? Number(cartItem.amount) + 1
          : Number(cartItem.amount) - 1,
    };

    if (itemInfo.amount === 0) {
      localStorage.removeItem(localStorageKey);
      return router.refresh();
    }

    localStorage.setItem(localStorageKey, JSON.stringify(itemInfo));
    return router.refresh();
  }

  function handleClearCart() {
    localStorage.clear();
    return router.refresh();
  }

  const cartItemList = parsedCartItems.map((cartItem: any) => {
    return (
      <li key={cartItem.codeName + "cart"}>
        <div className="item">
          <img className="picture" src={cartItem.image} alt="" />
          <div className="info">
            <p>{cartItem.codeName}</p>
            <span>$ {cartItem.price.toLocaleString()}</span>
          </div>
        </div>
        <QuantityButton
          amount={cartItem.amount}
          onIncrease={() => handleChangeAmount("increase", cartItem)}
          onDecrease={() => handleChangeAmount("decrease", cartItem)}
        />
      </li>
    );
  });

  return (
    <div className="cart">
      <div className="cart__top">
        <p>CART {`(${parsedCartItems.length})`}</p>

        {parsedCartItems.length > 0 && (
          <button onClick={handleClearCart}>Remove all</button>
        )}
      </div>

      {parsedCartItems.length ? (
        <ul>{cartItemList}</ul>
      ) : (
        <p className="empty-error">Ack! I&apos;m empty :(</p>
      )}

      <div className="cart__bottom">
        <p>TOTAL</p>
        <span className="price">$ {total.toLocaleString()}</span>
      </div>

      {parsedCartItems.length > 0 && (
        <Button buttonText="CHECKOUT" buttonColor="orange" />
      )}
    </div>
  );
}

export default Cart;
