import "../app/scss/floating_button.scss"
import 'font-awesome/css/font-awesome.min.css';

import Link from "next/link";

function FloatingButton() {
  const handleBackClick = () => {
    window.history.back()
  }
  return (
    <div class="adminActions">
      <input type="checkbox" name="adminToggle" class="adminToggle" />
      <a class="adminButton" href="#!">
        <i class="fa fa-cog"></i>
      </a>
      <div class="adminButtons">
        <Link href="/" title="Home">
          <i class="fa fa-home"></i>
        </Link>
        <Link href="" title="Back" onClick={handleBackClick}>
          <i class="fa fa-arrow-left"></i>
        </Link>
      </div>
    </div>
  );
}

export default FloatingButton
