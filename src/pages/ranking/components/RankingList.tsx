import Button from "../../../components/Button";
import Center from "../../../components/Center";
import GamblerJackpotIcon from "../../../assets/gambler_jackpot.svg";
import { Ranking } from "../../../server/getTopRankings";
import React from "react";
import formatMoney from "../../game/utils/formatMoney";

export default function RankingList({
  rankings,
  onRestart,
}: {
  rankings: Ranking[];
  onRestart: () => void;
}) {
  return (
    <Center>
      <div className="flex flex-col">
        <img src={GamblerJackpotIcon} className="w-24 h-24" />
        <div className="h-8"></div>
        {rankings.map((ranking, index) => (
          <div
            key={`rank${index}`}
            className={`flex flex-row items-center justify-between text-white text-2xl mb-2`}
          >
            <h1 className="mr-4">{ranking.user.substring(0, 8)}</h1>
            <h2>{formatMoney(BigInt(ranking.score))}</h2>
          </div>
        ))}
        <div className="h-8"></div>
        <Button label="다시하기" onButtonClick={onRestart} />
      </div>
    </Center>
  );
}
