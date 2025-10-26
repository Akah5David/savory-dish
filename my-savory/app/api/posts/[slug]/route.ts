import { NextResponse } from "next/server"
import { posts } from "@/data/posts"

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  return NextResponse.json({ post })
}
