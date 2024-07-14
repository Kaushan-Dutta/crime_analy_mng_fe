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
        <div className="fixed w-full z-20 max-w-screen-2xl">
          <Navbar />
        </div>
        <div className="flex-row gap-5 flex-1  ">
          <div className=" w-60  fixed  top-0 md:top-20  md:h-[calc(100vh-4rem)] h-screen ">
            <Sidebar />
          </div>
          <div className="md:ml-72 md:mr-10 pt-28 container-small  flex-1 h-fit">{children}</div>
        </div>
      </body>
    </html>
  );
}
