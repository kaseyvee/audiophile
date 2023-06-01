import Image from "next/image";

function Form() {
  return (
    <form className="form">
      <h1 className="checkout-header">CHECKOUT</h1>

      <section className="form__billing-details">
        <h2 className="checkout-subheader">BILLING DETAILS</h2>

        <ul>
          <li>
            <label htmlFor="name" className="checkout-field-header">
              Name
            </label>
            <input type="text" id="name" placeholder="Alexei Ward" />
          </li>

          <li>
            <label htmlFor="email" className="checkout-field-header">
              Email Address
            </label>
            <input type="email" id="email" placeholder="alexei@mail.com" />
          </li>

          <li>
            <label htmlFor="phone" className="checkout-field-header">
              Phone Number
            </label>
            <input type="tel" id="phone" placeholder="+1 202-555-0136" />
          </li>
        </ul>
      </section>

      <section className="form__shipping-info">
        <h2 className="checkout-subheader">SHIPPING INFO</h2>

        <ul>
          <li className="address">
            <label htmlFor="address" className="checkout-field-header">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="1137 Williams Avenue"
            />
          </li>

          <li>
            <label htmlFor="zipcode" className="checkout-field-header">
              ZIP Code
            </label>
            <input type="text" id="zipcode" placeholder="10001" />
          </li>

          <li>
            <label htmlFor="city" className="checkout-field-header">
              City
            </label>
            <input type="text" id="city" placeholder="New York" />
          </li>

          <li>
            <label htmlFor="country" className="checkout-field-header">
              Country
            </label>
            <input type="text" id="country" placeholder="United States" />
          </li>
        </ul>
      </section>

      <section className="form__payment-details">
        <h2 className="checkout-subheader">PAYMENT DETAILS</h2>

        <fieldset>
          <legend className="checkout-field-header">Payment Method</legend>

          <div>
            <input
              type="radio"
              id="e-money"
              name="payment-method"
              value="e-money"
              checked
            />
            <label htmlFor="e-money" className="checkout-field-header">
              e-Money
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="cash"
              name="payment-method"
              value="cash"
            />
            <label htmlFor="cash" className="checkout-field-header">
              Cash on Delivery
            </label>
          </div>
        </fieldset>

        <ul>
          <li>
            <label htmlFor="e-money-number" className="checkout-field-header">
              e-Money Number
            </label>
            <input type="number" id="e-money-number" placeholder="238521993" />
          </li>

          <li>
            <label htmlFor="e-money-pin" className="checkout-field-header">
              e-Money PIN
            </label>
            <input type="number" id="e-money-pin" placeholder="6891" />
          </li>
        </ul>

        <div className="form__cash-message">
          <Image
            src="/checkout/icon-cash-on-delivery.svg"
            alt=""
            width={48}
            height={48}
          />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      </section>
    </form>
  );
}

export default Form;
