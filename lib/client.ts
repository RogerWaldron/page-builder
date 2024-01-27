"use client";

import { usePathname } from "next/navigation";

export function getBrowserURL() {
  const path = usePathname();

  return path;
}
