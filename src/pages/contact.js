import React from "react";
import Link from "next/link";
import Background from "../components/Background";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="container">
      <Background />
      <section className="contact">
        <div className="contact-detail">
          <figure className="contact-image">
            <img src="/static/assets/contact.png" />
          </figure>
          <article className="contact-info">
            <p>
              If you require any information and advice about our program, you
              can Follow us on our social networks and write us your questions,
              we will answer your messages as quickly as possible!
            </p>
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
          </article>
        </div>
      </section>
    </main>
  );
};

export default Contact;
