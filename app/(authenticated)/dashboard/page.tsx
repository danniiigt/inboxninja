import getCurrentUser from "@/actions/getCurrentUser";
import { LogoutButton } from "./components/LogoutButton";

const DashboardPage = async () => {
  const user = await getCurrentUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <LogoutButton />
    </div>
  );
};

export default DashboardPage;
