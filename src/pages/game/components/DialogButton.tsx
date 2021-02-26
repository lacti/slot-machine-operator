import React from "react";
import ThreeSevenIcon from "../../../assets/777.svg";

export default function DialogButton({ onClick }: { onClick: () => void }) {
  const [pressed, setPressed] = React.useState<boolean>(false);
  const onPressed = React.useCallback(() => {
    if (!pressed) {
      setPressed(true);
      setTimeout(() => setPressed(false), 1000);
      onClick();
    }
  }, [pressed, setPressed, onClick]);
  return (
    <div
      className={`absolute right-6 bottom-6 ${
        pressed ? "rotate-scale-down" : ""
      }`}
    >
      <img src={ThreeSevenIcon} className="w-16" onClick={onPressed} />
    </div>
  );
}
