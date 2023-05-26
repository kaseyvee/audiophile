import TitleCard from "../subcomponents/TitleCard";

/* eslint-disable @next/next/no-img-element */
function FeaturePrimary() {

  const product = {
    name: "ZX9 SPEAKER",
    description: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    category: "speakers",
    productId: "zx9s"
  };

  const image = "image-speaker-zx9.png";

  return (
    <div className="feature-primary">
      <picture>
        <source
          media="(min-width: 1100px)"
          srcSet={`home/desktop/${image}`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`home/tablet/${image}`}
        />
        <img src={`home/mobile/${image}`} alt="" />
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