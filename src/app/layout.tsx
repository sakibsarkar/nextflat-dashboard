import "./globals.css";
import MapBox from "@/components/MapBox/MapBox";
import Navbar from "@/shared/Navbar/Navbar";
import Sidebar from "@/shared/Sidebar/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-start items-start h-screen w-screen overflow-hidden">
          <Navbar />

          {/* bottom  */}
          <div className="h-full w-full flex justify-start items-start bg-red-500">
            <Sidebar />
            <MapBox />
            {children}
          </div>


        </div>
      </body>
    </html>
  );
}
