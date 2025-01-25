// import { useEffect } from "react";
// import Link from "next/link";

// const DarkMode = ({ theme, setTheme }) => {
//   const toggleTheme = () => {
//     setTheme(theme === "theme-light" ? "theme-dark" : "theme-light");
//   };

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     document.body.className = theme;
//   }, [theme]);

//   return (
//     <button className="dark-mode" onClick={toggleTheme}>
//       <span>Toggle {theme === "theme-light" ? "Dark Mode" : "Light Mode"}</span>
//     </button>
//   );
// };

// const Header = ({ theme, setTheme }) => {
//   return (
//     <header className="header">
//       <div className="grid-container">
//         <div className="grid-x align-justify align-middle">
//           <div className="cell">
//           <Link href="/">
//             <h1 className="page-title">Sports de Mitsogo</h1>
//           </Link>
//           </div>
//           <div className="cell">
//             <DarkMode theme={theme} setTheme={setTheme} />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
