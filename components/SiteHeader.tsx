import React from "react";
import { SiteMainNav } from "./SiteMainNav";
import { ModeToggle } from "./ThemeSwitcher";
import AuthButton from "./AuthButton";
import SiteMobileNav from "./SiteMobileNav";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full mb-8">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        <SiteMainNav />
        <SiteMobileNav />
        <AuthButton />
        <ModeToggle />
      </div>
    </header>
  );
}

export default SiteHeader;
