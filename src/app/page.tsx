import BottomBanner from "@/components/BottomBanner";
import CategoryList from "@/components/subcomponents/CategoryList";
import TitleCard from "@/components/subcomponents/TitleCard";
import { getCategories } from "@/fetching/getCategories";

export default async function Home() {
  const categories = await getCategories();

  const product = {
    name: "XX99 MARK II HEADPHONES",
    description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    category: "headphones",
    productId: "xx99mkiih"
  }

  return (
    <main className="home page">
      <div className="hero">
        hello
      </div>
      <div className="home__bottom">
        <div className="wrapper">
          <CategoryList categories={categories} />
          <BottomBanner />
          <TitleCard
            product={product}
            isNew
            isH1
            isFeature
            textColor="white"
            buttonColor="orange"
          />
        </div>
      </div>
    </main>
  );
}
