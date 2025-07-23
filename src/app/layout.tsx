import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import { ThemeProvider } from "next-themes";

const walsheim = localFont({
  src: 'fonts/gt-walsheim-bold.woff',
  variable: '--font-heading',
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
});


export const metadata: Metadata = {
  title: "Personal Portfolio - Jonah Wambua",
  description:
    "Responsive professional portfolio website showcasing my projects, skills, and experience. Built with Next.js, Tailwind, and shadcn",
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
      className={`${inter.variable} ${walsheim.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
