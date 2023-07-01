"use client";

import { useCredentialsForm } from "@/hooks/useCredentialsForm";

const Step = ({ completed }: { completed: boolean }) => {
  return (
    <div className="bg-zinc-900 rounded w-full h-3">
      <div
        className={`h-full rounded bg-green-500 ${
          completed ? "w-full" : "w-0"
        } transition-all duration-500 ease-in-out}`}
      ></div>
    </div>
  );
};

export const Stepper = () => {
  const { step, totalSteps }: any = useCredentialsForm();

  if (!totalSteps) return null;

  return (
    <div className="flex w-full gap-x-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <Step key={i} completed={i < step} />
      ))}
    </div>
  );
};
