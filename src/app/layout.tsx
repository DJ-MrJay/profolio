import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

const walsheim = localFont({
  src: "fonts/gt-walsheim-bold.woff",
  variable: "--font-heading",
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
      className={walsheim.variable}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
