"use client";

import { Toaster as Sonner } from "sonner";
import ErrorBoundary from "@/components/error-boundary";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Sonner position="top-right" richColors closeButton />
      {children}
    </ErrorBoundary>
  );
}
