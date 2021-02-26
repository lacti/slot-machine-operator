import PlayerIcon from "../../../assets/player.svg";
import React from "react";

export default function EndButton({ onClick }: { onClick: () => void }) {
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
      className={`absolute left-6 bottom-6 ${
        pressed ? "rotate-scale-down" : ""
      }`}
    >
      <img src={PlayerIcon} className="w-12" onClick={onPressed} />
    </div>
  );
}
