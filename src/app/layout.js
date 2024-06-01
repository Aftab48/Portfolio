import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aftab Portfolio",
  description: "my portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>
          {children}
          <SpeedInsights />
          <Analytics />
          </TransitionProvider>
      </body>
    </html>
  );
}
