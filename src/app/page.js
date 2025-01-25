"use client";
import "../app/scss/home.scss"
import { useState, useEffect } from 'react';
import Link from "next/link";

const cards = [
  {
    image: 'https://d29fhpw069ctt2.cloudfront.net/photo/53128/preview/carrom-board-coins_preview_5e42.jpg',
    title: 'Carroms',
    text: 'Carroms Fixtures, Results, etc. etc',
    button: 'View',
    redirect: '/carroms'
  },
  // other cards...
];

const Card = ({ image, title, text, button,redirect }) => (
  <a href="#" className="card">
    <div className="card__image">
      <img src={image} alt={title} />
    </div>
    <h2 className="card__title">{title}</h2>
    <div className="card__content">
      <p>{text}</p>
      <Link href={redirect}>
        <span>{button}</span>
      </Link>
    </div>
  </a>
);

// const DarkMode = ({ theme, setTheme }) => {
//   const toggleTheme = () => {
//     setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
//   };

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//     document.body.className = theme;
//   }, [theme]);

//   return (
//     <button className="dark-mode" onClick={toggleTheme}>
//       <span>Toggle {theme === 'theme-light' ? 'Dark Mode' : 'Light Mode'}</span>
//     </button>
//   );
// };

const Header = () => (
  <header className="home-header">
    <div className="grid-container">
      <div className="grid-x align-justify align-middle">
        <div className="cell">
          <h1 className="page-title">
            Sports de Mitsogo
          </h1>
        </div>
        <div className="cell">
          {/* <DarkMode theme={theme} setTheme={setTheme} /> */}
        </div>
      </div>
    </div>
  </header>
);

const Page = () => {
  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'theme-light');

  return (
    <>
      <Header />
      <div className="grid-container">
        <div className="grid-x grid-padding-x grid-margin-y">
          {cards.map((card, index) => (
            <div className="cell medium-4" key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
