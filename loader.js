'use client'
 
export default function myImageLoader ({ src, width, quality }) {
    
  return `https://portfolio-aftab.vercel.app/${src}?w=${width}&q=${quality || 75}`
}