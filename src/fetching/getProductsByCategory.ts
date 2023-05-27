import { client } from "../contentful";

export default async function getProductsByCategory(currentCategory: string) {
  const category = await client.getEntries({
    content_type: "categories",
    "fields.name": currentCategory,
    limit: 1
  })

  const categoryId = category.items[0].sys.id;
  
  const res = await client.getEntries({
    content_type: 'products',
    'fields.category.sys.id': categoryId
  })

  const filteredProducts = res.items.map((product: any) => {

    function filterAccessories(accessories: any) {
      // this function filters the accessories so that the only the needed fields are returned (name and pieces)

      const filteredAccessories = accessories.map((accessory: any) => {
        return accessory.fields;
      })

      return filteredAccessories;
    }

    function filterImages(images: any) {
      // this function filters the nested image references in contentful so that only the image link is returned for each screen size as an array
      
      let output: any = {};

      images.forEach((image: any) => {
        const screens = ["mobile", "tablet", "desktop"];

        for (let screen of screens) {
          if (image.fields.title.includes(screen)) {
            output[screen] = image.fields.file.url;
          }
        }
      })

      return output;
    }

    const fields = product.fields;

    return {
      ...fields,
      category: currentCategory,
      accessories: filterAccessories(fields.accessories),
      imageMain: filterImages(fields.imageMain),
      imagePreview: filterImages(fields.imagePreview),
      imageGallery1: filterImages(fields.imageGallery1),
      imageGallery2: filterImages(fields.imageGallery2),
      imageGallery3: filterImages(fields.imageGallery3),
    }
  })

  return filteredProducts;
}