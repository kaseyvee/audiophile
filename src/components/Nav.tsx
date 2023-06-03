"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import CategoryProps from "@/props/CategoryProps";
import CategoryList from "./subcomponents/CategoryList";
import Cart from "./checkout/Cart";

export default function Nav({ categories }: { categories: CategoryProps[] }) {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [navColor, setNavColor] = useState("transparent");
  const navRef = useRef<any>(null);

  useEffect(() => {
    addEventListener("click", handleOutsideMenuClick, true);
    addEventListener("scroll", handleNavColorChange, true);
    addEventListener("resize", handleCloseMenus);

    return () => {
      removeEventListener("resize", handleCloseMenus);
      removeEventListener("click", handleOutsideMenuClick, true);
      removeEventListener("scroll", handleNavColorChange, true);
    };
  }, []);

  function handleOutsideMenuClick(e: any) {
    if (!navRef.current?.contains(e.target)) {
      return handleCloseMenus();
    }
  }

  function handleCloseMenus() {
    setCartOpen(false);
    setNavOpen(false);
  }

  function handleNavColorChange() {
    if (window.pageYOffset > 40) {
      return setNavColor("black");
    }

    return setNavColor("transparent");
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
      <nav ref={navRef} className="nav" style={{ backgroundColor: navColor }}>
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
            <Image priority src="/logo.svg" alt="" width={143} height={25} />
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
            <Image
              priority
              src="/icon-cart.svg"
              alt=""
              width={23}
              height={20}
            />
          </button>
          <AnimatePresence>{cartOpen && <Cart />}</AnimatePresence>
        </div>
      </nav>
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="nav-menu-open"
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CategoryList categories={categories} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {(navOpen || cartOpen) && (
          <motion.div
            className="overlay"
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
