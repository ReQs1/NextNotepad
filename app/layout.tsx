import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/app/_lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | NextNotepad",
    default: "NextNotepad",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("flex min-h-dvh flex-col antialiased", inter.className)}
      >
        <ThemeProvider
          disableTransitionOnChange
          enableSystem={false}
          defaultTheme="light"
        >
          <ClerkProvider afterSignOutUrl="/sign-in">{children}</ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
