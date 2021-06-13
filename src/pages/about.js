import React from "react";
import Background from "../components/Background";

const About = () => {
  return (
    <main className="container">
      <Background />
      <section className="about">
        <div className="about-info">
          <article className="about-detail">
            <p>
              We are people who have the greatest interest and passion for the
              universe and programming.
              <br />
              <br />
              Our main objective is teaching, the transmission of knowledge
              through one of the pillars of today such as technology.
              <br />
              <br />
              Through the specialized programming branches in the astronomical
              sector, more will be known about the universe in which we live
              having as approaches programming languages ​​such as Python, C, C
              ++ among others, in addition to the acquisition of knowledge in
              data analysis, Big Data and data science.
            </p>
          </article>
          <figure className="about-image">
            <img src="/static/assets/programming.png" />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default About;
