import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({ 
  subsets: ["latin"],
  weight: ["400"]
 });

export const metadata = {
  icons: {
    icon: '/logo.png',
  },
  title: "Moufid Sghiri",
  description: "Passionate creative developer from Tunisia, who blends the worlds of art and code to create captivating digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
