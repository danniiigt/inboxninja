import getCurrentUser from "@/actions/getCurrentUser";
import { Stepper } from "./components/Stepper";
import { redirect } from "next/navigation";

const CredentialsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (user.verified == true) redirect("/dashboard");

  return (
    <div className="w-screen h-screen flex items-center justify-center p-6">
      <div className="max-w-[650px] w-full">
        {children && (
          <>
            <Stepper />
            <div className="mt-2">{children}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default CredentialsLayout;
