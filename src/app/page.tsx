import BottomBanner from "@/components/BottomBanner";
import CategoryList from "@/components/CategoryList";
import { getCategories } from "@/fetching/getCategories";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="home page">
      <div>

      </div>
      <div className="home__bottom">
        <div className="wrapper">
          <CategoryList categories={categories} />
          <BottomBanner />
        </div>
      </div>
    </main>
  );
}
