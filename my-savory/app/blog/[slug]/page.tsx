import { notFound } from "next/navigation";
import { POSTS_API_URL } from "@/data/posts";
import PostClient from "./postClient";

type ExcerptBlock = {
  type: string;
  children: { text: string; type: string }[];
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(POSTS_API_URL, {
    next: { revalidate: 10 },
  });
  const resData = await res.json();
  console.log("resData from slug", resData);

  const posts = resData.data.map((post: any) => ({
    title: post?.title,
    slug: post?.slug,
    excerpt: Array.isArray(post?.excerpt)
      ? post.excerpt
          .map((expt: ExcerptBlock) =>
            expt.children.map((child) => child.text).join(" ")
          )
          .join(" ")
      : "",
    readingTime: post?.readingTime,
    date: post?.createdAt, // formatted for client
    category: post?.category,
    image: post?.image?.url || "",
  }));
  console.log("Formatted posts from slug", posts);
  const post = posts.find((p: any) => p.slug === params.slug);

  if (!post) notFound();

  return {
    title: post ? `${post?.title} | Savory Stories` : "Post | Savory Stories",
    description: post?.excerpt ?? "Recipe and food stories",
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetch(POSTS_API_URL, {
    next: { revalidate: 10 },
  });
  const resData = await data.json();
  const posts = resData.data.map((post: any) => ({
    title: post?.title,
    slug: post?.slug,
    excerpt: Array.isArray(post?.excerpt)
      ? post.excerpt
          .map((expt: ExcerptBlock) =>
            expt.children.map((child) => child.text).join(" ")
          )
          .join(" ")
      : "",
    readingTime: post?.readingTime,
    date: post?.createdAt, // formatted for client
    category: post?.category,
    image: post?.image?.url || "",
  }));
  console.log("Formatted posts from slug", posts);

  const postExists = posts.find((p: any) => p.slug === params.slug);
  if (!postExists) notFound();

  return <PostClient slug={params.slug} initialData={posts} />;
}
