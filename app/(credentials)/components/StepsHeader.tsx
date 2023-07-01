"use client";

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  credentialsSteps,
  useCredentialsForm,
} from "@/hooks/useCredentialsForm";

export const StepsHeader = () => {
  const { step, totalSteps }: any = useCredentialsForm();

  if (step === totalSteps)
    return (
      <CardHeader className="px-0 lg:px-6">
        <CardTitle>{step}. ¡Listo!</CardTitle>
        <CardDescription>Ya puedes empezar a usar tu cuenta</CardDescription>
      </CardHeader>
    );

  return (
    <CardHeader className="px-0 lg:px-6">
      <CardTitle>
        {step}. {credentialsSteps[step - 1]?.title!}
      </CardTitle>
      <CardDescription>
        {credentialsSteps[step - 1]?.description!}
      </CardDescription>
    </CardHeader>
  );
};
