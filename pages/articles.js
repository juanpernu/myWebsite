import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";

const Articles = () => (
  <div>
    <Head>
      <title>Juan Pernumian | Works</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div className="hero">
      <h1 className="title">Articles</h1>
      <p className="description">
        Sometimes I like to write ideas, here are some of the articles I wrote.
      </p>
      <div className="row">
        <Link href="https://juanpernu.medium.com/qu%C3%A9-significa-ser-full-stack-designer-198aa231117b">
          <a className="card">
            <h3>¿Qué significa ser Full Stack Designer? &rarr;</h3>
            <p>
              The importance as a designer of having tech knowledge or skills.
            </p>
            <p className="time">3 min read.</p>
          </a>
        </Link>
        <Link href="https://juanpernu.medium.com/qu%C3%A9-significa-ser-full-stack-designer-198aa231117b">
          <a className="card">
            <h3>Dos enfoques para tu desarrollo profesional &rarr;</h3>
            <p>
              Two different ways to approach your skill set or career
              development for modern jobs.
            </p>
            <p className="time">3 min read.</p>
          </a>
        </Link>
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
      .row {
        margin-top: 80px;
        display: flex;
        flex-direction: row;
      }
      .card {
        padding: 18px 18px 24px;
        width: 300px;
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
        line-height: 27px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #fff;
      }
      .card .time {
        color: #00ff8b;
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
        .footer {
          position: static;
        }
      }
    `}</style>
  </div>
);

export default Articles;
