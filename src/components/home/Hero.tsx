import TitleCard from '../subcomponents/TitleCard';

function Hero() {

  const product = {
    name: "XX99 MARK II HEADPHONES",
    description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    category: "headphones",
    productId: "xx99mkiih"
  }

  return (
    <div className="hero">
      <picture>
        <source
          media="(min-width: 1100px)"
          srcSet="home/desktop/image-hero.jpg"
        />
        <source
          media="(min-width: 500px)"
          srcSet="home/tablet/image-hero.jpg"
        />
        <img src="home/mobile/image-hero.jpg" alt="" />
      </picture>
      <div className='wrapper'>
        <TitleCard
          product={product}
          isNew
          isH1
          isFeature
          textColor="white"
          buttonColor="orange"
        />
      </div>
    </div>
  );
}

export default Hero;