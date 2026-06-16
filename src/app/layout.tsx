import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

const walsheim = localFont({
  src: "fonts/gt-walsheim-bold.woff",
  variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jonah Wambua | Full-Stack Developer & Designer",
  description:
    "Portfolio of Jonah Wambua, a Nairobi-based full-stack developer and UI/UX designer building responsive websites, product interfaces, and brand systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${walsheim.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
