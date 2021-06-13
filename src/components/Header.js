import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const nav = [
    {
      id: 1,
      route: "/",
      name: "Home",
    },
    {
      id: 2,
      route: "/about",
      name: "About Us",
    },
    {
      id: 3,
      route: "/contact",
      name: "Contact Us",
    },
  ];

  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-nav-links">
          {nav.map((item) => {
            return (
              <li
                className={`${router.pathname === item.route ? "active" : ""}`}
                key={item.id}
              >
                <Link href={item.route}>
                  <a>{item.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
