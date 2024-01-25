import { siteConfig } from "@/config/site.config";
import React from "react";

function SiteFooter() {
  return (
    <footer className="flex justify-center w-full p-8 text-xs text-center border-t border-t-foreground/10">
      <p className="text-sm">
        <a
          className="flex px-3 py-2 no-underline border rounded-md hover:bg-btn-background-hover"
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <span>&copy;</span>
          {siteConfig.copyright}
        </a>
      </p>
    </footer>
  );
}

export default SiteFooter;
