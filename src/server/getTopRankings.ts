import Ranking from "./models/Ranking";
import text from "../data/text";

export default async function getTopRankings(name: string): Promise<Ranking[]> {
  const response = await fetch(
    `${import.meta.env.VITE_RANKING_API}/top?x-user=${encodeURIComponent(
      name
    )}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    console.error(response);
    alert(text.error_rankingServerIsGone);
  }
  return await response.json();
}
