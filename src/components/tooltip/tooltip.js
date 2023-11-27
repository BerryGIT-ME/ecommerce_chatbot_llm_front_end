import "./tooltip.css";

function Tooltip(props) {
  const { message, position, children } = props;

  return (
    <div className="tootlip-wrapper">
      {children}
      <div className={`tooltip-message message-${position}`}>{message}</div>
    </div>
  );
}

export default Tooltip;
