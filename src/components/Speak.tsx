import Multiline from "./Multiline";
import React from "react";

function Speak({
  imageSource,
  messages,
  onClose,
}: {
  imageSource: string;
  messages: string[];
  onClose: () => void;
}) {
  const [exit, setExit] = React.useState(false);
  const close = React.useCallback(() => {
    setExit(true);
    const timer = setTimeout(onClose, 300);
    return () => clearTimeout(timer);
  }, [setExit, onClose]);
  React.useEffect(() => setExit(false), [setExit, imageSource, messages]);
  return (
    <figure
      className={`flip-in-hor-bottom max-w-xs p-8 mx-auto mb-4 bg-gray-100 select-none shadow-drop-center md:max-w-4xl md:flex rounded-xl md:p-0 md:items-center ${
        exit ? "roll-out-left" : ""
      }`}
      onClick={close}
    >
      <img
        className="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none "
        src={imageSource}
        draggable={false}
      />
      <p className="pt-6 text-lg leading-loose text-center md:p-8 md:text-xl md:leading-loose">
        <Multiline messages={messages} />
      </p>
    </figure>
  );
}

export default Speak;
