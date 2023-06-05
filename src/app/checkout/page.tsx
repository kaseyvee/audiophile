"use client";

import { useRef, useState } from "react";

import Cart from "@/components/checkout/Cart";
import Form from "@/components/checkout/Form";
import BackButton from "@/components/subcomponents/BackButton";
import Confirmation from "@/components/checkout/Confirmation";

export default function Checkout() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showInvalidForm, setShowInvalidForm] = useState(false);

  const nameField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const phoneField = useRef<HTMLInputElement>(null);

  const addressField = useRef<HTMLInputElement>(null);
  const zipCodeField = useRef<HTMLInputElement>(null);
  const cityField = useRef<HTMLInputElement>(null);
  const countryField = useRef<HTMLInputElement>(null);

  const eMoneySelectField = useRef<HTMLInputElement>(null);
  const cashSelectField = useRef<HTMLInputElement>(null);

  const eMoneyNumberField = useRef<HTMLInputElement>(null);
  const eMoneyPinField = useRef<HTMLInputElement>(null);

  const formData = {
    nameField,
    emailField,
    phoneField,
    addressField,
    zipCodeField,
    cityField,
    countryField,
    eMoneySelectField,
    cashSelectField,
    eMoneyNumberField,
    eMoneyPinField,
  };
  
  function handleFormSubmit(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();

    if (!nameField.current?.value || !emailField.current?.value || !phoneField.current?.value || !addressField.current?.value || !zipCodeField.current?.value || !countryField.current?.value || (!eMoneySelectField.current?.value && !cashSelectField.current?.value) || (eMoneyNumberField.current?.value && (!eMoneyNumberField.current?.value || !eMoneyPinField.current?.value))) {
      return setShowInvalidForm(true);
    }

    setShowInvalidForm(false);
    window.scrollTo(0,0);
    return setShowConfirmation(true);
  }


  return (
    <main className="checkout page">
      {showConfirmation && (
        <div className="confirmation-modal">
          <Confirmation />
          <div className="overlay"></div>
        </div>
      )}
      <div className="top">
        <div className="wrapper">
          <BackButton />
          <Form formData={formData} invalid={showInvalidForm} />
          <Cart checkout onSubmit={handleFormSubmit} />
        </div>
      </div>
    </main>
  );
}
