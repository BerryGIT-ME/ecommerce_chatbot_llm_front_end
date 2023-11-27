import { useEffect, useState } from "react";
import "./introMessage.css";
import { useAppContext } from "../../context/AppContext";

function IntroMessage() {
  const [className, setClassName] = useState("");
  const { setShowTutoial } = useAppContext();
  useEffect(() => {
    const showIntroMessage = () => {
      setClassName("show-intro-message");
      setTimeout(() => {
        removeIntroMessage();
      }, 10000);
    };
    const removeIntroMessage = () => {
      setClassName("hide-intro-message");
    };

    setTimeout(() => {
      showIntroMessage();
    }, 2000);
  }, []);

  const handleNeverMind = () => {
    setClassName("hide-intro-message");
  };
  const handleOpenTutorial = () => {
    setClassName("hide-intro-message");
    setShowTutoial(true);
  };
  return (
    <div className={`intro-text ${className}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "Pacifico",
        }}>
        New here ?
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={handleOpenTutorial}
            className="tutorial-btn"
            style={{ marginRight: "10px" }}>
            Open Tutorial
          </button>
          <button
            onClick={handleNeverMind}
            className="tutorial-btn">
            Never mind
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroMessage;
