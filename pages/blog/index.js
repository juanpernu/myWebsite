import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../components/nav';

const Blog = () => (
  <div className='root'>
    <Head>
      <title>Juan Pernumian | Blog</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav navType={'blog'} />
    <div className='hero'>
      <h1 className='title'>Welcome, this is my Blog.</h1>
      <p className='description'>
        Unlike my website, this is the digital space where I'm more designer than a Front-ender. Feel free
        to come and read something! It's still in spanish, but writing in your own language is already quite
        difficult, right?
      </p>
      <div className='row'>
        <Link href='/blog/one' as='/blog?post=1'>
          <a className='card'>
            <h3>La angustia en los tiempos modernos &rarr;</h3>
          </a>
        </Link>
      </div>
      <footer>Copyright - Juan Manuel Pernumian®</footer>
    </div>

    <style jsx>{`
      * {
        font-size: 16px;
      }
      .root {
        background-color: #00ff8b;
        position: absolute;
        width: 100%;
        height: 100%;
      }
      footer {
        font-size: 0.8em;
        position: fixed;
        bottom: 0;
        margin: 0;
        padding-bottom: 20px;
        color: #ddd;
      }
      .hero {
        width: 100%;
        padding: 100px 20px 0;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        font-size: 2.441em;
        color: #fff;
      }
      .description {
        font-size: 1em;
        width: 490px;
        line-height: 1.6;
        color: #f1f1f1;
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
        border: 1px solid #ddd;
        margin-right: 20px;
      }
      .card:last-child {
        margin-right: 0;
      }
      .card:hover {
        border-color: #fff;
      }
      .card h3 {
        margin: 0;
        color: #fff;
        line-height: 1.4;
        font-size: 18px;
      }

      @media only screen and (max-width: 800px) {
        .hero {
          display: flex;
          flex-direction: column;
          padding: 50px 20px 0;
          width: auto;
        }
        .description {
          font-size: 1em;
          width: auto;
          line-height: 1.6;
          color: #555;
        }
        .row {
          flex-direction: column;
        }
        .card {
          margin: 0 0 20px;
        }
        footer {
          position: static;
          padding: 20px 0;
        }
      }
    `}</style>
  </div>
)

export default Blog;
