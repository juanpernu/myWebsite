import React from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Header from "../components/head";

const Home = () => (
  <div>
    <Header page="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Juan Pernumian</h1>
      <p className="description">
        I'm a 31 years-old entrepreneur from Buenos Aires, Argentina. MBA
        Candidate at{" "}
        <a className="link" href="https://iae.edu.ar">
          IAE Business School
        </a>
        , Javascript software developer & Graphic Design graduate at University
        of Buenos Aires.
      </p>
      <p className="description">
        <code>Clean code</code> and <code>pixel-perfect</code> advocate.
      </p>

      <div className="row">
        <Link href="/services">
          <a className="card">
            <h3>Services &rarr;</h3>
            <p>How can I help you?</p>
          </a>
        </Link>
        <Link href="/articles">
          <a className="card">
            <h3>Articles &rarr;</h3>
            <p>Sometimes I write.</p>
          </a>
        </Link>
        <Link href="/about">
          <a className="card">
            <h3>About &rarr;</h3>
            <p>A little about myself.</p>
          </a>
        </Link>
        <Link href="/contact">
          <a className="card">
            <h3>Contact &rarr;</h3>
            <p>I can't wait to hear from you!</p>
          </a>
        </Link>
      </div>
    </div>
    <footer>Copyright - Juan Manuel Pernumian®</footer>

    <style jsx>{`
      :global(*) {
        font-size: 16px;
        box-sizing: border-box;
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
        color: #000;
        font-size: 0.875em;
        font-weight: 400;
        padding: 0.15em 0.3em;
        background-color: #00ff8b;
        font-size: 19px;
      }
      .hero {
        width: 100%;
        padding: 100px 20px 0;
        color: #fff;
        animation: up 1s;
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.6;
        font-size: 4.441em;
      }
      .description {
        font-size: 21px;
        line-height: 32px;
        width: 60%;
        line-height: 1.6;
        letter-spacing: -0.003em;
        color: #fff;
      }
      a.link {
        font-size: 21px;
        line-height: 32px;
        color: #00ff8b;
        text-decoration: none;
      }
      a.link:hover {
        background: #00ff8b;
        color: #000;
      }
      .row {
        margin-top: 80px;
        display: flex;
        flex-direction: row;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
        margin-right: 20px;
      }
      .card:last-child {
        margin-right: 0;
      }
      .card:hover {
        border-color: #00ff8b;
      }
      .card h3 {
        margin: 0;
        color: #00ff8b;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #fff;
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

export default Home;
