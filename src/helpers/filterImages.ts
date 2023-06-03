export default function filterImages(images: any) {
  // images is an array of nested objects
  // this function filters the nested image references in contentful so that only the image link is returned for each screen size as an array
  
  let output: any = {
    mobile: "",
    tablet: "",
    desktop: ""
  };

  if (!images) return output;

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