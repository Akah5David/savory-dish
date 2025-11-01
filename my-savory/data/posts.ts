// Utility function to format dates based on user locale
const formatDateForClient = (date: string): string => {
  const d = new Date(date);
  const userLocale = navigator.language || "en-US";

  return d.toLocaleDateString(userLocale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
};

// Base URL (environment-aware)
export const BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337";

// Fetcher function for Strapi v5
export const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
  
  const resData = await response.json();
  console.log("Raw Strapi v5 response:", resData);

  // Strapi v5: data is already flattened (no more attributes nesting)
  const formattedData = resData.data.map((item: any) => {
    const createdAt = item.createdAt || new Date().toISOString();

    // Handle excerpt (Rich Text / Blocks)
    const excerptValue = item.excerpt;
    const excerptText = Array.isArray(excerptValue)
      ? excerptValue
          .map((block: any) =>
            block.children?.map((child: any) => child.text).join(" ")
          )
          .join(" ")
      : typeof excerptValue === "string"
      ? excerptValue
      : "";

    // Handle image (media)
    const imageData = item.image?.url || item.image?.data?.attributes?.url || "";
    const imageUrl = imageData.startsWith("http")
      ? imageData
      : `${BASE_URL}${imageData}`;

    return {
      id: item.id,
      slug: item.slug,
      title: item.title,
      excerpt: excerptText,
      category: item.category,
      date: formatDateForClient(createdAt),
      readingTime: item.readingTime ? `${item.readingTime} min read` : "—",
      image: imageUrl,
    };
  });

  console.log("Formatted Data (v5):", formattedData);
  return { posts: formattedData };
};

// Strapi v5 API endpoint (still supports populate)
export const POSTS_API_URL = `${BASE_URL}/api/delicacies?populate=*`;
