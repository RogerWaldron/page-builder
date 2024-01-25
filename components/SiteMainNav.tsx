"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";

export function SiteMainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
      <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
        {/* <DeployButton /> */}
        <div className="hidden gap-8 py-2 text-base md:flex">
          <Link href="/" className="flex items-center mr-6 space-x-2">
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <Link
            href="/examples"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/examples"
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Examples
          </Link>
          <Link
            href="/docs"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/docs")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Docs
          </Link>
        </div>
      </div>
    </nav>
  );
}
