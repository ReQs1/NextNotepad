import Sidebar from "@/app/_components/Sidebar";
import TopNavbar from "@/app/_components/TopNavbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopNavbar />
      <div className="flex h-screen bg-bg2">
        {/* <Sidebar /> */}
        {children}
      </div>
    </>
  );
}

export default Layout;
