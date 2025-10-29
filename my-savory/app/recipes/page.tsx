import ClientRecipes from "./ClientRecipes";
import { POSTS_API_URL } from "@/data/posts";
export const metadata = {
  title: "Recipes",
  description: "All recipes from Savory Stories.",
};

export default async function RecipesPage() {
  const res = await fetch(POSTS_API_URL, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  console.log("Recipes Page API output", res);

  const resData = await res.json();
  console.log("Recipes Page API output", resData);

  return <ClientRecipes initialData={resData} />;
}
