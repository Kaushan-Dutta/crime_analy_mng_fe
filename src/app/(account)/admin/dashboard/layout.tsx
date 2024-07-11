import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
      <body className="font-rale flex flex-col">
        <div className="border-b-2 border-black container-small fixed w-full max-w-screen-2xl top-0 ">
          <Navbar />
        </div>
        <div className="flex-row gap-5 flex-1 mt-20 ">
          <div className="border-black w-60  border-2 fixed top-0 md:top-20  md:h-[calc(100vh-4rem)] h-screen ">
            <Sidebar />
          </div>
          <div className="md:ml-[20%] flex-1 h-fit">{children}</div>
        </div>
      </body>
    </html>
  );
}
