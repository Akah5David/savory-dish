"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavBar from "./navbar";

export function SiteHeader() {
  const pathname = usePathname();

  let savoryClassName;
  let imageClassName;
  let containerClassName;

  if (pathname === "/auth/signup" || pathname === "auth/signin") {
    savoryClassName = "font-serif text-7xl tracking-tight";
    imageClassName = "h-26 w-26 rounded-full bg-primary";
    containerClassName = "flex items-center justify-center px-4 py-3";
  } else {
    savoryClassName = "font-serif text-lg tracking-tight";
    imageClassName = "h-12 w-12 rounded-full bg-primary";
    containerClassName =
      "mx-auto max-w-6xl px-4 py-3 flex items-center justify-between";
  }
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className={containerClassName}>
        <Link href="/" className="inline-flex items-center gap-2">
          <img
            src="/upload/savory.png"
            alt="Savory"
            className={imageClassName}
          />

          <span className={savoryClassName}>Savory Stories</span>
        </Link>
        {pathname !== "/auth/signup" && pathname !== "auth/signin" && (
          <NavBar />
        )}
      </div>
    </header>
  );
}
