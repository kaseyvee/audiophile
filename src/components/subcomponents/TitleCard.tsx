"use client";

import Button from "./Button";
import QuantityButton from "./QuantityButton";

interface ProductProps {
  name: string;
  description: string;
  category: string;
  productId: string;
  price?: number;
}

interface TitleCardProps {
  product: ProductProps;
  isNew?: boolean;
  isH1?: boolean;
  isFeature?: boolean;
  isProductPage?: boolean;
  textColor: "black" | "white";
  buttonColor: "black" | "orange";
}

export default function TitleCard({
  product,
  isNew,
  isH1,
  isFeature,
  isProductPage,
  textColor,
  buttonColor,
}: TitleCardProps) {
  function handleAddToCard() {
    console.log("added to cart");
  }

  return (
    <div className="title-card" style={{ color: textColor }}>
      {isNew && (
        <span
          className="new-product-label"
          style={{ color: textColor === "black" ? "#D87D4A" : "white" }}
        >
          NEW PRODUCT
        </span>
      )}
      {isH1 ? (
        <h1 className={isFeature ? "feature-header" : "product-header"}>
          {product.name}
        </h1>
      ) : (
        <h2 className={isFeature ? "feature-header" : "product-header"}>
          {product.name}
        </h2>
      )}
      <p>{product.description}</p>
      {isProductPage && product.price && (
        <span className="price">${product.price.toLocaleString()}</span>
      )}
      <div className="title-card__actions">
        {isProductPage && <QuantityButton />}
        {isProductPage ? (
          <Button
            onClick={handleAddToCard}
            buttonColor="orange"
            buttonText="ADD TO CART"
          />
        ) : (
          <Button
            href={`/${product.category}/${product.productId}`}
            buttonColor={buttonColor}
            buttonText="SEE PRODUCT"
          />
        )}
      </div>
    </div>
  );
}
