import { getCategories } from "@/fetching/getCategories";
import { getProductById } from "@/fetching/getProductById";

import BackButton from "@/components/subcomponents/BackButton";
import ProductItem from "@/components/product/ProductCard";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductGallery from "@/components/product/ProductGallery";
import CategoryList from "@/components/subcomponents/CategoryList";
import BottomBanner from "@/components/BottomBanner";

export default async function Product({
  params,
}: {
  params: { productId: string; category: string };
}) {
  const categories = await getCategories();
  const product = await getProductById(params.productId, params.category);

  return (
    <main className="product page">
      <div className="top">
        <div className="wrapper">
          <BackButton />
          <ProductItem
            product={product}
          />
          <ProductFeatures
            features={product.features}
            accessories={product.accessories}
          />
          <ProductGallery
            images={[product.imageGallery1, product.imageGallery2, product.imageGallery3]}
          />
        </div>
      </div>

      <div className="bottom">
        <div className="wrapper">
          <CategoryList categories={categories} />
          <BottomBanner />
        </div>
      </div>
    </main>
  );
}
