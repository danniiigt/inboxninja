import getCurrentUser from "@/actions/getCurrentUser";

import { redirect } from "next/navigation";
import { Steps } from "../components/Steps";

const CredentialsPage = async () => {
  const user = await getCurrentUser();

  return (
    <div>
      <Steps user={user} />
    </div>
  );
};

export default CredentialsPage;
