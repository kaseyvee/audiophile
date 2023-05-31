import React from 'react';
import TitleCard from '../subcomponents/TitleCard';

interface ProductCardProps {
  name: string;
  description: string;
  category: string;
  productId: string;
  imageMain: {
    desktop: string;
    tablet: string;
    mobile: string;
  }
  new: boolean;
}

export default function ProductCard({ product }: { product: ProductCardProps }) {
  return (
    <div className="product-item">
      <picture>
        <source
          media="(min-width: 1100px)"
          srcSet={product.imageMain.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={product.imageMain.tablet}
        />
        <img src={product.imageMain.mobile} alt="" />
      </picture>
      <TitleCard
        product={product}
        isNew={product.new}
        textColor="black"
        buttonColor="orange"
        isProductPage
        isH1
      />
    </div>
  );
}