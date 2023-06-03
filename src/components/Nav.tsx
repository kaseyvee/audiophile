"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

import CategoryProps from "@/props/CategoryProps";
import CategoryList from "./subcomponents/CategoryList";
import Cart from "./checkout/Cart";

export default function Nav({ categories }: { categories: CategoryProps[] }) {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<any>(null);
  
  useEffect(() => {
    document.addEventListener("click", handleOutsideMenuClick, true);
    
    addEventListener("resize", handleCloseMenus);
    
    return () => {
      removeEventListener("resize", handleCloseMenus)
    }
  }, [])

  function handleOutsideMenuClick(e: any) {
    if (!navRef.current?.contains(e.target)) {
      return handleCloseMenus();
    }
  }

  function handleCloseMenus() {
    setCartOpen(false);
    setNavOpen(false);
  }


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
      <nav ref={navRef} className="nav" style={{ backgroundColor: pathname === "/" ? "transparent" : "black" }}>
        <div className="wrapper">
          <button
            aria-label="nav menu"
            aria-expanded={navOpen ? "true" : "false"}
            onClick={() => setNavOpen(!navOpen)}
            className="nav__menu-button"
          >
            <Image
              priority
              src="/icon-hamburger.svg"
              alt=""
              width={16}
              height={15}
            />
          </button>
          <Link href="/" className="nav__logo">
            <Image
              priority
              src="/logo.svg"
              alt=""
              width={143}
              height={25}
            />
          </Link>
          <ul className="nav__list">
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
            <Image priority src="/icon-cart.svg" alt="" width={23} height={20} />
          </button>
          {cartOpen && <Cart />}
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
