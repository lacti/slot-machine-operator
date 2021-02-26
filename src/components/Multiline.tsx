import React from "react";

export default function Multiline({ messages }: { messages: string[] }) {
  return (
    <>
      {messages.map((message, index) =>
        index === 0 ? (
          message
        ) : (
          <span key={`msg${index}`}>
            <br />
            {message}
          </span>
        )
      )}
    </>
  );
}
