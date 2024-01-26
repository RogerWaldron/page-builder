import React from "react";
import { SiteMainNav } from "./SiteMainNav";
import { ModeToggle } from "./ThemeSwitcher";
import AuthButton from "./AuthButton";
import SiteMobileNav from "./SiteMobileNav";
import AuthNavLinks from "./AuthNavLinks";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full mb-8">
      <div className="container flex items-center h-14">
        <SiteMainNav />
        <SiteMobileNav />
        <AuthNavLinks />
        <AuthButton />
        <ModeToggle />
      </div>
    </header>
  );
}

export default SiteHeader;
