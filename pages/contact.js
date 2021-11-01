import React from "react";
import Header from "../components/head";
import Nav from "../components/nav";
import Icons from "../components/Icons";

const Contact = () => (
  <div>
    <Header page="Contact" />
    <Nav />
    <div className="hero">
      <h1 className="title">Contact</h1>
      <p className="description">
        I can't wait to hear from you. If you want to get in touch with me, you
        can drop me a line or two at{" "}
        <a href="mailto:juan.pernumian@gmail.com">juan.pernumian@gmail.com</a>.
        Or, you can contact me trough one of these networks.
      </p>
      <div>
        <a
          className="contact-link"
          target="_blank"
          href="https://www.linkedin.com/in/juan-manuel-pernumian-01455043/"
        >
          <Icons type="linkedin" colorFill="#fff" />
        </a>
        <a
          className="contact-link"
          target="_blank"
          href="https://github.com/juanpernu"
        >
          <Icons type="github" colorFill="#fff" />
        </a>
        <a
          className="contact-link"
          target="_blank"
          href="https://www.instagram.com/juanpernu/"
        >
          <Icons type="instagram" colorFill="#fff" />
        </a>
      </div>
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
        padding: 100px 20px 0;
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
      .contact-link {
        margin-right: 10px;
      }
      .contact-link:hover {
        background: none;
      }
      .contact-link:hover :global(.svgPath) {
        fill: #00ff8b;
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
      }
    `}</style>
  </div>
);

export default Contact;
