import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const Works = () => (
  <div>
    <Head>
      <title>Juan Pernumian | Works</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className='hero'>
      <h1 className='title'>Works</h1>
      <p className='description'>
        Working on this! Ironic, isn't it?
      </p>
    </div>

    <style jsx>{`
      * {
        font-size: 16px;    
      }
      code {
        color: #ff3860;
        font-size: .875em;
        font-weight: 400;
        padding: .15em .3em;
        background-color: #f5f5f5;
        font-size: 1em;
        border-radius: 5px;
      }
      .hero {
        width: 100%;
        padding: 100px 20px 0;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.6;
        font-size: 2.441em;
      }
      .description {
        font-size: 1em;
        width: 490px;
        line-height: 1.6;
        color: #555;
      }
    `}</style>
  </div>
)

export default Works;
