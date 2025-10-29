const formDateForClient = (date: string): string => {
  const d = new Date(date);
  const userLocale = navigator.language || "en-US";

  return d.toLocaleDateString(userLocale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
};

export const BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337";

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  const resData = await response.json();

  console.log("Fetching data from Strapi v5 API:", resData);

  const formattedData = resData.data.map((item: any) => {
    const createdAt = formDateForClient(
      item.createdAt ?? new Date().toISOString()
    );

    // Extract plain text from rich text (excerpt)
    const excerptText = Array.isArray(item.excerpt)
      ? item.excerpt
          .map((block: any) =>
            block.children?.map((child: any) => child.text).join(" ")
          )
          .join(" ")
      : "";

    return {
      id: item.id,
      slug: item.slug,
      title: item.title,
      excerpt: excerptText,
      category: item.category,
      date: createdAt,
      readingTime: item.readingTime ? `${item.readingTime} min read` : "—",
      image: item.image?.url ? `${BASE_URL}${item.image.url}` : "",
    };
  });

  console.log("Formatted Data:", formattedData);
  return { posts: formattedData };
};

console.log("This is the output from fetcher function", fetcher);

export const POSTS_API_URL = `${BASE_URL}/api/delicacies?populate=*`;
