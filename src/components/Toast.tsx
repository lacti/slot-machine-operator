import React from "react";

function Toast({
  imageSource,
  title,
  message,
}: {
  imageSource: string;
  title: string;
  message: string;
}) {
  return (
    <div className="flex items-center p-6 mx-auto mt-8 mb-8 bg-white shadow-md w-72 rounded-xl">
      <div className="flex-shrink-0">
        <img className="w-12 h-12" src={imageSource} alt={title} />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-gray-500">{message}</p>
      </div>
    </div>
  );
}

export default Toast;
