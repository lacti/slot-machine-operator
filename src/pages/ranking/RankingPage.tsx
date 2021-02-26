import NameDialog from "./components/NameDialog";
import Page from "../../components/Page";
import RankingList from "./components/RankingList";
import React from "react";
import getTopRankings from "../../server/getTopRankings";
import uploadRanking from "../../server/uploadRanking";

interface Ranking {
  rank: number;
  user: string;
  score: string;
}

export default function RankingPage({
  score,
  onComplete,
}: {
  score: string;
  onComplete: () => void;
}) {
  const [rankings, setRankings] = React.useState<Ranking[] | null>(null);
  const refreshRanking = React.useCallback(
    (name: string) => {
      uploadRanking(name, score)
        .then(() => getTopRankings(name))
        .then(setRankings)
        .catch(console.error);
    },
    [setRankings]
  );
  return (
    <Page>
      {rankings === null ? (
        <NameDialog onInput={refreshRanking} />
      ) : (
        <RankingList rankings={rankings} onRestart={onComplete} />
      )}
    </Page>
  );
}
