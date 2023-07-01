import { useState } from "react";
import { StepsFooter } from "./StepsFooter";
import { Button } from "@/components/ui/button";
import { useCredentialsForm } from "@/hooks/useCredentialsForm";
import { CardContent } from "@/components/ui/card";
import { FinalStepHeader } from "./FinalStepHeader";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import axios from "axios";

export const FinalStep = ({ user }: { user: any }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    decrementStep,
    firstname,
    lastname,
    email,
    hosting,
    hostingEmail,
    hostingPassword,
    hostingServer,
    hostingPort,
  }: any = useCredentialsForm();

  const onEndCredentials = async () => {
    setLoading(true);

    const res = await axios.put(`/api/user/verify/${user.id}`);

    if (res.status === 201) {
      router.refresh();
    }

    setLoading(false);
  };

  return (
    <>
      <CardContent
        className="
          p-6 
          pt-0 
          px-0 
          lg:px-6 
          flex-1 
        "
      >
        <div className="flex justify-between">
          <div className="space-y-3 w-full">
            <FinalStepHeader
              title="Nombre"
              subtitle={firstname || user?.firstname}
            />
            <FinalStepHeader
              title="Apellidos"
              subtitle={lastname || user?.lastname}
            />
            <FinalStepHeader title="Email" subtitle={email || user?.email} />
            <FinalStepHeader
              title="Hosting"
              subtitle={hosting || "Por defecto"}
            />
          </div>

          {(user?.hostingEmail || hosting) && (
            <>
              <Separator orientation="vertical" className="h-auto mx-8" />
              <div className="space-y-3 w-full">
                <FinalStepHeader
                  title="Email de hosting"
                  subtitle={hostingEmail || user?.hostingEmail}
                />
                <FinalStepHeader
                  title="Servidor de hosting"
                  subtitle={hostingServer || user?.hostingServer}
                />
                <FinalStepHeader
                  title="Puerto de hosting"
                  subtitle={hostingPort || user?.hostingPort}
                />
                {/* <FinalStepHeader
                  title="Hosting"
                  subtitle={hosting || "Por defecto"}
                /> */}
              </div>
            </>
          )}
        </div>
      </CardContent>
      <StepsFooter>
        <Button
          type="button"
          variant="ghost"
          onClick={decrementStep}
          disabled={loading}
        >
          Anterior
        </Button>
        <Button
          type="submit"
          onClick={onEndCredentials}
          loading={loading}
          disabled={loading}
        >
          Finalizar
        </Button>
      </StepsFooter>
    </>
  );
};
