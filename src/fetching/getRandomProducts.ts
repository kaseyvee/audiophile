import { client } from "@/contentful";

import filterProduct from "@/helpers/filterProduct";

export async function getRandomProducts() {
  const res = await client.getEntries({
    content_type: "products",
  });

  try {
    const entries = res.items.filter((entry: any) => entry.fields["imageRec"] !== undefined);

    const copyArr = [...entries];
  
    const selectedItems = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * copyArr.length);
      const selectedItem = copyArr.splice(randomIndex, 1)[0];
      selectedItems.push(selectedItem);
    }

    const filteredRandomEntries = selectedItems.map((randomEntry: any) => {
      return filterProduct(randomEntry);
    })

    return filteredRandomEntries;
  } catch(error) {
    // console.log(error);
  }
}