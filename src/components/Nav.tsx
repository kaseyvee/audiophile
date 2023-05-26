"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import CategoryProps from "@/props/CategoryProps";

import CategoryList from "./CategoryList";

export default function Nav({ categories }: { categories: CategoryProps[] }) {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    addEventListener("resize", () => {
      setNavOpen(false);
    });

    return () => {
      removeEventListener("resize", () => {
        setNavOpen(false);
      })
    }
  }, [])

  const desktopCategoryList = categories.map((category) => {
    return (
      <li key={category.name + "nav item"}>
        <Link href={`/${category.name}`} className="nav-item">
          {category.name.toUpperCase()}
        </Link>
      </li>
    );
  });

  return (
    <>
      <nav className="nav">
        <div className="wrapper">
          <button
            aria-label="nav menu"
            aria-expanded={navOpen ? "true" : "false"}
            onClick={() => setNavOpen(!navOpen)}
            className="nav__menu-button"
          >
            <Image
              priority
              src="icon-hamburger.svg"
              alt=""
              width={16}
              height={15}
            />
          </button>
          <Image
            priority
            src="logo.svg"
            alt=""
            width={143}
            height={25}
            className="nav__logo"
          />
          <ul>
            <li>
              <Link href="/" className="nav-item">
                HOME
              </Link>
            </li>
            {desktopCategoryList}
          </ul>
          <button
            aria-label="cart items"
            aria-expanded={cartOpen ? "true" : "false"}
            onClick={() => setCartOpen(!cartOpen)}
            className="nav__cart-button"
          >
            <Image priority src="icon-cart.svg" alt="" width={23} height={20} />
          </button>
        </div>
      </nav>
      {navOpen && (
        <div className="nav-menu-open">
          <CategoryList categories={categories} />
        </div>
      )}
      {(navOpen || cartOpen) && <div className="overlay"></div>}
    </>
  );
}
