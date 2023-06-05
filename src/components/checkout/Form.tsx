import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FormProps {
  nameField: {
    current: HTMLInputElement | null;
  };
  emailField: {
    current: HTMLInputElement | null;
  };
  phoneField: {
    current: HTMLInputElement | null;
  };
  addressField: {
    current: HTMLInputElement | null;
  };
  zipCodeField: {
    current: HTMLInputElement | null;
  };
  cityField: {
    current: HTMLInputElement | null;
  };
  countryField: {
    current: HTMLInputElement | null;
  };
  eMoneySelectField: {
    current: HTMLInputElement | null;
  };
  cashSelectField: {
    current: HTMLInputElement | null;
  };
  eMoneyNumberField: {
    current: HTMLInputElement | null;
  };
  eMoneyPinField: {
    current: HTMLInputElement | null;
  };
}

function Form({
  formData,
  invalid,
}: {
  formData: FormProps;
  invalid: boolean;
}) {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  return (
    <form className={`form ${invalid && "invalid"}`} id="checkout-form">
      <h1 className="checkout-header">CHECKOUT</h1>

      <section className="form__billing-details">
        <h2 className="checkout-subheader">BILLING DETAILS</h2>

        <ul>
          <li>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Alexei Ward"
              ref={formData.nameField}
              required
            />
            <label htmlFor="name" className="checkout-field-header">
              Name
            </label>
          </li>

          <li>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="alexei@mail.com"
              ref={formData.emailField}
              required
            />
            <label htmlFor="email" className="checkout-field-header">
              Email Address
            </label>
          </li>

          <li>
            <input
              name="phone-number"
              type="tel"
              id="phone"
              placeholder="+1 202-555-0136"
              ref={formData.phoneField}
              required
            />
            <label htmlFor="phone" className="checkout-field-header">
              Phone Number
            </label>
          </li>
        </ul>
      </section>

      <section className="form__shipping-info">
        <h2 className="checkout-subheader">SHIPPING INFO</h2>

        <ul>
          <li className="address">
            <input
              name="address"
              type="text"
              id="address"
              placeholder="1137 Williams Avenue"
              ref={formData.addressField}
              required
            />
            <label htmlFor="address" className="checkout-field-header">
              Address
            </label>
          </li>

          <li>
            <input
              name="zipcode"
              type="text"
              id="zipcode"
              placeholder="10001"
              ref={formData.zipCodeField}
              required
            />
            <label htmlFor="zipcode" className="checkout-field-header">
              ZIP Code
            </label>
          </li>

          <li>
            <input
              name="city"
              type="text"
              id="city"
              placeholder="New York"
              ref={formData.cityField}
              required
            />
            <label htmlFor="city" className="checkout-field-header">
              City
            </label>
          </li>

          <li>
            <input
              name="country"
              type="text"
              id="country"
              placeholder="United States"
              ref={formData.countryField}
              required
            />
            <label htmlFor="country" className="checkout-field-header">
              Country
            </label>
          </li>
        </ul>
      </section>

      <section className="form__payment-details">
        <h2 className="checkout-subheader">PAYMENT DETAILS</h2>

        <fieldset>
          <legend className="checkout-field-header">Payment Method</legend>

          <div
            style={{
              borderColor: paymentMethod === "e-money" ? "#D87D4A" : "#CFCFCF",
            }}
          >
            <input
              type="radio"
              id="e-money"
              name="payment-method"
              value="e-money"
              ref={formData.eMoneySelectField}
              required
              onClick={() => setPaymentMethod("e-money")}
            />
            <label htmlFor="e-money" className="checkout-field-header">
              e-Money
            </label>
          </div>

          <div
            style={{
              borderColor: paymentMethod === "cash" ? "#D87D4A" : "#CFCFCF",
            }}
          >
            <input
              type="radio"
              id="cash"
              name="payment-method"
              value="cash"
              ref={formData.cashSelectField}
              onClick={() => setPaymentMethod("cash")}
            />
            <label htmlFor="cash" className="checkout-field-header">
              Cash on Delivery
            </label>
          </div>
        </fieldset>

        {paymentMethod === "e-money" && (
          <motion.ul initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}>
            <li>
              <input
                name="e-money-number"
                type="number"
                id="e-money-number"
                placeholder="238521993"
                ref={formData.eMoneyNumberField}
                required
              />
              <label htmlFor="e-money-number" className="checkout-field-header">
                e-Money Number
              </label>
            </li>

            <li>
              <input
                name="e-money-pin"
                type="number"
                id="e-money-pin"
                placeholder="6891"
                ref={formData.eMoneyPinField}
                required
              />
              <label htmlFor="e-money-pin" className="checkout-field-header">
                e-Money PIN
              </label>
            </li>
          </motion.ul>
        )}

        {paymentMethod === "cash" && (
          <motion.div
            className="form__cash-message"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
          >
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
          </motion.div>
        )}
      </section>
    </form>
  );
}

export default Form;
