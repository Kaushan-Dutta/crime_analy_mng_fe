import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Heading from "./components/Heading";

export const metadata: Metadata = {
  title: "Account",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-rale flex flex-col">
        <div className="fixed w-full z-20 max-w-screen-2xl">
          <Navbar />
        </div>
        <div className="container-large h-[calc(100vh-4rem)]">
          <div className="pt-28 flex flex-col gap-10">
            <Heading />
            <div className="flex-1  gap-5 h-fit bg-slate-600">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
