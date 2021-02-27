import React from "react";

export default function Multiline({
  messages,
}: {
  messages: string | string[];
}) {
  const lines = typeof messages === "string" ? messages.split(/\n/g) : messages;
  return (
    <>
      {lines.map((line, index) =>
        index === 0 ? (
          line
        ) : (
          <span key={`msg${index}`}>
            <br />
            {line}
          </span>
        )
      )}
    </>
  );
}
