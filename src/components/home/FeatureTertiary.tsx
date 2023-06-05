import Button from "../subcomponents/Button";

export default function FeatureTertiary() {

  const product = {
    name: "YX1 EARPHONES",
    category: "earphones",
    productId: "yx1we",
    image: "image-earphones-yx1.jpg"
  }

  return (
    <div className="feature-tertiary">
      <picture>
        <source media="(min-width: 1100px)" srcSet={`home/desktop/${product.image}`} />
        <source media="(min-width: 768px)" srcSet={`home/tablet/${product.image}`} />
        <img src={`home/mobile/${product.image}`} alt="" />
      </picture>
      <div className="feature-tertiary__words">
        <h2 className="home-product-header">{product.name}</h2>
        <Button
          href={`/${product.category}/${product.productId}`}
          buttonColor="clear"
          buttonText="SEE PRODUCT"
        />
      </div>
    </div>
  );
}