import React from "react";

export default function Page({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="flex w-screen h-screen overflow-hidden">{children}</div>
  );
}
