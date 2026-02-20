"use client";

import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FloatingWhatsApp />
    </>
  );
}
