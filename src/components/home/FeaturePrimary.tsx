import TitleCard from "../subcomponents/TitleCard";

/* eslint-disable @next/next/no-img-element */
function FeaturePrimary() {
  const product = {
    name: "ZX9 SPEAKER",
    description:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    category: "speakers",
    productId: "zx9s",
    image: "image-speaker-zx9.png"
  };

  return (
    <div className="feature-primary">
      <picture>
        <source media="(min-width: 1100px)" srcSet={`home/desktop/${product.image}`} />
        <source media="(min-width: 768px)" srcSet={`home/tablet/${product.image}`} />
        <img src={`home/mobile/${product.image}`} alt="" />
      </picture>
      <TitleCard
        product={product}
        isFeature
        textColor="white"
        buttonColor="black"
      />
    </div>
  );
}

export default FeaturePrimary;
