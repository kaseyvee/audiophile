import { getCategories } from "@/fetching/getCategories";
import { getProductById } from "@/fetching/getProductById";

import BottomBanner from "@/components/BottomBanner";
import CategoryList from "@/components/subcomponents/CategoryList";
import TitleCard from "@/components/subcomponents/TitleCard";
import BackButton from "@/components/subcomponents/BackButton";

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
          <div className="product__item">
            <picture>
              <source
                media="(min-width: 1100px)"
                srcSet={product.imageMain.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={product.imageMain.tablet}
              />
              <img src={product.imageMain.mobile} alt="" />
            </picture>
            <TitleCard
              product={product}
              isNew={product.new}
              textColor="black"
              buttonColor="orange"
              isProductPage
              isH1
            />
          </div>
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
