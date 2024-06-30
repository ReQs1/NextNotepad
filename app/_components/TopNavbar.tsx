import ThemeButton from "@/app/_components/ThemeButton";
import SignOutBtn from "./SignOutBtn";

function TopNavbar() {
  return (
    <nav className="px-10 py-4 bg-bg1 flex justify-between">
      <p>top nav</p>
      <div className="flex items-center gap-8">
        <ThemeButton />
        <SignOutBtn />
      </div>
    </nav>
  );
}

export default TopNavbar;
