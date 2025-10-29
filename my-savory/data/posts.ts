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

  console.log("Raw Strapi response:", resData);

  const formattedData = resData.data.map((item: any) => {
    // Handle both possible shapes (flattened or nested attributes)
    const data = item.attributes ?? item;

    const createdAt =
      data.createdAt || item.createdAt || new Date().toISOString();

    const excerptValue = data.excerpt ?? item.excerpt;
    const excerptText = Array.isArray(excerptValue)
      ? excerptValue
          .map((block: any) =>
            block.children?.map((child: any) => child.text).join(" ")
          )
          .join(" ")
      : typeof excerptValue === "string"
      ? excerptValue
      : "";

    const imageData =
      data.image?.data?.attributes?.url || data.image?.url || item.image || "";

    const imageUrl = imageData.startsWith("http")
      ? imageData
      : `${BASE_URL}${imageData}`;

    return {
      id: item.id,
      slug: data.slug,
      title: data.title,
      excerpt: excerptText,
      category: data.category,
      date: formDateForClient(createdAt),
      readingTime: data.readingTime ? `${data.readingTime} min read` : "—",
      image: imageUrl,
    };
  });

  console.log("Formatted Data:", formattedData);
  return { posts: formattedData };
};

export const POSTS_API_URL = `${BASE_URL}/api/delicacies?populate=*`;
