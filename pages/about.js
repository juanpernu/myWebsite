import React from "react";
import Header from "../components/head";
import Nav from "../components/nav";

const About = () => (
  <div>
    <Header page="About" />
    <Nav />
    <div className="hero">
      <h1 className="title">About</h1>
      <p className="description">
        Hi there! My name is Juan Manuel Pernumian, but I go by Pernu (you know,
        for short). I'm 31 years old, and I'm living the entrepreneur's life
        trying to innovate and make life easier for dentists whit{" "}
        <a href="https://www.bilog.com.ar">Bilog</a>. My curiosity and hunger
        for knowledge led me to be a candidate of the MBA at{" "}
        <a href="https://iae.edu.ar">IAE Business School</a>.
      </p>
      <p className="description">
        I graduated from University of Buenos Aires, with an Graphic Design
        degree. I chose it because I'm passionate about web design, and I've
        been since I can remember. I started venturing on the field when I was
        around 16, by building mini websites as a hobby. That's how I taught
        myself HTML and CSS, and learned how to use tools such as Photoshop and
        Illustrator.
      </p>
      <p className="description">
        At University I crossed paths with so many different technologies and
        areas, that's how I ended up learning User Experience Design (UX) at{" "}
        <a href="https://stayrelevant.globant.com/en/global-design-summit/">
          Globant UX Summer Camp
        </a>
        .
      </p>
      <p className="description">
        After that I started working at{" "}
        <a href="https://www.instagram.com/ba.ux/">
          Buenos Aires City Government
        </a>{" "}
        as UX Designer bringing to life amazing experiences for the Buenos Aires
        citizens to jump to a Javascript developer career path at the most large
        latin american e-commerce,{" "}
        <a href="https://www.mercadolibre.com.ar/">Mercado Libre</a>.
      </p>
      <p className="description">
        What I most enjoy about my work is translating visual experiences into
        code, always by exploring new horizons and pushing myself to deliver my
        best.
      </p>
    </div>
    <footer>Copyright - Juan Manuel Pernumian®</footer>

    <style jsx>{`
      * {
        font-size: 16px;
      }
      footer {
        font-size: 0.8em;
        position: fixed;
        bottom: 0;
        margin: 0;
        padding: 0 0 20px 20px;
        color: #ddd;
      }
      code {
        color: #ff3860;
        font-size: 0.875em;
        font-weight: 400;
        padding: 0.15em 0.3em;
        background-color: #f5f5f5;
        font-size: 1em;
        border-radius: 5px;
      }
      .hero {
        width: 100%;
        padding: 100px 20px 60px;
        color: #333;
        animation: up 1s;
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.6;
        font-size: 4.441em;
        color: #fff;
      }
      .description {
        font-size: 21px;
        line-height: 32px;
        width: 60%;
        line-height: 1.6;
        letter-spacing: -0.003em;
        color: #fff;
      }
      a {
        color: #00ff8b;
        text-decoration: none;
        font-size: 21px;
      }
      a:hover {
        background: #00ff8b;
        color: #000;
      }
      @keyframes up {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @media only screen and (max-width: 800px) {
        .hero {
          display: flex;
          flex-direction: column;
          padding: 50px 20px 0;
          width: auto;
        }
        .title {
          font-size: 34px;
          letter-spacing: -0.016em;
          line-height: 42px;
        }
        .description {
          font-size: 18px;
          width: 100%;
          line-height: 28px;
          letter-spacing: -0.003em;
          color: #fff;
        }
        .row {
          flex-direction: column;
        }
        .card {
          margin: 0 0 20px;
        }
        footer {
          position: static;
          padding: 20px;
        }
      }
    `}</style>
  </div>
);

export default About;
