"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { StepsFooter } from "./StepsFooter";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import axios from "axios";
import { useState } from "react";
import { useCredentialsForm } from "@/hooks/useCredentialsForm";
import { UserImageUpload } from "@/components/UserImageUpload";

export const StepOne = ({ user }: { user: any }) => {
  const [loading, setLoading] = useState(false);
  const { incrementStep, firstname, lastname, email, image, setFormData }: any =
    useCredentialsForm();

  const defaultValues = {
    firstname: (firstname != null && firstname) || user?.firstname || "",
    lastname: (lastname != null && lastname) || user?.lastname || "",
    email: (email != null && email) || user?.email || "",
  };

  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
    watch,
  } = useForm({
    defaultValues,
  });

  const onImageChange = async (imageUrl: string) => {
    setFormData({ image: imageUrl });
    await axios.put(`/api/user/${user.id}`, {
      image: imageUrl,
    });
  };

  const onSubmit = async ({
    firstname: firstnameArg,
    lastname: lastnameArg,
    email: emailArg,
  }: {
    firstname: string;
    lastname: string;
    email: string;
  }) => {
    if (
      firstnameArg === defaultValues.firstname &&
      lastnameArg === defaultValues.lastname &&
      emailArg === defaultValues.email
    )
      return incrementStep();

    setLoading(true);

    const res = await axios.put(`/api/user/${user.id}`, {
      firstname: firstnameArg,
      lastname: lastnameArg,
      email: emailArg,
    });

    setFormData({
      firstname: firstnameArg,
      lastname: lastnameArg,
      email: emailArg,
    });

    setLoading(false);

    if (res.status === 201) incrementStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent className="px-0 lg:px-6">
        <UserImageUpload user={user} onChange={onImageChange} value={image} />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-y-4 flex-col">
            <div className="flex flex-col w-full space-y-1.5">
              <Label htmlFor="firstname">Nombre</Label>
              <Input
                id="firstname"
                errorText={errors?.firstname?.message}
                className={errors?.firstname && "border-red-500"}
                placeholder="Tu nombre"
                disabled={loading}
                {...register("firstname", {
                  required: "Este campo es requerido",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El nombre debe tener menos de 20 caracteres",
                  },
                })}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                }
              />
            </div>
            <div className="flex flex-col w-full space-y-1.5">
              <Label htmlFor="lastname">Apellidos</Label>
              <Input
                id="lastname"
                placeholder="Tus apellidos"
                className={errors?.lastname && "border-red-500"}
                errorText={errors?.lastname?.message}
                disabled={loading}
                {...register("lastname", {
                  required: "Este campo es requerido",
                  minLength: {
                    value: 2,
                    message: "El apellido debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "El apellido debe tener menos de 30 caracteres",
                  },
                })}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                }
              />
            </div>
            <div className="flex flex-col w-full space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Tu correo electrónico"
                className={errors?.email && "border-red-500"}
                errorText={errors?.email?.message}
                disabled={loading}
                {...register("email", {
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
          </div>
        </div>
      </CardContent>
      <StepsFooter>
        <Button
          type="button"
          variant="ghost"
          onClick={() => signOut()}
          disabled={loading}
        >
          Cancelar
        </Button>
        <Button type="submit" loading={loading} disabled={loading}>
          Siguiente
        </Button>
      </StepsFooter>
    </form>
  );
};
