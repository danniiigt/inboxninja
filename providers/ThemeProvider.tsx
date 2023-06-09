"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
