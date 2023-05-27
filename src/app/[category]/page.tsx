import getProductsByCategory from "@/fetching/getProductsByCategory";

import BottomBanner from "@/components/BottomBanner";
import CategoryList from "@/components/subcomponents/CategoryList";
import { getCategories } from "@/fetching/getCategories";

export default async function Category({ params }: { params: { category: string }}) {
  const categories = await getCategories();
  const products = await getProductsByCategory(params.category);
  console.log(products, "PRODUCTSSSS")

  return (
    <main className="category page">
      
      <div className="bottom">
        <div className="wrapper">
          <CategoryList categories={categories}/>
          <BottomBanner />
        </div>
      </div>
    </main>
  );
}
