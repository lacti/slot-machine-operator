import Multiline from "./Multiline";
import React from "react";

function Card({
  imageSource,
  title,
  messages,
  buttonText = "CLOSE",
  onButtonClick,
}: {
  imageSource: string;
  title: string;
  messages: string[];
  buttonText?: string;
  onButtonClick: () => void;
}) {
  return (
    <div className="max-w-xs px-8 py-8 mx-auto space-y-2 bg-white shadow-md rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block h-24 mx-auto rounded-full sm:mx-0 sm:flex-shrink-0"
        src={imageSource}
        alt={title}
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5 mb-6">
          <p className="text-lg font-semibold text-black">{title}</p>
          <p className="font-medium text-gray-500">
            <Multiline messages={messages} />
          </p>
        </div>
        <button
          className="px-4 py-1 text-sm font-semibold text-purple-600 border border-purple-200 rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
