export default function filterAccessories(accessories: any) {
  // accessories is an array of nested objects
  // this function filters the accessories so that the only the needed fields are returned (name and pieces)

  const filteredAccessories = accessories.map((accessory: any) => {
    return accessory.fields;
  })

  return filteredAccessories;
}