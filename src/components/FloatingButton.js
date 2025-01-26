import "../app/scss/floating_button.scss";
import "font-awesome/css/font-awesome.min.css";
import { useRouter } from "next/router";
import Link from "next/link";

function FloatingButton({
  isDarkLightOptionEnabled,
  isDarkMode,
  onToggleDarkMode,
}) {
  // Move useRouter to the top level of the component
  const router = useRouter();

  const handleBackClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    router.back();
  };

  return (
    <div className="adminActions">
      <input type="checkbox" name="adminToggle" className="adminToggle" />
      <a className="adminButton" href="#!">
        <i className="fa fa-cog"></i>
      </a>
      <div className="adminButtons">
        <Link href="/" title="Home">
          <i className="fa fa-home"></i>
        </Link>
        {/* Use a <a> tag for back navigation, since Link doesn't support onClick */}
        <a href="#" title="Back" onClick={handleBackClick}>
          <i className="fa fa-arrow-left"></i>
        </a>
        {isDarkLightOptionEnabled && (
          <a href="#" onClick={onToggleDarkMode} title="Dark/Light Mode">
            {isDarkMode ? (
              <i className="fa fa-sun-o"></i>
            ) : (
              <i className="fa fa-moon-o"></i>
            )}
          </a>
        )}
      </div>
    </div>
  );
}

export default FloatingButton;
