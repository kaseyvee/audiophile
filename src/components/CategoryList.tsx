/* eslint-disable @next/next/no-img-element */
import CategoryProps from "@/props/CategoryProps";
import Image from "next/image";
import Link from "next/link";
import Arrow from "icon-arrow-right.svg";

function CategoryList({ categories }: { categories: CategoryProps[] }) {
  const categoryList = categories.map((category: CategoryProps) => {
    return (
      <li key={category.name + "category list"}>
        <div className="category-list__image-container">
          <img src={"https:" + category.image} alt="" />
        </div>
        <h2>{category.name.toUpperCase()}</h2>
        <Link href={`/${category.name.toLowerCase()}`} className="shop">
          SHOP
          <Image src="icon-arrow-right.svg" alt="" width={5} height={10} />
        </Link>
      </li>
    );
  });

  return <ul className="category-list">{categoryList}</ul>;
}

export default CategoryList;
