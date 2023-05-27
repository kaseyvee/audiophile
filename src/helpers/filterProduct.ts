import filterAccessories from "./filterAccessories";
import filterImages from "./filterImages";

export default function filterProduct(product: any, currentCategory: string) {

  return {
    ...product.fields,
    category: currentCategory,
    accessories: filterAccessories(product.fields.accessories),
    imageMain: filterImages(product.fields.imageMain),
    imagePreview: filterImages(product.fields.imagePreview),
    imageGallery1: filterImages(product.fields.imageGallery1),
    imageGallery2: filterImages(product.fields.imageGallery2),
    imageGallery3: filterImages(product.fields.imageGallery3),
  }
}