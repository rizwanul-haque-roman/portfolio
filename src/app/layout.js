import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "rizwanul.dev",
  description:
    "Rizwanul is an enthusiastic developer who can convert thoughts into reality with code. By tirelessly seeking new ideas, he merge creativity with practicality when creating amazing websites that are eye candy for the users.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
