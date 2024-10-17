import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Heading from "./components/Heading";

export const metadata: Metadata = {
  title: "FakeSpot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-rale flex flex-col">
        <div className="fixed w-full z-20 max-w-screen-2xl p-3">
          <Navbar />
        </div>
        <div className="container-large ">
          <div className="pt-28 flex flex-col gap-10">
            <Heading />
            <div className="flex-1  gap-5 h-fit ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
