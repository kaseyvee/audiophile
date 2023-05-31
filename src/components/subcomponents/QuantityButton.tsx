interface QuantityButtonProps {
  amount: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

function QuantityButton({ amount, onIncrease, onDecrease }: QuantityButtonProps) {

  return (
    <div className="quantity-button" aria-label="update quantity buttons">
      <button onClick={onDecrease}><span>-</span></button>
      <p>{amount}</p>
      <button onClick={onIncrease}><span>+</span></button>
    </div>
  );
}

export default QuantityButton;