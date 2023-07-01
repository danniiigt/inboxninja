"use client";

import { StepOne } from "./StepOne";
import { Card, CardContent } from "@/components/ui/card";
import { StepsHeader } from "./StepsHeader";
import { StepsFooter } from "./StepsFooter";
import { useCredentialsForm } from "@/hooks/useCredentialsForm";
import { StepTwo } from "./StepTwo";
import { FinalStep } from "./FinalStep";
import { StepFour } from "./StepFour";
import { StepThree } from "./StepThree";

export const Steps = ({ user }: { user: any }) => {
  const { step, totalSteps }: any = useCredentialsForm();

  const getCurrentStep = () => {
    switch (step) {
      case totalSteps:
        return <FinalStep user={user} />;
      case 1:
        return <StepOne user={user} />;
      case 2:
        return <StepTwo user={user} />;
      case 3:
        return <StepThree user={user} />;
      case 4:
        return <StepFour user={user} />;

      default:
        return (
          <div>
            <h1>Este paso no existe</h1>
          </div>
        );
    }
  };

  return (
    <Card className="relative h-full min-h-[420px] flex flex-col justify-between border-[0] lg:border-[1px]">
      <StepsHeader />
      {getCurrentStep()}
    </Card>
  );
};
