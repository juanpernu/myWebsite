import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Icons from '../components/Icons';

const Contact = () => (
  <div>
    <Head>
      <title>Juan Pernumian | Contact</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className='hero'>
      <h1 className='title'>Contact</h1>
      <p className='description'>
        I can't wait to hear from you.
        If you want to get in touch with me, you can drop me a line or two at <a href="mailto:juan.pernumian@gmail.com">juan.pernumian@gmail.com</a>.
        Or, you can contact me trough one of these networks.
      </p>
      <div>
        <a className='contact-link' target='_blank' href='https://www.linkedin.com/in/juan-manuel-pernumian-01455043/'>
          <Icons type='linkedin' />
        </a>
        <a className='contact-link' target='_blank' href='https://github.com/juanpernu'>
          <Icons type='github' />
        </a>
        <a className='contact-link' target='_blank' href='https://www.instagram.com/juanpernu/'>
          <Icons type='instagram' />
        </a>
      </div>
      <footer>Copyright - Juan Manuel Pernumian®</footer>
    </div>

    <style jsx>{`
      * {
        font-size: 16px;    
      }
      footer {
        font-size: 0.8em;
        position: fixed;
        bottom: 0;
        margin: 0;
        padding-bottom: 20px;
        color: #ddd;
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
      a {
        color: #00ff8b;
        text-decoration: none;
      }
      a:hover {
        background: #00ff8b;
        color: #fff;
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

      @media only screen and (max-width: 800px) {
        .hero {
          display: flex;
          flex-direction: column;
          padding: 50px 20px 0;
          width: auto;
        }
        .title {
          font-size: 1.953em;
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
      }
    `}</style>
  </div>
)

export default Contact;
