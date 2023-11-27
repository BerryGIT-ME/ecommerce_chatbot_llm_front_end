import "./titlebar.css";
import { CartIcon, HelpIcon, RobotIcon } from "../send-icon/Icons";
import Tooltip from "../tooltip/tooltip";
import IntroMessage from "../intro-message/IntroMessage";

function TitleBar() {
  return (
    <div className="title-bar">
      <div
        style={{ margin: "0rem 1rem", display: "flex", alignItems: "center" }}>
        <RobotIcon className={"title-robot"} />
        <p className="title-bar-text">Sturten AI</p>
      </div>
      <div>
        <Tooltip
          message={"Start a quick tutorial"}
          position={"right"}>
          <HelpIcon />
        </Tooltip>
        <Tooltip
          message={"Click to see items in the cart"}
          position={"right"}>
          <CartIcon />
        </Tooltip>
      </div>
      <IntroMessage />
    </div>
  );
}

export default TitleBar;
