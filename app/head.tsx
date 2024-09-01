// components/Head.tsx
import NextHead from 'next/head';

export default function Head({ 
  title = "Portfolio | Chetan Kumar - Python Developer", 
  description = "I'm Chetan Kumar, a Python developer based in Delhi, India. My journey in Python development began during my first year of college." 
}) {
  return (
    <NextHead>
      {/* Basic Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content="Chetan Kumar, portfolio, kumar, python dev, nextjs portfolio, portfolio design, portfolio website, personal portfolio" />

      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content="Chetan Kumar's Portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://chetan-kr.vercel.app" />
      <meta property="og:image" content="https://chetan-kr.vercel.app/og-image.png" />

      {/* Canonical Link */}
      <link rel="canonical" href="https://chetan-kr.vercel.app" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Chetan Kumar" />
      <meta name="language" content="English" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="https://chetan-kr.vercel.app" />
      <meta name="application-name" content="Chetan Kumar's Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Chetan Kumar's Portfolio" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Page Title */}
      <title>{title}</title>
    </NextHead>
  );
}
