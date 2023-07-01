import { create } from "zustand";

const initialData = {
  step: 1,
  totalSteps: 3,

  // STEP 1 FORM
  firstname: null,
  lastname: null,
  email: null,
  image: null,

  // HOSTING
  hosting: null,
  hostingEmail: null,
  hostingPassword: null,
  hostingServer: null,
  hostingPort: null,
};

export const credentialsSteps = [
  {
    step: 1,
    title: "Datos básicos",
    description: "Confirma tus credenciales",
  },
  {
    step: 2,
    title: "Hosting de email",
    description: "Podrás añadir otros hosting más tarde",
  },
  {
    step: 3,
    title: "Añadir hosting",
    description: "Completa los datos de tu hosting de email",
  },
];

export const useCredentialsForm = create((set) => ({
  ...initialData,
  incrementStep: () => set((state: any) => ({ step: state.step + 1 })),
  decrementStep: () => set((state: any) => ({ step: state.step - 1 })),
  incrementTotalSteps: () =>
    set((state: any) => ({ totalSteps: state.totalSteps + 1 })),
  decrementTotalSteps: () =>
    set((state: any) => ({ totalSteps: state.totalSteps - 1 })),
  setTotalSteps: (totalSteps: number) => set({ totalSteps }),
  setFirstname: (firstname: string) => set({ firstname }),
  setLastname: (lastname: string) => set({ lastname }),
  setEmail: (email: string) => set({ email }),
  setFormData: (data: any) => set((state: any) => ({ ...state, ...data })),
  reset: () => set({ ...initialData }),
}));
