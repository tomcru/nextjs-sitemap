import { MetadataRoute } from "next";

const PAGE_SIZE = 1000;

const fetchGames = async (pageNumber: number) => {
  const gamesResponse = await fetch(
    `https://api.gamegator.net/v1/products?pageSize=${PAGE_SIZE}&pageNumber=${pageNumber}&currency=usd&order=nameAsc`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

  return await gamesResponse.json();
};

export async function generateSitemaps() {
  return [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ];
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  console.log(id);
  const games = await fetchGames(id);

  return games.data.items.map((game: any) => ({
    url: game.slug,
    changeFrequency: "daily",
  }));
}
