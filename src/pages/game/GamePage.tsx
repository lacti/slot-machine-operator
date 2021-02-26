import DialogButton from "./components/DialogButton";
import EndButton from "./components/EndButton";
import EndDialog from "./components/EndDialog";
import EventCard from "./components/EventCard";
import MoneyView from "./components/MoneyView";
import Page from "../../components/Page";
import React from "react";
import SlotGrid from "./components/SlotGrid";
import UpgradeDialog from "./components/UpgradeDialog";
import state from "./state/state";

export default function GamePage({
  onComplete,
}: {
  onComplete: (score: string) => void;
}) {
  const [upgradeDialog, setUpgradeDialog] = React.useState<boolean>(false);
  const [endDialog, setEndDialog] = React.useState<boolean>(false);
  React.useEffect(() => {
    console.log("reset state");
    state.reset();
    return () => {
      console.log("state stop");
      state.stop();
    };
  }, [onComplete]);
  return (
    <Page>
      <MoneyView state={state} />
      <SlotGrid state={state} />
      <DialogButton onClick={() => setUpgradeDialog(true)} />
      <EndButton onClick={() => setEndDialog(true)} />
      <EventCard state={state} />
      {upgradeDialog ? (
        <UpgradeDialog state={state} doClose={() => setUpgradeDialog(false)} />
      ) : (
        <span></span>
      )}
      {endDialog ? (
        <EndDialog
          onEndClick={() => onComplete(state.money.toString())}
          doClose={() => setEndDialog(false)}
        />
      ) : (
        <span></span>
      )}
    </Page>
  );
}
