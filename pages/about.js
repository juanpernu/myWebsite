import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const About = () => (
  <div>
    <Head>
      <title>Juan Pernumian | About</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className='hero'>
      <h1 className='title'>About</h1>
      <p className='description'>
        Hi there! My name is Juan Manuel Pernumian, but I go by Pernu (you know, for short). I'm 29 years old, and
        I currently work as a Front End Engineer at <a href='www.mercadolibre.com.ar'>Mercado Libre</a>, the top
        e-commerce platform in Latin America.
      </p>
      <p className='description'>
        I graduated from University of Buenos Aires, with an Graphic Design degree. I chose it because
        I'm passionate about web design, and I've been since I can remember. I started venturing on
        the field when I was around 16, by building mini websites as a hobby. That's how I taught
        myself HTML and CSS, and learned how to use tools such as Photoshop and Illustrator.
      </p>
      <p className='description'>
        At University I crossed paths with so many different technologies and areas, that's how I ended up learning
        User Experience Design (UX) at <a href='https://stayrelevant.globant.com/en/global-design-summit/'>Globant
        UX Summer Camp</a>.
      </p>
      <p className='description'>
        After that I started working at <a href='https://www.instagram.com/ba.ux/'>Buenos Aires City Government</a> as
        UX Designer bringing to life amazing experiences for the Buenos Aires citizens.
      </p>
      <p className='description'>
        What I most enjoy about my work is translating visual experiences into code, always by exploring new
        horizons and pushing myself to deliver my best.
      </p>
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
        footer {
          position: static;
          padding: 20px 0;
        }
      }
    `}</style>
  </div>
)

export default About;
