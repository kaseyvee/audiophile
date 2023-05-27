function QuantityButton() {

  return (
    <div className="quantity-button" aria-label="update quantity buttons">
      <button><span>-</span></button>
      <p>1</p>
      <button><span>+</span></button>
    </div>
  );
}

export default QuantityButton;