export interface Ranking {
  rank: number;
  user: string;
  score: string;
}

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
    alert("랭킹 서버가 죽었습니다..!");
  }
  return await response.json();
}
