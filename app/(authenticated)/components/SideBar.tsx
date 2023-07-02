"use client";

import { Icons } from "@/components/ui/Icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";

const links = [
  {
    item1: {
      href: "/enviar",
      label: "Enviar mail(s)",
      icon: <Icons.send />,
      iconSolid: <Icons.sendSolid />,
    },
    item2: {
      href: "/colecciones",
      label: "Colecciones",
      icon: <Icons.users />,
      iconSolid: <Icons.usersSolid />,
    },
    item3: {
      href: "/contactos",
      label: "Contactos",
      icon: <Icons.user />,
      iconSolid: <Icons.userSolid />,
    },
    item4: {
      href: "/plantillas",
      label: "Plantillas",
      icon: <Icons.folderClosed />,
      iconSolid: <Icons.folderClosedSolid />,
    },
    item5: {
      href: "/comunidad/plantillas",
      label: "Comunidad",
      icon: <Icons.store />,
      iconSolid: <Icons.storeSolid />,
    },
  },

  {
    item1: {
      href: "/registros",
      label: "Registros",
      icon: <Icons.list />,
      iconSolid: <Icons.listSolid />,
    },
    item2: {
      href: "/ayuda",
      label: "Ayuda",
      icon: <Icons.help />,
      iconSolid: <Icons.helpSolid />,
    },
  },
];

export const IconButton = ({
  children,
  active,
  href,
  label,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  href?: string;
  label?: string;
  onClick?: () => void;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href || "#"}>
          <Button
            onClick={onClick}
            variant="ghost"
            className={`
              p-2
              w-full
              hover:bg-muted
              ${active ? "text-foreground bg-muted" : ""}
            `}
          >
            {children}
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="ml-1">
        {label}
      </TooltipContent>
    </Tooltip>
  );
};

export const SideBar = (props: any) => {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={50}>
      <div
        className="
        h-auto 
        w-[64px] 
        px-3
        border-r 
        text-neutral-400
        flex
        flex-col 
        justify-between
      "
      >
        <div>
          <div className="w-full h-[68px] flex items-center justify-center">
            <IconButton
              active={pathname?.startsWith("/dashboard")}
              href="/dashboard"
              label="Inicio"
            >
              {pathname?.startsWith("/dashboard") ? (
                <Icons.houseSolid />
              ) : (
                <Icons.house />
              )}
            </IconButton>
          </div>

          <Separator />

          {links.map((links, index) => (
            <div key={index}>
              <div className="w-full flex flex-col gap-y-4 py-4">
                {Object.values(links).map((link) => (
                  <IconButton
                    key={link.href}
                    label={link.label}
                    href={link.href}
                    active={pathname?.startsWith(link.href)}
                  >
                    {pathname?.startsWith(link.href)
                      ? link.iconSolid
                      : link.icon}
                  </IconButton>
                ))}
              </div>

              <Separator />
            </div>
          ))}
        </div>

        <div>
          <Separator />
          <div className="flex flex-col py-4 gap-y-2">
            <ThemeSwitcher />
            <IconButton
              href="/ajustes"
              label="Ajustes"
              active={pathname?.startsWith("/ajustes")}
            >
              {pathname?.startsWith("/ajustes") ? (
                <Icons.settingsSolid />
              ) : (
                <Icons.settings />
              )}
            </IconButton>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
