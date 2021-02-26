import React from "react";

function Dialog({
  title,
  children,
  bodyHeight = "h-72",
  onCloseClick,
}: {
  title: string;
  children: JSX.Element;
  bodyHeight?: string;
  onCloseClick?: () => void;
}) {
  return (
    <div className="w-64 mx-auto mt-4 mb-4 overflow-hidden ring-4 ring-yellow-300 rounded-xl">
      <div className="flex px-4 py-3 bg-yellow-200 rounded-t-xl">
        <div className="flex-1 mr-4 font-extrabold text-yellow-600 rounded">
          {title}
        </div>
        <div className="ml-6">
          <span
            className="inline-block w-3 h-3 mr-1 bg-red-400 rounded-full"
            onClick={onCloseClick}
          ></span>
        </div>
      </div>
      <div
        className={`relative px-6 pt-4 pb-4 overflow-auto font-medium text-yellow-600 bg-yellow-100 ${bodyHeight}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Dialog;
