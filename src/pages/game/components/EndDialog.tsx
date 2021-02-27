import Button from "../../../components/Button";
import Center from "../../../components/Center";
import Dialog from "../../../components/Dialog";
import Multiline from "../../../components/Multiline";
import React from "react";
import text from "../../../data/text";

export default function EndDialog({
  onEndClick,
  doClose,
}: {
  onEndClick: () => void;
  doClose: () => void;
}) {
  return (
    <Center overlay onOverlayClick={doClose}>
      <Dialog
        title={text.endDialog_title}
        onCloseClick={doClose}
        bodyHeight="auto"
      >
        <div className="flex flex-col">
          <p className="text-base leading-loose text-center md:p-8 md:text-xl md:leading-loose">
            <Multiline messages={text.endDialog_messages} />
          </p>
          <div className="h-8"></div>
          <Button
            label={text.commonDialogButton_yes}
            onButtonClick={onEndClick}
          />
          <div className="h-6"></div>
          <Button label={text.commonDialogButton_no} onButtonClick={doClose} />
          <div className="h-4"></div>
        </div>
      </Dialog>
    </Center>
  );
}
