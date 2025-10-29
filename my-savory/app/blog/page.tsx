import { BlogBrowser } from "@/components/blog-browser"
import { POSTS_API_URL } from "@/data/posts"

export const metadata = {
  title: "Blog | Savory Stories",
  description: "Browse all recipes and food stories.",
}


export default async function BlogPage() {
  const res = await fetch(POSTS_API_URL, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  console.log("Recipes Page API output", res);

  const resData = await res.json();
  console.log("Recipes Page API output", resData);

  return  <BlogBrowser initialData = {resData} />;
}



