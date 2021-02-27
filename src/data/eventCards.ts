import EventType from "./models/EventType";
import GamblerJackpotIcon from "../assets/gambler_jackpot.svg";
import GamblerSmokyIcon from "../assets/gambler_smoky.svg";
import ThiefIcon from "../assets/thief.svg";

const eventCards: {
  [T in EventType]: { image: string; title: string; messages: string[] };
} = {
  thief: {
    image: ThiefIcon,
    title: "도둑이 들었습니다!",
    messages: ["보안이 허술한 틈을 타", "도둑이 죄다 훔쳐갔습니다", "ㅜㅜ"],
  },
  smoky: {
    image: GamblerSmokyIcon,
    title: "그가 찾아왔습니다..!",
    messages: ["확률에 함부로", "손 대는거 아닙니다..!"],
  },
  jackpot: {
    image: GamblerJackpotIcon,
    title: "잭팟이 터졌습니다!",
    messages: [
      "고객이 모든 돈을 가져갔습니다.",
      "고객에게 기쁨을!",
      "당신에게 슬픔을!",
    ],
  },
};

export default eventCards;
