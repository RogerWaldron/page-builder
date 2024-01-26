import { cn } from "@/lib/utils";
import React from "react";

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center space-x-4 py-4 md:pb-10",
        className
      )}
      {...props}
    />
  );
}

export default PageActions;
