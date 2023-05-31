/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";

import Button from "../subcomponents/Button";
import QuantityButton from "../subcomponents/QuantityButton";

interface CartItemProps {
  codeName: string;
  price: number;
  image: string;
  amount: number;
}

function Cart({ checkout }: { checkout?: boolean }) {
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

  function handleChangeAmount(
    action: "increase" | "decrease",
    cartItem: CartItemProps
  ) {
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

  const cartItemList = parsedCartItems.map((cartItem) => {
    return (
      <li key={cartItem.codeName + "cart"}>
        <div className="main">
          <img className="main__picture" src={cartItem.image} alt="" />
          <div className="main__info">
            <div>
              <p>{cartItem.codeName}</p>
              {checkout && <span className="quantity">x{cartItem.amount}</span>}
            </div>
            <span>$ {cartItem.price.toLocaleString()}</span>
          </div>
        </div>
        {!checkout && (
          <QuantityButton
            amount={cartItem.amount}
            onIncrease={() => handleChangeAmount("increase", cartItem)}
            onDecrease={() => handleChangeAmount("decrease", cartItem)}
          />
        )}
      </li>
    );
  });

  function handlePay() {}

  return (
    <div className="cart">
      <div className="cart__top">
        {checkout ? (
          <p>SUMMARY</p>
        ) : (
          <p>CART {`(${parsedCartItems.length})`}</p>
        )}

        {!checkout && <button onClick={handleClearCart}>Remove all</button>}
      </div>

      {parsedCartItems.length ? (
        <ul>{cartItemList}</ul>
      ) : (
        <p className="cart__error">Ack! I&apos;m empty :(</p>
      )}

      <div className="cart__bottom">
        <div>
          <p>TOTAL</p>
          <span className="price">$ {total.toLocaleString()}</span>
        </div>
        {checkout && (
          <>
            <div>
              <p>SHIPPING</p>
              <span className="price">$ 50</span>
            </div>
            <div>
              <p>VAT (INCLUDED)</p>
              <span className="price">
                $ {Math.round(total * 0.2).toLocaleString()}
              </span>
            </div>

            <div className="grand-total">
              <p>GRAND TOTAL</p>
              <span className="price">$ {(total + 50).toLocaleString()}</span>
            </div>
          </>
        )}
      </div>

      {checkout ? (
        <Button
          onClick={handlePay}
          buttonText="CONTINUE & PAY"
          buttonColor="orange"
        />
      ) : (
        <Button
          href="/checkout"
          buttonText="CHECKOUT"
          buttonColor="orange"
        />
      )}
    </div>
  );
}

export default Cart;
