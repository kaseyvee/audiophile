/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

import ImageProps from "@/props/ImageProps";

import Button from "./Button";
import QuantityButton from "./QuantityButton";

interface ProductProps {
  name: string;
  codeName: string;
  description: string;
  category: string;
  productId: string;
  price?: number;
  imageMain: ImageProps;
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
  const [itemAmount, setItemAmount] = useState(0);
  const localStorageKey = product.codeName + "audiophile";

  useEffect(() => {
    if (localStorage.getItem(localStorageKey)) {
      const item: any = localStorage.getItem(localStorageKey);
      const parsedItem = JSON.parse(item);
      setItemAmount(Number(parsedItem.amount));
    }
  }, [])

  function handleChangeAmount(action: "increase" | "decrease") {
    if (action === "decrease") {
      if (itemAmount === 0) return;
      return setItemAmount(itemAmount - 1);
    }
    return setItemAmount(itemAmount + 1)
  }

  function handleAddToCard() {
    const itemInfo = {
      codeName: product.codeName,
      price: product.price,
      image: product.imageMain.desktop,
      amount: itemAmount
    };

    if (itemAmount === 0) {
      return localStorage.removeItem(localStorageKey);
    }

    localStorage.setItem(localStorageKey, JSON.stringify(itemInfo));
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
        {isProductPage && (
          <QuantityButton
            onIncrease={() => handleChangeAmount("increase")}
            onDecrease={() => handleChangeAmount("decrease")}
            amount={itemAmount}
          />
        )}
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
