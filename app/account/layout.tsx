import TopNavbar from "@/app/_components/TopNavbar";
import MobileNavbarProvider from "../_context/MobileNavbarProvider";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <MobileNavbarProvider>
        <TopNavbar />
      </MobileNavbarProvider>
      <div className="flex flex-1 bg-bg2">
        {/* <Sidebar /> */}
        {children}
      </div>
    </>
  );
}

export default Layout;
