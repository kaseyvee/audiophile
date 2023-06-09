import { client } from "@/contentful";

import filterProduct from "@/helpers/filterProduct";

export async function getProductById(id: string) {
  const res = await client.getEntries({
    content_type: "products",
    "fields.productId": id
  });

  try {
    const filteredProduct = filterProduct(res.items[0]);
  
    return filteredProduct;
  } catch(error) {
    // console.log(error);
  }
}