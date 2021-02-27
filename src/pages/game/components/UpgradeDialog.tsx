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
import text from "../../../data/text";

function UpgradeDialog({
  state,
  doClose,
}: {
  state: GameState;
  doClose: () => void;
}) {
  return (
    <Center overlay onOverlayClick={doClose}>
      <Dialog
        title={text.upgradeDialog_title}
        onCloseClick={doClose}
        bodyHeight="auto"
      >
        <div className="flex flex-col">
          <UpgradeButton
            state={state}
            icon={SlotMachineIcon}
            label={text.upgradeDialog_slotLabel}
            levelKey="slotCount"
          />
          <UpgradeButton
            state={state}
            icon={PayPerClickIcon}
            label={text.upgradeDialog_gambleLabel}
            levelKey="gambleLevel"
          />
          <UpgradeButton
            state={state}
            icon={TableFanIcon}
            label={text.upgradeDialog_airLabel}
            levelKey="airLevel"
          />
          <UpgradeButton
            state={state}
            icon={SecurityCameraIcon}
            label={text.upgradeDialog_securityLabel}
            levelKey="securityLevel"
            last
          />
        </div>
      </Dialog>
    </Center>
  );
}
export default observer(UpgradeDialog);
