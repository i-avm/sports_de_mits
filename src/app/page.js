"use client";

import { useRouter } from "next/navigation";
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
      "https://t3.ftcdn.net/jpg/03/10/62/12/360_F_310621281_foEqKBGtGlNWFQRePgdF5BpLOFyTsnzO.jpg",
    title: "Badminton",
    text: "Stay tuned! Coming soon.",
    button: "View",
    redirect: "/badminton",
  },
  {
    image:
      "https://i.pinimg.com/474x/07/f3/de/07f3de81d5546be4b96378a5b8404307.jpg",
    title: "Cricket",
    text: "Stay tuned! Coming soon.",
    button: "🔒",
    redirect: "/cricket",
  },
  {
    image:
      "https://c4.wallpaperflare.com/wallpaper/956/865/266/football-player-jump-wallpaper-preview.jpg",
    title: "Football",
    text: "Stay tuned! Coming soon.",
    button: "🔒",
    redirect: "/football",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/businessman-moving-chess-piece-chess-board-game-strategy_954932-3658.jpg",
    title: "Chess",
    text: "Stay tuned! Coming soon.",
    button: "🔒",
    redirect: "/chess",
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

export const Header = () => {
  const router = useRouter();
  const onClickLeaderboard = () => {
    router.push("/leaderboard");
  };
  const onClickHome = () => {
    router.push("/");
  };
  return (
    <header className="home-header">
      <div className="grid-container">
        <div className="grid-x align-justify align-middle">
          <div
            className="cell"
            style={{ cursor: "pointer" }}
            onClick={onClickHome}
          >
            <img src="/club-logo.jpeg" alt="SDM" width={80} height={80} />
          </div>
          <div
            className="cell"
            style={{ cursor: "pointer" }}
            onClick={onClickLeaderboard}
          >
            <img
              src="https://png.pngtree.com/png-clipart/20240429/ourmid/pngtree-leaderboard-icon-png-image_12339126.png"
              alt="Rankings"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const Page = () => {
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
