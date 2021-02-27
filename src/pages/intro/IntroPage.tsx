import Center from "../../components/Center";
import Page from "../../components/Page";
import React from "react";
import Speak from "../../components/Speak";
import introScenes from "../../data/introScenes";
import text from "../../data/text";

export default function IntroPage({ onComplete }: { onComplete: () => void }) {
  const [sceneNumber, setSceneNumber] = React.useState<number>(0);
  const onClose = React.useCallback(() => {
    if (sceneNumber + 1 < introScenes.length) {
      setSceneNumber((old) => old + 1);
    } else {
      onComplete();
    }
  }, [sceneNumber, setSceneNumber, onComplete]);
  return (
    <Page>
      <h1 className="w-full mt-32 text-4xl font-extrabold text-center text-white">
        {text.gameTitle_intro}
      </h1>
      <Center>
        <Speak
          imageSource={introScenes[sceneNumber].image}
          messages={introScenes[sceneNumber].messages}
          onClose={onClose}
        />
      </Center>
    </Page>
  );
}
