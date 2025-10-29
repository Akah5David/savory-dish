"use client";
import useSWR from "swr";

import { fetcher, POSTS_API_URL } from "@/data/posts";
import { PostCard } from "@/components/post-card";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: [{ type: string; children: [{ type: string; text: string }] }];
  category: string;
  date: string;
  readingTime: string;
  image: { url: string };
};

export default function ClientRecipes({
  initialData,
}: {
  initialData?: Post[];
}) {
  const { data, isLoading } = useSWR<{ posts: Post[] }>(
    POSTS_API_URL,
    fetcher,
    { fallbackData: initialData ? { posts: initialData } : undefined }
  );

  console.log("data posted for recipe : ", data?.posts);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PageTransition>
          <main className="mx-auto max-w-6xl px-4 py-10">
            <header className="flex items-center justify-between">
              <h1 className="font-serif text-3xl">Recipes</h1>
              <Link
                href="/blog"
                className="text-sm text-foreground/80 hover:underline"
              >
                Browse all posts
              </Link>
            </header>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data?.posts.map((p) => (
                <PostCard
                  key={p.id}
                  post={{
                    id: p.id, // use documentId as id
                    title: p.title,
                    slug: p.slug,
                    excerpt: p.excerpt
                      ?.map((block) =>
                        block.children?.map((child) => child.text).join(" ")
                      )
                      .join(" "),
                    category: p.category,
                    readingTime: p.readingTime
                      ? `${p.readingTime} min read`
                      : "—",
                    date: p.date,
                    image: p.image?.url || "",
                  }}
                />
              ))}
            </div>
          </main>
        </PageTransition>
      )}
    </>
  );
}
