"use client";

import "../app/scss/home.scss";
import Link from "next/link";

const cards = [
  {
    image:
      "https://d29fhpw069ctt2.cloudfront.net/photo/53128/preview/carrom-board-coins_preview_5e42.jpg",
    title: "Carroms",
    text: "Stay updated with the latest Carroms fixtures, match results, and tournament stats!",
    button: "View",
    redirect: "/carroms",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/businessman-moving-chess-piece-chess-board-game-strategy_954932-3658.jpg",
    title: "Chess",
    text: "Coming Soon! Stay tuned with us!",
    button: "🔒",
    redirect: "/chess",
  },
  {
    image:
      "https://media.istockphoto.com/id/2121085620/photo/badminton-sport.jpg?s=612x612&w=0&k=20&c=uHy8wwxRoehJHNemHXozRTATg7CSWYGajFSYP0DPc8s=",
    title: "Badminton",
    text: "Coming Soon! Stay tuned with us!",
    button: "🔒",
    redirect: "/badminton",
  },
  {
    image:
      "https://lh3.googleusercontent.com/proxy/AtbfNi4HuBJPnYRWC5eOyiYpWFrIwqa_vigaexQK7U7_iyavGySy6qsZXrzeY3c599tASizO3ybi7QvniVZu1--GwjRkW0FHhUorU_kzGkY1F0hOvTf0ZIrpioZD8D0eW6dXeLfxWwuuoKmAx0Q7_XThazJzGw",
    title: "Football",
    text: "Coming Soon! Stay tuned with us!",
    button: "🔒",
    redirect: "/football",
  },
  {
    image:
      "https://i.pinimg.com/474x/07/f3/de/07f3de81d5546be4b96378a5b8404307.jpg",
    title: "Cricket",
    text: "Coming Soon! Stay tuned with us!",
    button: "🔒",
    redirect: "/cricket",
  },
  {
    image: "https://www.uxade.com/assets/images/z-andmore-506x300.png",
    title: "🤩",
    text: "",
    button: "🔒",
    redirect: "",
  },
  // other cards...
];

const Card = ({ image, title, text, button, redirect }) => (
  <div href="#" className="card">
    <div className="card__image">
      <img src={image} alt={title} />
    </div>
    <h2 className="card__title">{title}</h2>
    <div className="card__content">
      <p>{text}</p>
      {button == "View" ? (
        <Link href={redirect}>
          <span>{button}</span>
        </Link>
      ) : (
        <span>{button}</span>
      )}
    </div>
  </div>
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
          <h1 className="page-title text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-400 to-indigo-500 drop-shadow-lg">
            Sports de Mitsogo
          </h1>
        </div>
        <div className="cell">
          <img src="/club-logo.jpeg" alt="SDM" width={80} height={80}/>
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
            <div className="cell medium-3" key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
