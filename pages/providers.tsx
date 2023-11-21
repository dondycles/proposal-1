// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useThemeStore } from "../store";
import Nav from "../components/nav";
import SideBar from "../components/sideBar";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const theme = useThemeStore();
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (isHydrated)
    return (
      <NextUIProvider
        className={`${theme.mode} bg-background text-foreground text-xs sm:text-sm max-h-[100dvh] h-screen w-full overflow-x-hidden overflow-y-auto flex flex-col`}
      >
        <Nav />
        <main className="flex flex-row w-full h-screen max-h-full overflow-hidden ">
          <SideBar />
          {children}
        </main>
      </NextUIProvider>
    );
}
