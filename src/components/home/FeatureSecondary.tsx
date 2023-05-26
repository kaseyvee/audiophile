import Button from "../subcomponents/Button";

function FeatureSecondary() {
  const product = {
    name: "ZX7 SPEAKER",
    category: "speakers",
    productId: "zx7s",
    image: "image-speaker-zx7.jpg"
  }

  return (
    <div className="feature-secondary">
      <picture>
        <source media="(min-width: 1100px)" srcSet={`home/desktop/${product.image}`} />
        <source media="(min-width: 768px)" srcSet={`home/tablet/${product.image}`} />
        <img src={`home/mobile/${product.image}`} alt="" />
      </picture>
      <div className="feature-secondary__words">
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

export default FeatureSecondary;