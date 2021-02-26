import React from "react";

function Button({
  label,
  onButtonClick,
}: {
  label: string;
  onButtonClick: () => void;
}) {
  return (
    <button
      className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700"
      onClick={onButtonClick}
    >
      {label}
    </button>
  );
}

export default Button;
