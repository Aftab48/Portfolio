"use client";

export default function myImageLoader({ src, width, quality }) {
  // Base URL for production only
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://portfolio-aftab.vercel.app"
      : "";

  // Local images (public folder) → load locally in dev, use baseUrl in prod
  if (src.startsWith("/")) {
    return `${baseUrl}${src}?w=${width}&q=${quality || 75}`;
  }

  // Remote images (e.g., Pexels) → keep original URL
  return `${src}?w=${width}&q=${quality || 75}`;
}
