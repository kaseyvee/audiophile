import Button from "../subcomponents/Button";
import QuantityButton from "../subcomponents/QuantityButton";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__top">
        <p>CART {`(3)`}</p>
        <button>Remove all</button>
      </div>
      <ul>
        <li>
          <div className="item">
            <div className="picture"></div>
            <div className="info">
              <p>XX59</p>
              <span>$ 899</span>
            </div>
          </div>
          <QuantityButton />
        </li>
        <li>
          <div className="item">
            <div className="picture"></div>
            <div className="info">
              <p>XX59</p>
              <span>$ 899</span>
            </div>
          </div>
          <QuantityButton />
        </li>
      </ul>
      <div className="cart__bottom">
        <p>TOTAL</p>
        <span className="price">$5,234</span>
      </div>
      <Button
        buttonText="CHECKOUT"
        buttonColor="orange"
      />
    </div>
  );
}

export default Cart;