"use client";
import { IconButton } from "./SideBar";
import { Icons } from "@/components/ui/Icons";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  if (theme === "dark")
    return (
      <IconButton label="Modo día" onClick={() => setTheme("light")}>
        <Icons.sun />
      </IconButton>
    );

  return (
    <IconButton label="Modo noche" onClick={() => setTheme("dark")}>
      <Icons.moon />
    </IconButton>
  );
};
