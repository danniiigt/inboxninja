import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

const AuthenticatedLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.verified) redirect("/credentials");

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AuthenticatedLayout;
