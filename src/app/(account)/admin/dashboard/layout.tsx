import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const metadata: Metadata = {
  title: "Admin",
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
        <div className="flx-row gap-5 flex-1 w-full p-3 ">
          <div className="z-20 w-20 md:w-64 fixed md:top-28 top-20 h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)]">
            <Sidebar />
          </div>
          <div className="md:ml-72 ml-24 pt-28 md:mr-10 flex-1 p-5  min-h-screen ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
