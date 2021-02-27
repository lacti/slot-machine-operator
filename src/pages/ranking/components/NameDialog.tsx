import Button from "../../../components/Button";
import Center from "../../../components/Center";
import Dialog from "../../../components/Dialog";
import React from "react";
import text from "../../../data/text";

export default function NameDialog({
  onInput,
}: {
  onInput: (name: string) => void;
}) {
  const [name, setName] = React.useState<string>("");
  return (
    <Center overlay>
      <Dialog
        title={text.nameDialog_title}
        onCloseClick={() => 0}
        bodyHeight="auto"
      >
        <div className="flex flex-col">
          <p className="text-base leading-loose text-center md:p-8 md:text-xl md:leading-loose">
            {text.nameDialog_pleaseInputName}
          </p>
          <div className="h-6"></div>
          <input
            type="text"
            defaultValue={name}
            maxLength={8}
            onChange={(event) => setName(event.target.value)}
            className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent rounded-lg shadow-md appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <div className="h-8"></div>
          <Button
            label={text.commonDialogButton_yes}
            onButtonClick={() => onInput(name)}
          />
          <div className="h-6"></div>
        </div>
      </Dialog>
    </Center>
  );
}
