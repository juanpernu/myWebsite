import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/works', label: 'Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li>
          <Link href={href} key={key}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
        margin: 0px;
      }
      nav > ul {
        padding: 20px;
      }
      li {
        display: flex;
      }
      a {
        color: #00ff8b;
        text-decoration: none;
        font-size: 13px;
        padding: 5px 7px;
        border: 1px solid transparent;
      }
      a:hover {
        border: 1px solid #00ff8b;
      }
    `}</style>
  </nav>
)

export default Nav;
