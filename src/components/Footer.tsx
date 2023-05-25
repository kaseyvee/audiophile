import Image from "next/image";
import Link from "next/link";

import Facebook from "./svgs/Facebook";
import Twitter from "./svgs/Twitter";
import Instagram from "./svgs/Instagram";

interface CategoryProps {
  name: string;
  image: string;
};

export default function Footer({ categories }: { categories: CategoryProps[] }) {
  const footerItems = categories.map((footerItem: CategoryProps) => {
    return (
      <li key={footerItem.name + "footer"}>
        <Link 
          href={`/${footerItem.name}`}
          className="nav-item"
        >
          {footerItem.name.toUpperCase()}
        </Link>
      </li>
    );
  });

  return (
    <footer>
      <div className="top">
        <Image
          priority
          src="logo.svg"
          alt=""
          width={143}
          height={25}
        />
        <ul>
          <li>
            <Link href="/" className="nav-item">
              HOME
            </Link>
          </li>
          {footerItems}
        </ul>
      </div>
      <div className="bottom">
        <p className="bottom__blurb">
          Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <p className="bottom__copywrite">Copyright 2021. All Rights Reserved</p>
        <ul>
          <li>
            <Link href="/" aria-label="Facebook">
              <Facebook/>
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Twitter">
              <Twitter/>
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Instagram">
              <Instagram/>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
