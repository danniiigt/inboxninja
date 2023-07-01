"use client";

import { Icons } from "@/components/ui/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export const RegisterForm = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const password = watch("password");
  const handleCredentialsRegister = () => {
    setLoading("credentials");
    reset();
  };

  const handleSocialRegister = async (provider: string) => {
    setLoading(provider);
    signIn(provider, { callbackUrl: "http://localhost:3000/credentials" });
  };

  return (
    <Card className="w-full max-w-[575px] border-none">
      <CardHeader>
        <CardTitle>Crear una cuenta</CardTitle>
        <CardDescription className="text-neutral-500">
          Unete a Ninjabox con plan gratuito
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col lg:flex-row gap-x-4 gap-y-2">
          <Button
            onClick={() => handleSocialRegister("github")}
            color="#F8F"
            variant="outline"
            className="w-full"
            loading={loading === "github"}
            disabled={loading != null}
          >
            {loading !== "github" && <Icons.gitHub className="mr-2 h-4 w-4" />}
            Github
          </Button>
          <Button
            onClick={() => handleSocialRegister("google")}
            color="#F8F"
            variant="outline"
            className="w-full"
            loading={loading === "google"}
            disabled={loading != null}
          >
            {loading !== "google" && <Icons.google className="mr-2 h-4 w-4" />}
            Google
          </Button>
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              O CONTINUA CON
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(handleCredentialsRegister)}
          className="w-full space-y-4"
        >
          <div className="flex flex-col w-full space-y-1.5">
            <Label htmlFor="firstName">Nombre</Label>
            <Input
              id="firstName"
              errorText={errors?.firstName?.message}
              className={errors?.firstName && "border-red-500"}
              placeholder="Tu nombre"
              disabled={loading != null}
              {...register("firstName", {
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
            <Label htmlFor="lastName">Apellidos</Label>
            <Input
              id="lastName"
              placeholder="Tus apellidos"
              className={errors?.lastName && "border-red-500"}
              errorText={errors?.lastName?.message}
              disabled={loading != null}
              {...register("lastName", {
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
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Tu correo electrónico"
              className={errors?.email && "border-red-500"}
              errorText={errors?.email?.message}
              disabled={loading != null}
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
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              className={errors?.password && "border-red-500"}
              errorText={errors?.password?.message}
              disabled={loading != null}
              placeholder="Contraseña segura"
              {...register("password", {
                required: "Este campo es requerido",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener mínimo 8 caracteres",
                },
              })}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="passwordConfirm">Confirmar contraseña</Label>
            <Input
              id="passwordConfirm"
              type="password"
              className={errors?.passwordConfirm && "border-red-500"}
              errorText={errors?.passwordConfirm?.message}
              disabled={loading != null}
              placeholder="Contraseña segura"
              {...register("passwordConfirm", {
                required: "Este campo es requerido",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener mínimo 8 caracteres",
                },
                validate: (value) => {
                  return (
                    value === password || "Las contraseñas deben coincidir"
                  );
                },
              })}
            />
          </div>
          <Button
            className="w-full"
            loading={loading === "credentials"}
            disabled={loading != null}
            type="submit"
          >
            Crear cuenta
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center pb-0">
        <h1 className="text-center text-neutral-400">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="hover:text-primary">
            Inicia sesión
          </Link>
        </h1>
      </CardFooter>
    </Card>
  );
};
