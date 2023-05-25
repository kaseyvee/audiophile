import Image from 'next/image';
import React from 'react';

function BottomBanner() {
  return (
    <div className='bottom-banner'>
      <picture>
        <source
          media="(min-width: 1100px)"
          srcSet="shared/desktop/image-best-gear.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="shared/tablet/image-best-gear.jpg"
        />
        <img src="shared/mobile/image-best-gear.jpg" alt="" />
      </picture>
      <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
      <p>
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
      </p>
    </div>
  );
}

export default BottomBanner;