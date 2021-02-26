export default async function uploadRanking(
  name: string,
  score: string
): Promise<void> {
  const response = await fetch(
    `${import.meta.env.VITE_RANKING_API}?x-user=${encodeURIComponent(name)}`,
    {
      method: "PUT",
      body: score,
    }
  );
  if (!response.ok) {
    console.error(response);
    alert("랭킹 서버가 죽었습니다..!");
  }
}
