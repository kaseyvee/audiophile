import getProductsByCategory from "@/fetching/getProductsByCategory";

import BottomBanner from "@/components/BottomBanner";
import CategoryList from "@/components/subcomponents/CategoryList";
import { getCategories } from "@/fetching/getCategories";

export default async function Category({ params }: { params: { category: string }}) {
  const currentCategory = params.category;
  const categories = await getCategories();
  const products = await getProductsByCategory(params.category);
  console.log(products, "PRODUCTSSSS")

  return (
    <main className="category page">
      <header>
        <h1 className="category-header">{currentCategory.toUpperCase()}</h1>
      </header>
      <div className="bottom">
        <div className="wrapper">
          <CategoryList categories={categories}/>
          <BottomBanner />
        </div>
      </div>
    </main>
  );
}
