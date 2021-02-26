import Center from "../../../components/Center";
import Dialog from "../../../components/Dialog";
import GameState from "../state/GameState";
import PayPerClickIcon from "../../../assets/pay-per-click.svg";
import React from "react";
import SecurityCameraIcon from "../../../assets/security-camera.svg";
import SlotMachineIcon from "../../../assets/slot-machine.svg";
import TableFanIcon from "../../../assets/table-fan.svg";
import UpgradeButton from "./UpgradeButton";
import { observer } from "mobx-react-lite";

function UpgradeDialog({
  state,
  doClose,
}: {
  state: GameState;
  doClose: () => void;
}) {
  return (
    <Center overlay onOverlayClick={doClose}>
      <Dialog title="업그레이드" onCloseClick={doClose} bodyHeight="auto">
        <div className="flex flex-col">
          <UpgradeButton
            state={state}
            icon={SlotMachineIcon}
            label="추가 구매"
            levelKey="slotCount"
          />
          <UpgradeButton
            state={state}
            icon={PayPerClickIcon}
            label="효율 개선"
            levelKey="gambleLevel"
          />
          <UpgradeButton
            state={state}
            icon={TableFanIcon}
            label="산소 주입"
            levelKey="airLevel"
          />
          <UpgradeButton
            state={state}
            icon={SecurityCameraIcon}
            label="보안 강화"
            levelKey="securityLevel"
            last
          />
        </div>
      </Dialog>
    </Center>
  );
}
export default observer(UpgradeDialog);
