import React from "react";
import Head from "next/head";

const Header = ({ page }) => (
  <Head>
    <title>{`Juan Pernumian | Front-end Dev & UX Designer - ${page}`}</title>
    <meta
      name="description"
      content="Hi, I'm a 31 years old entrepreneur, Javascript dev and UX designer"
    />
    <meta name="author" content="Juan Manuel Pernumian" />
    <meta name="copyright" content="Juan Manuel Pernumian" />
    <meta name="robots" content="index" />
    <meta property="og:type" content="web" />
    <meta property="og:title" content={`Juan Pernumian | ${page}`} />
    <meta
      property="og:site_name"
      content={`Juan Pernumian | Front-end Dev & UX Designer - ${page}`}
    />
    <meta property="twitter:title" content={`Juan Pernumian | ${page}`} />
    <meta
      property="twitter:description"
      content="Hi, I'm a 31 years old entrepreneur, Javascript dev and UX designer"
    />
    <meta name="twitter:site" content="@juanpernu" />
    <meta name="twitter:creator" content="@juanpernu" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default Header;
