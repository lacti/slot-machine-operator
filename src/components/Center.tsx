import React from "react";

function Center({
  overlay = false,
  children,
  onOverlayClick,
}: {
  overlay?: boolean;
  children: JSX.Element;
  onOverlayClick?: () => void;
}) {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
      {overlay ? (
        <div
          className="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
          style={{ zIndex: -1 }}
          onClick={onOverlayClick}
        ></div>
      ) : null}
      {children}
    </div>
  );
}

export default Center;
