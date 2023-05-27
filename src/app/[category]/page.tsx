import getProductsByCategory from "@/fetching/getProductsByCategory";
import { getCategories } from "@/fetching/getCategories";

import BottomBanner from "@/components/BottomBanner";
import CategoryList from "@/components/subcomponents/CategoryList";
import TitleCard from "@/components/subcomponents/TitleCard";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const currentCategory = params.category;
  const categories = await getCategories();
  const products = await getProductsByCategory(params.category);

  const productList = products.map((product: any) => {
    return (
      <li
        key={product.productId}
        className={
          (products.indexOf(product) + 1) % 2 !== 0
            ? "image-left"
            : "image-right"
        }
      >
        <picture>
          <source
            media="(min-width: 1100px)"
            srcSet={product.imagePreview.desktop}
          />
          <source
            media="(min-width: 768px)"
            srcSet={product.imagePreview.tablet}
          />
          <img src={product.imagePreview.mobile} alt="" />
        </picture>
        <TitleCard
          product={product}
          isNew={product.new}
          textColor="black"
          buttonColor="orange"
          // isProductPage={true}
        />
      </li>
    );
  });

  return (
    <main className="category page">
      <header>
        <h1 className="category-header">{currentCategory.toUpperCase()}</h1>
      </header>

      <div className="bottom">
        <div className="wrapper">
          <ul className="category__products">{productList}</ul>
          <CategoryList categories={categories} />
          <BottomBanner />
        </div>
      </div>
    </main>
  );
}
