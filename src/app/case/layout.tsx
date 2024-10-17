import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Case File",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full  font-rale flex flex-col">
        <div className="fixed w-full z-20 p-3">
          <Navbar />
        </div>

        <div className=" container-extralarge  flex-1 h-fit">
          {children}
        </div>
      </body>
    </html>
  );
}
