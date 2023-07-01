import { useCredentialsForm } from "@/hooks/useCredentialsForm";
import { StepsFooter } from "./StepsFooter";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export const StepThree = ({ user }: { user: any }) => {
  const [loading, setLoading] = useState(false);

  const {
    decrementStep,
    incrementStep,
    hostingEmail,
    hostingPassword,
    hostingServer,
    hostingPort,
    setFormData,
  }: any = useCredentialsForm();

  const defaultValues = {
    hostingEmail:
      (hostingEmail != null && hostingEmail) || user?.hostingEmail || "",
    hostingPassword:
      (hostingPassword != null && hostingPassword) ||
      user?.hostingPassword ||
      "",
    hostingServer:
      (hostingServer != null && hostingServer) || user?.hostingServer || "",
    hostingPort:
      (hostingPort != null && hostingPort) || user?.hostingPort || "",
  };

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues,
  });

  const onSubmit = async ({
    hostingEmail: hostingEmailArg,
    hostingPassword: hostingPasswordArg,
    hostingServer: hostingServerArg,
    hostingPort: hostingPortArg,
  }: {
    hostingEmail: string;
    hostingPassword: string;
    hostingServer: string;
    hostingPort: string;
  }) => {
    if (
      hostingEmailArg === defaultValues.hostingEmail &&
      hostingPasswordArg === defaultValues.hostingPassword &&
      hostingServerArg === defaultValues.hostingServer &&
      hostingPortArg === defaultValues.hostingPort
    )
      return incrementStep();

    setLoading(true);

    try {
      const res = await axios.put(`/api/user/${user.id}`, {
        hostingEmail: hostingEmailArg,
        hostingPassword: hostingPasswordArg,
        hostingServer: hostingServerArg,
        hostingPort: Number(hostingPortArg),
      });

      console.log(res);

      setFormData({
        hosting: true,
        hostingEmail: hostingEmailArg,
        hostingPassword: hostingPasswordArg,
        hostingServer: hostingServerArg,
        hostingPort: hostingPortArg,
      });

      setLoading(false);

      if (res.status === 201) incrementStep();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent className="flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-y-4 flex-col">
            <div className="flex flex-col w-full space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                errorText={errors?.hostingEmail?.message}
                className={errors?.hostingEmail && "border-red-500"}
                placeholder="Ejemplo (consulta@paypal.com)"
                // disabled={loading}
                {...register("hostingEmail", {
                  // EMAIL VALIDATION
                  required: "Este campo es requerido",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "El email no es válido",
                  },
                })}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                }
              />
            </div>
            <div className="flex flex-col w-full space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                placeholder="Contraseña del hosting"
                type="password"
                className={errors?.hostingPassword && "border-red-500"}
                errorText={errors?.hostingPassword?.message}
                // disabled={loading}
                {...register("hostingPassword", {
                  required: "Este campo es requerido",
                })}
              />
            </div>
            <div className="flex flex-col w-full space-y-1.5">
              <Label htmlFor="server">Servidor</Label>
              <Input
                id="server"
                placeholder="Ejemplo (smtp.forwardemail.net)"
                className={errors?.hostingServer && "border-red-500"}
                errorText={errors?.hostingServer?.message}
                // disabled={loading}
                {...register("hostingServer", {
                  required: "Este campo es requerido",
                })}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                    />
                  </svg>
                }
              />
            </div>
            <div className="flex flex-col w-full space-y-1.5">
              <Label htmlFor="port">Puerto</Label>
              <Input
                id="port"
                placeholder="Ejemplo (465)"
                className={errors?.hostingPort && "border-red-500"}
                errorText={errors?.hostingPort?.message}
                // disabled={loading}
                {...register("hostingPort", {
                  required: "Este campo es requerido",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "El puerto debe de ser un número",
                  },
                })}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
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
        <Button type="submit" loading={loading} disabled={loading}>
          Siguiente
        </Button>
      </StepsFooter>
    </form>
  );
};
