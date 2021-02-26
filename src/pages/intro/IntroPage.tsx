import BankruptcyIcon from "../../assets/bankruptcy.svg";
import CarIcon from "../../assets/car.svg";
import CasinoCircle from "../../assets/casino_circle.svg";
import CasinoEntrance from "../../assets/casino_entrance.svg";
import Center from "../../components/Center";
import Page from "../../components/Page";
import React from "react";
import Speak from "../../components/Speak";

interface Scene {
  image: string;
  messages: string[];
}

const scenes: Scene[] = [
  {
    image: BankruptcyIcon,
    messages: ["나는", "주식에 손만 대면", "무조건 망하는 마이너스의 손"],
  },
  {
    image: CarIcon,
    messages: [
      "이 능력 십분 살려",
      "꼴보기 싫은 놈 망하라고",
      "그 주식에 올인했는데",
    ],
  },
  {
    image: CasinoEntrance,
    messages: ["하필 그게 대박이 나냐...", "", "그냥 도박이나 하자"],
  },
  {
    image: CasinoCircle,
    messages: ["본격 슬롯머신 운영 게임", "", "", "시작"],
  },
];

export default function IntroPage({ onComplete }: { onComplete: () => void }) {
  const [sceneNumber, setSceneNumber] = React.useState<number>(0);
  const onClose = React.useCallback(() => {
    if (sceneNumber + 1 < scenes.length) {
      setSceneNumber((old) => old + 1);
    } else {
      onComplete();
    }
  }, [sceneNumber, setSceneNumber, onComplete]);
  return (
    <Page>
      <h1 className="w-full mt-32 text-4xl font-extrabold text-center text-white">
        도전! 슬롯 운영왕
      </h1>
      <Center>
        <Speak
          imageSource={scenes[sceneNumber].image}
          messages={scenes[sceneNumber].messages}
          onClose={onClose}
        />
      </Center>
    </Page>
  );
}
