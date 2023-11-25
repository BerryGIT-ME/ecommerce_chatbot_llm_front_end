import "./titlebar.css";
import { CartIcon, RobotIcon } from "../send-icon/Icons";

function TitleBar() {
  return (
    <div className="title-bar">
      <div
        style={{ margin: "0rem 1rem", display: "flex", alignItems: "center" }}>
        <RobotIcon className={"title-robot"} />
        <p className="title-bar-text">Sturten AI</p>
      </div>
      <CartIcon />
    </div>
  );
}

export default TitleBar;
