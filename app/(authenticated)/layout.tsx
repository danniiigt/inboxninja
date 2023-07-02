import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "@/app/(authenticated)/components/Navbar";
import { redirect } from "next/navigation";
import { SideBar } from "./components/SideBar";

const AuthenticatedLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.verified) redirect("/credentials");

  return (
    <div className="h-screen w-full flex overflow-hidden">
      <SideBar />
      <div className="flex-1">
        <Navbar user={user} />
        <div className="p-5 bg-gray-100 dark:bg-background h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
