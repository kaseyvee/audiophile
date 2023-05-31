import Cart from "@/components/checkout/Cart";
import Form from "@/components/checkout/Form";
import BackButton from "@/components/subcomponents/BackButton";

export default function Checkout() {
  return (
    <main className="checkout page">
      <div className="top">
        <div className="wrapper">
          <BackButton />
          <Form />
          <Cart checkout />
        </div>
      </div>
    </main>
  );
}