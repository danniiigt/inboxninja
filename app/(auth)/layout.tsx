import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Crear una cuenta - InboxNinja",
  description: "Crea una cuenta en InboxNinja para empezar a usarlo.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (session) redirect("/dashboard");

  return (
    <div className="flex w-full justify-center xl:justify-between h-screen">
      <div className="bg-zinc-800 w-2/3 h-full hidden lg:block bg-[url('/images/email-bg.jpg')] bg-center bg-no-repeat bg-cover brightness-[30%]"></div>
      <div className="w-full lg:w-1/3 lg:min-w-[500px] max-w-[625px] flex flex-col items-center justify-center relative">
        {children}
        <Link href="/" className="text-neutral-400 hover:text-primary">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
