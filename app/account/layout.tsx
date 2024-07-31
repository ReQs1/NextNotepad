import MobileNavbar from "@/app/_components/MobileNavbar";
import Sidebar from "@/app/_components/Sidebar";
import TopNavbar from "@/app/_components/TopNavbar";
import MobileNavbarProvider from "@/app/_context/MobileNavbarProvider";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <MobileNavbarProvider>
        <TopNavbar />
        <MobileNavbar />
      </MobileNavbarProvider>
      <div className="flex flex-1 bg-bg2">
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default Layout;
