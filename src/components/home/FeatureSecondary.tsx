import Link from "next/link";
import Button from "../subcomponents/Button";

function FeatureSecondary() {
  const product = {
    name: "ZX9 SPEAKER",
    category: "speakers",
    productId: "zx9s",
    image: "image-speaker-zx9.png"
  }

  return (
    <div className="feature-secondary">
      <picture>
        <source media="(min-width: 1100px)" srcSet={`home/desktop/${product.image}`} />
        <source media="(min-width: 768px)" srcSet={`home/tablet/${product.image}`} />
        <img src={`home/mobile/${product.image}`} alt="" />
      </picture>
      <h2>{product.name}</h2>
      <Button
        href={`/${product.category}/${product.productId}`}
        buttonColor="black"
        buttonText="SEE PRODUCT"
      />
    </div>
  );
}

export default FeatureSecondary;