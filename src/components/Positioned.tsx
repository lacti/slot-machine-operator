import React from "react";

function Positioned({
  overlay = false,
  direction = "bottom",
  children,
}: {
  overlay?: boolean;
  direction?: "top" | "bottom";
  children: JSX.Element;
}) {
  return (
    <div className="absolute w-full h-full">
      {overlay ? (
        <div
          className="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
          style={{ zIndex: -1 }}
        ></div>
      ) : null}
      <div
        className={`fixed ${direction === "top" ? "top-0" : "bottom-0"} w-full`}
      >
        {children}
      </div>
    </div>
  );
}

export default Positioned;
