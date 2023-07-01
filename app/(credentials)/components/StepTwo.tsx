import { StepsFooter } from "./StepsFooter";
import { Button } from "@/components/ui/button";
import { useCredentialsForm } from "@/hooks/useCredentialsForm";
import { CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/Icons";

export const StepTwo = ({ user }: { user: any }) => {
  const {
    decrementStep,
    incrementStep,
    incrementTotalSteps,
    setTotalSteps,
  }: any = useCredentialsForm();

  const handleDefaultHosting = () => {
    setTotalSteps(3);
    incrementStep();
  };

  const handleAddHosting = () => {
    setTotalSteps(4);
    incrementStep();
  };

  return (
    <div className="flex-1 grid grid-rows-[1fr_auto]">
      <CardContent
        className="
          p-6 
          pt-0 
          px-0 
          lg:px-6 
          grid 
          grid-cols-2 
          flex-1 
          gap-4
        "
      >
        <button
          onClick={handleAddHosting}
          className="
            border 
            rounded 
            shadow 
            p-4 
            bg-zinc-900 
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-4 
            text-neutral-400
            hover:border-neutral-600
            hover:text-neutral-300
            transition
            duration-300
          "
        >
          <Icons.add className="w-24 h-24" />
          <div>
            <h1>Añadir hosting</h1>
            <h1 className="text-sm text-neutral-500">(Avanzado)</h1>
          </div>
        </button>
        <button
          onClick={handleDefaultHosting}
          className="
            border 
            rounded 
            shadow 
            p-4 
            bg-zinc-900 
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-4 
            text-neutral-400
            hover:border-neutral-500
            hover:text-neutral-300
            transition
            duration-300
          "
        >
          <Icons.check className="w-24 h-24" />
          <div>
            <h1>Usar por defecto</h1>
            <h1 className="text-sm text-neutral-500">(Fácil)</h1>
          </div>
        </button>

        <h1 className="col-span-2 text-neutral-500 text-sm">
          *El hosting de email sirve para enviar correos desde tu dominio. Por
          defecto usará inboxninja@gmail.com. Podrás cambiarlo más tarde.
        </h1>
      </CardContent>
      <StepsFooter>
        <Button
          type="button"
          variant="ghost"
          onClick={decrementStep}
          // disabled={loading}
        >
          Anterior
        </Button>
        <Button
          type="submit"
          onClick={incrementStep}
          disabled
          // loading={loading}
        >
          Siguiente
        </Button>
      </StepsFooter>
    </div>
  );
};
