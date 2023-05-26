import BottomBanner from "@/components/BottomBanner";
import CategoryList from "@/components/subcomponents/CategoryList";
import TitleCard from "@/components/subcomponents/TitleCard";
import { getCategories } from "@/fetching/getCategories";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="home page">
      <div className="hero">
        hello
      </div>
      <div className="home__bottom">
        <div className="wrapper">
          <CategoryList categories={categories} />
          <BottomBanner />
          <TitleCard />
        </div>
      </div>
    </main>
  );
}
