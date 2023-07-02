import { UserNavbar } from "./UserNavbar";
import { HostSwitcher } from "./HostSwitcher";
import { Search } from "@/components/Search";

const Navbar = ({ user }: { user: any }) => {
  return (
    <div
      className="
        w-full 
        h-[68px] 
        px-4
        border-b 
        flex 
        items-center
      "
    >
      <HostSwitcher />
      <div className="ml-auto w-fit flex items-center gap-4">
        <Search />
        <UserNavbar user={user} />
      </div>
    </div>
  );
};

export default Navbar;
