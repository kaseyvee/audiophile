import BottomBanner from "@/components/BottomBanner";
import FeaturePrimary from "@/components/home/FeaturePrimary";
import FeatureSecondary from "@/components/home/FeatureSecondary";
import Hero from "@/components/home/Hero";
import CategoryList from "@/components/subcomponents/CategoryList";

import { getCategories } from "@/fetching/getCategories";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="home page">
      <Hero />
      <div className="home__bottom">
        <div className="wrapper">
          <CategoryList categories={categories} />
          <div className="home__featured-products">
            <FeaturePrimary />
            <FeatureSecondary />
          </div>
          <BottomBanner />
        </div>
      </div>
    </main>
  );
}
