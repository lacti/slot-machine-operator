import Button from "../../../components/Button";
import Center from "../../../components/Center";
import Dialog from "../../../components/Dialog";
import React from "react";

export default function EndDialog({
  onEndClick,
  doClose,
}: {
  onEndClick: () => void;
  doClose: () => void;
}) {
  return (
    <Center overlay onOverlayClick={doClose}>
      <Dialog title="할만큼 했습니다!" onCloseClick={doClose} bodyHeight="auto">
        <div className="flex flex-col">
          <p className="text-base leading-loose text-center md:p-8 md:text-xl md:leading-loose">
            현재 점수를 랭킹에 기록하고
            <br />
            게임을 종료할까요?
          </p>
          <div className="h-8"></div>
          <Button label="네" onButtonClick={onEndClick} />
          <div className="h-6"></div>
          <Button label="아니요" onButtonClick={doClose} />
          <div className="h-4"></div>
        </div>
      </Dialog>
    </Center>
  );
}
