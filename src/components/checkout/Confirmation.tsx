/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import Image from "next/image";

import getSubTotal from "@/helpers/getSubTotal";
import parseCart from "@/helpers/parseCart";
import Button from "../subcomponents/Button";
import { useState } from "react";

function Confirmation() {
  const router = useRouter();
  const [showAllItems, setShowAllItems] = useState(false);

  const cartItems = { ...localStorage };
  const parsedCartItems = parseCart(cartItems);
  const grandTotal = getSubTotal(parsedCartItems) + 50;

  function handleGoHome() {
    localStorage.clear();
    return router.push("/");
  }

  const cartItemList = parsedCartItems
    .slice(1, parsedCartItems.length)
    .map((cartItem) => {
      return (
        <li className="main" key={cartItem.productId + "confirm"}>
          <img className="main__picture" src={cartItem.image} alt="" />
          <div className="main__info">
            <div>
              <p>{cartItem.codeName}</p>
              <span className="quantity">x{cartItem.amount}</span>
            </div>
            <span>$ {cartItem.price.toLocaleString()}</span>
          </div>
        </li>
      );
    });

  return (
    <div className="confirmation">
      <Image
        src="/checkout/icon-order-confirmation.svg"
        alt=""
        width={64}
        height={64}
      />
      <h2>THANK YOU FOR YOUR ORDER</h2>
      <p>You will receive and email confirmation shortly.</p>
      <div className="confirmation__summary">
        <div className="confirmation__summary-items">
          <ul>
            <li className="main">
              <img
                className="main__picture"
                src={parsedCartItems[0].image}
                alt=""
              />
              <div className="main__info">
                <div>
                  <p>{parsedCartItems[0].codeName}</p>
                  <span className="quantity">x{parsedCartItems[0].amount}</span>
                </div>
                <span>$ {parsedCartItems[0].price.toLocaleString()}</span>
              </div>
            </li>
            {showAllItems && cartItemList}
          </ul>
          {parsedCartItems.length > 1 && (
            <p className="other-items" onClick={() => setShowAllItems(!showAllItems)}>
              {showAllItems ? "View Less" : `and ${parsedCartItems.length - 1} other items(s)`}
            </p>
          )}
        </div>

        <div className="confirmation__summary-total">
          <p>GRAND TOTAL</p>
          <span>$ {grandTotal.toLocaleString()}</span>
        </div>
      </div>
      <Button
        buttonColor="orange"
        buttonText="BACK TO HOME"
        onClick={handleGoHome}
      />
    </div>
  );
}

export default Confirmation;
