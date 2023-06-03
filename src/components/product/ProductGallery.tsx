import ImageProps from "@/props/ImageProps";

export default function ProductGallery({ images }: { images: ImageProps[] }) {

  const galleryList = images.map((galleryItem) => {
    const index = images.indexOf(galleryItem);

    return (
      <picture key={index}>
        <source
          media="(min-width: 1100px)"
          srcSet={galleryItem.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={galleryItem.tablet}
        />
        <img src={galleryItem.mobile} alt="" />
      </picture>
    )
  })

  return (
    <div className="product-gallery">
      {galleryList}
    </div>
  );
}