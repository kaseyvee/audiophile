import { client } from "../contentful";

import filterProduct from "@/helpers/filterProduct";

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
    const filteredProduct = filterProduct(product);

    return filteredProduct;
  })

  return filteredProducts;
}