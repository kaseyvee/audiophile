import { client } from "../contentful";

export async function getCategories() {
  const res = await client.getEntries({
    content_type: "categories",
  });

  const categories = res.items.map(
    (category: { fields: any }) => category.fields
  );

  const filteredCategories = categories.map(
    (category: {
      name: string;
      image: {
        fields: {
          file: {
            url: string
          }
        }
      }
    }) => {
      return {
        name: category.name,
        image: category.image.fields.file.url,
      };
    }
  );

  return filteredCategories;
}