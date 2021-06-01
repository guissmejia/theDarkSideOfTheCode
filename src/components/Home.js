import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src="/static/assets/undraw_window.png" alt="window" />
        <div className="home-info">
          <h1 className="home-title">
            Dare to know the perfection of our cosmos through the wonderful
            world of programming!
          </h1>
          <div className="social-links-list">
            <ul>
              <li>
                <Link href="https://www.facebook.com/The-Dark-Side-Of-The-Code-102087901772446">
                  <a target="_blank">
                    <FaFacebookSquare />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/thedarksideofthecode/">
                  <a target="_blank">
                    <FaInstagram />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="tel:+573132726088">
                  <a target="_blank">
                    <FaWhatsapp />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
