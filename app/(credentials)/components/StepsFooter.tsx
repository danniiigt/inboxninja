"use client";

import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCredentialsForm } from "@/hooks/useCredentialsForm";
import { signOut } from "next-auth/react";

export const StepsFooter = ({ children }: { children: React.ReactNode }) => {
  const { step, totalSteps, incrementStep, decrementStep }: any =
    useCredentialsForm();

  return (
    <div>
      <Separator />
      <CardFooter className="p-3 px-0 lg:px-6">
        <div className="flex w-full gap-4 justify-end">
          {children}
          {/* <Button
            onClick={() => {
              step === 1 ? signOut() : decrementStep();
            }}
            variant="ghost"
          >
            {step === 1 ? "Cancelar" : "Anterior"}
          </Button>
          <Button
            onClick={() => {
              incrementStep();
              onAction?.();
            }}
          >
            {step === totalSteps ? "Finalizar" : "Siguiente"}
          </Button> */}
        </div>
      </CardFooter>
    </div>
  );
};
