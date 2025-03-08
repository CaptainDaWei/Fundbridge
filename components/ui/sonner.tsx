"use client"

import { useTheme } from "next-themes"
import { Toaster as SonnerToaster } from "sonner"

export function Toaster() {
  const { theme } = useTheme()
  
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: theme === "dark" ? "#1f2937" : "#ffffff",
          color: theme === "dark" ? "#ffffff" : "#000000",
          border: "1px solid",
          borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
        },
      }}
    />
  )
}
