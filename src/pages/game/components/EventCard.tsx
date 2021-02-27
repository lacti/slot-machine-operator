import Card from "../../../components/Card";
import Center from "../../../components/Center";
import GameState from "../state/GameState";
import React from "react";
import eventCards from "../../../data/eventCards";
import { observer } from "mobx-react-lite";
import text from "../../../data/text";

function EventCard({ state }: { state: GameState }) {
  if (state.pendingEvents.length === 0) {
    return <span></span>;
  }
  const first = eventCards[state.pendingEvents[0]];
  return (
    <Center overlay>
      <Card
        title={first.title}
        messages={first.messages}
        imageSource={first.image}
        buttonText={text.eventCard_closeButton}
        onButtonClick={() => state.popEventCard()}
      />
    </Center>
  );
}
export default observer(EventCard);
