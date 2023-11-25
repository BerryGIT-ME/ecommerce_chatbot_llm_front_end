import "./titlebar.css";
import MLogo_ from "./mlogo.svg";

function TitleBar() {
  return (
    <nav>
      <a href="/" className="brand-name">
        <img src={MLogo_} alt="logo" />
      </a>
    </nav>
  );
}

export default TitleBar;
