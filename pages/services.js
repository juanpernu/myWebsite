import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";

const Services = () => (
  <div>
    <Head>
      <title>Juan Pernumian | Services</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div className="hero">
      <h1 className="title">How can I help you?</h1>
      <p className="description">
        "Is my company ready to the digital world?", "Where should I start?",
        "Am I scaling as fast as I want?". If you are asking yourself these
        questions, I would love to give you a hand.
      </p>
      <div className="row">
        <a className="card">
          <h3>Consultancy</h3>
          <p>
            Synchronizing capabilities, culture and portfolio has never been
            more important. Let's work together to develop the internal skills
            and best practices that your company needs to reach sales objectives
            using tools for today’s world.
          </p>
        </a>
        <a className="card">
          <h3>Design thinking</h3>
          <p>
            Having a human-centered approach drive by a problem-solving culture
            has never been more important. I invite you to develop innovative
            experiences that your clients will love.
          </p>
        </a>
        <a className="card">
          <h3>Web development</h3>
          <p>
            Take advantage of all the power of the largest window in the world,
            the internet. Every company needs to have a robust presence in the
            digital world, let's create it together.
          </p>
        </a>
      </div>
      <a className="button" href="mailto:juan.pernumian@gmail.com">
        Ask me anything
      </a>
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
        width: 50%;
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
        line-height: 18px;
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
      .button {
        padding: 10px 8px;
        display: inline-block;
        margin-top: 40px;
        background-color: #00ff8b;
        color: #000;
        border: 1px solid #00ff8b;
      }

      .button:hover {
        background-color: #000;
        color: #00ff8b;
        border: 1px solid #00ff8b;
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
        .button {
          margin: 20px 0 60px;
          width: fit-content;
        }
        footer {
          position: static;
        }
      }
    `}</style>
  </div>
);

export default Services;
