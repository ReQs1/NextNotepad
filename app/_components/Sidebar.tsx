import SidebarLinks from "@/app/_components/SidebarLinks";

function Sidebar() {
  return (
    <aside className="sticky top-[61px] hidden h-[calc(100vh-61px)] w-16 justify-center border-r border-secondary bg-bg1 py-6 sm:flex">
      <SidebarLinks />
    </aside>
  );
}

export default Sidebar;
