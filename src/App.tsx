import GamePage from "./pages/game/GamePage";
import IntroPage from "./pages/intro/IntroPage";
import RankingPage from "./pages/ranking/RankingPage";
import React from "react";

interface AppState {
  stage: "intro" | "game" | "ranking";
  score: string;
}

function App() {
  const [state, setState] = React.useState<AppState>({
    stage: "intro",
    score: "0",
  });
  return state.stage === "intro" ? (
    <IntroPage onComplete={() => setState({ stage: "game", score: "0" })} />
  ) : state.stage === "game" ? (
    <GamePage onComplete={(score) => setState({ stage: "ranking", score })} />
  ) : (
    <RankingPage
      score={state.score}
      onComplete={() => setState({ stage: "game", score: "0" })}
    />
  );
}

export default App;
